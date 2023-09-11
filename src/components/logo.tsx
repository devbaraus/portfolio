import { SVGAttributes } from 'react';

type Props = {} & SVGAttributes<HTMLOrSVGElement>;

export default function Logo(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1496.5 1296.8'
      fill='currentColor'
      {...props}
    >
      <g
        id='Layer_2'
        data-name='Layer 2'
      >
        <g
          id='Layer_1-2'
          data-name='Layer 1'
        >
          <path d='M942.24,1296.8h-388l194-336C802.15,1054.18,888.82,1204.27,942.24,1296.8Z' />
          <path d='M1496.5,1296C1310,973,934.7,323,748.25,0,561.75,323,186.46,973.06,0,1296H277.27l-.14.25H415.55c61.8-107,199.92-346.29,263.37-456.17L609.71,720.2,346.56,1176H207.85c153.31-265.53,388.86-673.53,540.4-936l540.4,936H1149.94C1035.47,977.73,862.27,677.72,748.25,480.25L679,600.2,817.48,840.08l0,0L1011.38,1176h0c.15.25,69.28,120,69.43,120.25h138.51l-.14-.25Z' />
        </g>
      </g>
    </svg>
  );
}
