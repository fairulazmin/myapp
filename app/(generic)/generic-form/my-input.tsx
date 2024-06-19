import * as React from "react";

export const FancyButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button ref={ref} className={props.className} type={props.type} {...props}>
    {props.children}
  </button>
));
