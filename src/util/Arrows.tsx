import React from "react";

const arrowD = `M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638
c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0
C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913
c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z`;

const rotations = {
  left: 90,
  up: 180,
  right: 270,
  down: 0,
};

type ArrowProps = {
  stroke: string;
  direction: string;
  x: number|string;
  y: number|string;
	clickHandler: ()=>{};
  height?: number;
  width?: number;
};

const Arrow = (props: ArrowProps) => {
  const { stroke, x, y, clickHandler } = props;
  return (

				<animate
					attributeName="strokeOpacity" 
					values="1;0.25;1"
          dur="5s"
          repeatCount="indefinite"
        />
				<animate
					attributeName="transform" 
					values={`translate(0 0); translate(0 -25); translate(0 0)`}
          dur="5s"
          repeatCount="indefinite"
        />
		</svg>
  );
};

export default Arrow;
