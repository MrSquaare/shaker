declare namespace JSX {
  interface IntrinsicElements {
    "iconify-icon": React.HTMLAttributes<HTMLElement> & {
      [key: string]: string;
    };
  }
}
