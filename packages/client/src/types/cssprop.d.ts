import { CSSProp } from 'styled-components';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Attributes {
    css?: CSSProp;
  }
}
