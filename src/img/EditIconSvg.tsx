import * as React from 'react';
import { SVGProps } from 'react';
const EditIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#173236"
      d="M4.167 15.833h1.166l7.188-7.187-1.167-1.167-7.187 7.188v1.166Zm11.916-8.396-3.541-3.5 1.166-1.166a1.6 1.6 0 0 1 1.177-.48 1.6 1.6 0 0 1 1.178.48l1.166 1.166c.32.32.486.705.5 1.157.014.451-.139.837-.458 1.156l-1.188 1.187Zm-1.208 1.23L6.042 17.5H2.5v-3.542l8.833-8.833 3.542 3.542Zm-2.938-.605-.583-.583 1.167 1.167-.584-.584Z"
    />
  </svg>
);
export default EditIconSvg;
