/* eslint-disable import/no-default-export */
/** 리소스 import시 필요한 타입 정의 */

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.md' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.ico' {
  const path: string;
  export default path;
}
