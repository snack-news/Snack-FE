interface ICompany {
  logoImg: string;
  companyName: string;
  key: string;
}

interface IExternalLink {
  href: string;
  title: string;
  img?: string;
}

interface ITag {
  highlight?: boolean;
  children: string;
  key: string;
}

interface INews {
  title: string;
  content: string;
  tags: ITag[];
  link?: IExternalLink;
  key: string;
}

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
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
