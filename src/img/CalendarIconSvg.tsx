import * as React from "react";
import { SVGProps } from "react";
const CalendarIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#173236"
      d="M4.167 18.333c-.459 0-.851-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.176V5c0-.458.163-.85.49-1.177.326-.326.718-.49 1.177-.49H5V1.667h1.667v1.666h6.666V1.667H15v1.666h.833c.459 0 .851.164 1.177.49.327.326.49.719.49 1.177v11.667c0 .458-.163.85-.49 1.177-.326.326-.718.49-1.177.49H4.167Zm0-1.666h11.666V8.333H4.167v8.334Zm0-10h11.666V5H4.167v1.667Z"
    />
  </svg>
);
export default CalendarIconSvg;
