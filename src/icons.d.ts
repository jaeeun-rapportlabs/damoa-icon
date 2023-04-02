/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const IcTabHomeOff24: Icon;
export const IcTabMarchhomeOff24: Icon;
export const IcTabCategoryOff24: Icon;
export const IcTabProfileOff24: Icon;
export const IcTabCartOff24: Icon;
export const IcTabLikeOff24: Icon;
export const IcTabMarchhomeOn24: Icon;
export const IcTabCategoryOn24: Icon;
export const IcTabProfileOn24: Icon;
export const IcTabCartOn24: Icon;
export const IcTabLikeOn24: Icon;
export const IcTabHomeOn24: Icon;
