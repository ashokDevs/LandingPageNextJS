import * as React from "react";
import { SVGProps } from "react";
const Test = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="red"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-ballpen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 6 7 7-4 4" />
    <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0L20.414 7.586a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L5.828 14.172a2.828 2.828 0 0 0 0 4zM4 20l1.768-1.768" />
  </svg>
);
export default Test;
