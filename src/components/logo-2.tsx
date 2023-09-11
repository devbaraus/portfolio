import { SVGAttributes } from 'react';

type Props = {} & SVGAttributes<HTMLOrSVGElement>;

export default function Logo2(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 923.76 800'
      fill={'currentColor'}
      {...props}
    >
      <g
        id='Layer_2'
        data-name='Layer 2'
      >
        <g
          id='Layer_2-2'
          data-name='Layer 2'
        >
          <path d='M461.88,0,380.79,140.44,300,280.44,230.94,400,161.66,520H323.31l28.87-50,28.61-49.56,80.83-140,.26-.44,109.7,190L681.27,660H80.83L0,800H923.76Z' />
        </g>
      </g>
    </svg>
  );
}
