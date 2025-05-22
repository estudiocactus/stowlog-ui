import { SVGAttributes, SVGProps, forwardRef } from "react";

const EstudioCactusIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="138"
    height="140"
    viewBox="0 0 138 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 83.6709L16.9636 133.39L127.935 139.537L0 83.6709Z"
      fill="#365100"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.5398 40.1482L49.9877 101.146L137.776 139.537L42.5398 40.1482Z"
      fill="#6F9E00"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M80.2337 0.345886L72.2034 65.471L137.776 133.915L80.2337 0.345886Z"
      fill="#93D100"
    />
  </svg>
));

EstudioCactusIcon.displayName = "EstudioCactusIcon";

export { EstudioCactusIcon };
