declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}