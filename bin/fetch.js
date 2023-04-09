const got = require('got')
const {ensureDir, writeFile} = require('fs-extra')
const {join, resolve} = require('path')
const Figma = require('figma-js')
const PQueue = require('p-queue')
require('dotenv').config()
const {FIGMA_TOKEN, FIGMA_FILE_URL} = process.env

const outputDir = './src/'

const options = [
    { format: 'svg', scale: '1' },
    { format: 'png', scale: '1' },
    { format: 'png', scale: '2' },
    { format: 'png', scale: '3' }
]

const contentTypes = {
    'svg': 'image/svg+xml',
    'png': 'image/png',
}

if(!FIGMA_TOKEN) {
  throw Error('Cannot find FIGMA_TOKEN in process!')
}

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN
})

// Fail if there's no figma file key
let fileId = null
if (!fileId) {
  try {
    fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1]
  } catch (e) {
    throw Error('Cannot find FIGMA_FILE_URL key in process!')
  }
}

console.log(`Exporting ${FIGMA_FILE_URL} components`)

async function main() {
    const { data } = await client.file(fileId);
    console.log('Processing response');
    const components = {}

    function check(c) {
      if (c.type === 'COMPONENT') {
        const {name, id} = c
        const {description = '', key} = data.components[c.id]
        const {width, height} = c.absoluteBoundingBox

        components[id] = {
          name,
          id,
          key,
          file: fileId,
          description,
          width,
          height
        }
      } else if (c.children) {
        // eslint-disable-next-line github/array-foreach
        c.children.forEach(check)
      }
    }

    data.document.children.forEach(check)

    if (Object.values(components).length === 0) {
        throw Error('No components found!')
    }

    console.log(`${Object.values(components).length} components found in the figma file`)

    await ensureDir(join(outputDir));
    await writeFile(resolve(outputDir, 'data.json'), JSON.stringify(components))

    for (const option of options) {
        console.log('Getting export urls for', option);
        const imagesResponse = await client.fileImages(fileId, {
          format: option.format,
          ids: Object.keys(components),
          scale: option.scale,
        });

        for (const id of Object.keys(imagesResponse.data.images)) {
          components[id].image = imagesResponse.data.images[id];
        }

        await queueTasks(
          Object.values(components).map((component) => async () => {
            const response = await got.get(component.image, {
              headers: {
                'Content-Type': contentTypes[option.format],
              },
              encoding: option.format === 'svg' ? 'utf8' : 'binary',
            })

            const fileName = `${component.name}${option.scale > 1 ? `@${option.scale}x` : ''}.${option.format}`;
            const componentOutputDir =
            option.format === 'png'
                ? join(outputDir, option.format, component.name)
                : join(outputDir, option.format);

            await ensureDir(componentOutputDir)
            await writeFile(
                join(componentOutputDir, fileName),
                response.body,
                option.format === 'svg' ? 'utf8' : 'binary'
            )
          })
        );
    }
}

main().catch((error) => {
    console.error('Error:', error);
})

function queueTasks(tasks) {
    const queue = new PQueue(Object.assign({concurrency: 3}))
    for (const task of tasks) {
        queue.add(task)
    }
    queue.start()
    return queue.onIdle()
}
