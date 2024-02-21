import * as React from 'react';
import { SVGProps } from 'react';
const MessageIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#173236"
      d="M5 11.667h6.666V10H5v1.667Zm0-2.5h10V7.5H5v1.667Zm0-2.5h10V5H5v1.667ZM1.667 18.333v-15c0-.458.163-.85.49-1.177.325-.326.718-.49 1.176-.49h13.334c.458 0 .85.164 1.177.49.326.327.49.719.49 1.177v10c0 .459-.164.851-.49 1.177-.327.327-.72.49-1.178.49H5l-3.333 3.333Zm2.625-5h12.375v-10H3.332v10.938l.958-.938Z"
    />
  </svg>
);
export default MessageIconSvg;
