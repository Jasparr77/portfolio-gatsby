import React from 'react';
import * as d3 from 'd3';

const Dots:React.FC = () => {
  let i = 0;
  const points:[number, number,number,number][] = [];
  while (i <= 100) {
    const randomX2 = Math.random() * 100;
    const randomX1 = Math.random() * 100;
    const randomY2 = Math.random() * 100;
    const randomY1 = Math.random() * 100;
    points.push([randomX2, randomX1, randomY2, randomY1]);
    i += 1;
  }

  // if (document){
  const width = 900;
  const height = 600;

  const xScale = d3.scaleLinear([0,100],[0,width]);
  const yScale = d3.scaleLinear([0,100],[0,height]);
  // const network = '';
  return (
    <svg overflow="visible">
      {points.map((p)=>{
        return (
          <line 
            stroke="black"
            strokeWidth=".125px"
            x1={xScale(p[0])}
            y1={yScale(p[1])}
            x2={xScale(p[2])}
            y2={yScale(p[3])}
          >
            <animate 
              attributeName="x1"
              from={p[0]}
              to={p[3]}
              dur="60s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="y1"
              from={p[1]}
              to={p[2]}
              dur="60s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="x2"
              from={p[2]}
              to={p[1]}
              dur="60s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="y2"
              from={p[3]}
              to={p[0]}
              dur="60s"
              repeatCount="indefinite"
            />
            </line>
        )
      })}
      </svg>
  );
};

export default Dots;
