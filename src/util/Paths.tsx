import React, { useEffect } from 'react';
import { scaleLinear, line, curveCardinalClosed, curveStepAfter } from 'd3';

const Paths:React.FC = () => {
  let i = 0;
  const points0:[number, number][] = [];
  const points1:[number, number][] = [];
  while (i <= 42) {
    const randomX0 = Math.random() * 100;
    const randomY0 = Math.random() * 100;
    const randomX1 = Math.random() * 100;
    const randomY1 = Math.random() * 100;
    points0.push([randomX0, randomY0]);
    points1.push([randomX1, randomY1]);
    i += 1;
  }

  // if (document){
    let width = 1280
    let height = 800
    useEffect(()=>{
      width = window.innerWidth;
      height = window.innerHeight;
    },[]
    )
    

  const xScale = scaleLinear([0,100],[0,width]);
  const yScale = scaleLinear([0,100],[0,height]);

  const lineGenerator = line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(curveCardinalClosed)
  const lineGenerator2 = line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(curveStepAfter)

  return (
    <svg overflow="visible" x={0} y={0}height={0}width={0}>
      <path d={lineGenerator2(points0)} strokeWidth=".5px"stroke="whiteSmoke" fill="salmon" opacity=".25">
        <animate
          attributeName="d" 
          values={`${lineGenerator(points0)};${lineGenerator(points1)};${lineGenerator(points0)}`}
          dur="300s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill" 
          values="salmon;slateBlue;lightgreen;slateBlue;salmon"
          dur="300s"
          repeatCount="indefinite"
        />
      </path>
      </svg>
  );
};

export default Paths;
