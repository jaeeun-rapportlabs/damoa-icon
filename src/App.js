import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 24px 12px;
  list-style: none;
`

class List extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          {
            Object.keys(icons)
              .map((key, index) => {
                const src = icons[key]
                return <li key={index}>
                  <img src={src} style={{ padding: '12px' }}/>
                </li>
              })
          }
        </Container>
      </div>
    )
  }
}

export default List;
