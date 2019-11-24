/** 리소스 import시 필요한 타입 정의 */

declare module '*.css' {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module '*.sass' {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module '*.md' {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module '*.png' {
  const path: string;
  // eslint-disable-next-line import/no-default-export
  export default path;
}

declare module '*.jpg' {
  const path: string;
  // eslint-disable-next-line import/no-default-export
  export default path;
}

declare module '*.ico' {
  const path: string;
  // eslint-disable-next-line import/no-default-export
  export default path;
}
