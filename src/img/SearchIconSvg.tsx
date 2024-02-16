import * as React from "react";
import { SVGProps } from "react";
const SearchIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#173236"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.544 15.833c3.947 0 7.146-2.984 7.146-6.666 0-3.682-3.2-6.667-7.146-6.667-3.946 0-7.146 2.985-7.146 6.667s3.2 6.666 7.146 6.666ZM19.476 17.5l-3.573-3.334"
    />
  </svg>
);
export default SearchIconSvg;
