declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

// 这里用于扩充window对象上的值
// declare interface Window {}

declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}
