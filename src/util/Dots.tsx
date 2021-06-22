import React from 'react';
import * as d3 from 'd3';

const Dots:React.FC = () => {
  let i = 0;
  const points:[number, number,number,number][] = [];
  while (i <= 42) {
    const randomX2 = Math.random() * 100;
    const randomX1 = Math.random() * 100;
    const randomY2 = Math.random() * 100;
    const randomY1 = Math.random() * 100;
    points.push([randomX2, randomX1, randomY2, randomY1]);
    i += 1;
  }

  // if (document){
  const width = window.innerWidth;
  const height = window.innerHeight;

  const xScale = d3.scaleLinear([0,100],[0,width]);
  const yScale = d3.scaleLinear([0,100],[0,height]);

  // const network = '';
  return (
    <svg overflow="visible">
      {points.map((p,i)=>{
        let index:number = (
          i === 0 
          ? points.length - 1
          : i-1
        )
        return (
          <>
          <line 
            stroke="black"
            strokeWidth=".125px"
            x1={xScale(p[0])}
            y1={yScale(p[1])}
            x2={xScale(points[index][0])}
            y2={yScale(points[index][1])}
          >
            <animate 
              attributeName="x1"
              from={xScale(p[0])}
              to={yScale(Math.random()*100)}
              dur="30s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="y1"
              from={yScale(p[1])}
              to={xScale(Math.random()*100)}
              dur="30s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="x2"
              from={xScale(p[2])}
              to={yScale(Math.random()*100)}
              dur="30s"
              repeatCount="indefinite"
            />
            <animate 
              attributeName="y2"
              from={yScale(points[index][1])}
              to={xScale(Math.random()*100)}
              dur="30s"
              repeatCount="indefinite"
            />
            </line>
            </>
        )
      })}
      </svg>
  );
};

export default Dots;
