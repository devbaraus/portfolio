import { SVGAttributes } from 'react';

type Props = {} & SVGAttributes<HTMLOrSVGElement>;

export default function Logo(props: Props) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 1166.39 1016.23'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        data-name='Layer 2'
        id='Layer_2'
      >
        <g
          data-name='Layer 2'
          id='Layer_2-2'
        >
          <path d='M603.11,11.5a23,23,0,0,0-39.83,0L477.86,159.44l-105,181.86L283.2,496.62,213.12,618A23,23,0,0,0,233,652.5H389.91A23,23,0,0,0,409.83,641l30.86-53.45,37.17-64.38,105-181.87.34-.57L725.7,587.55,848.28,799.87a23,23,0,0,1-19.92,34.5H101.48a23,23,0,0,0-19.92,11.5L3.12,981.73A23,23,0,0,0,23,1016.23H1143.36a23,23,0,0,0,19.92-34.5Z' />
        </g>
      </g>
    </svg>
  );
}
