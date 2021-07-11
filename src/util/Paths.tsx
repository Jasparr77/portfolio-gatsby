import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { scaleLinear, line, curveCardinalClosed, curveBasisClosed, curveStepBefore, curveLinearClosed } from 'd3';
import { Theme } from '../pages';

type PathProps = {theme:Theme}

const Paths:React.FC<PathProps> = (props) => {
  const {theme} = props;
  
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

    let width = 1280
    let height = 900

    const xScale = scaleLinear([-5,105],[0,width]);
    const yScale = scaleLinear([-5,105],[0,height]);
  
    const lines = [
      curveCardinalClosed,
      curveStepBefore,
      curveBasisClosed,
      curveLinearClosed
    ]

    const lineGenerator0 = line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(lines[0])
    
    useEffect(()=>{
      width = window.innerWidth;
      height = window.innerHeight;
    },[]
    )

  return (
    <svg overflow="visible" x={0} y={0}height={height}width={width}>
      {points0.map((p,i)=>{
        const index = (i === 0) ? points0.length -1 : i -1
        return (
        <line x1={xScale(p[0])} y1={yScale(p[1])} x2={xScale(points0[index][0])} y2={yScale(points0[index][1])} stroke={theme.fontColor} strokeWidth=".25px">
        <animate 
          attributeName="x1"
          values={`${xScale(p[0])}; ${xScale(points1[i][0])}; ${xScale(p[0])}`}
          dur="60s"
          repeatCount="indefinite"
        />
        <animate 
        attributeName="y1"
        values={`${yScale(p[1])}; ${yScale(points1[i][1])}; ${yScale(p[1])}`}
        dur="60s"
        repeatCount="indefinite"
      />
      <animate 
      attributeName="x2"
      values={`${xScale(points0[index][0])}; ${xScale(points1[index][0])}; ${xScale(points0[index][0])}`}
      dur="60s"
      repeatCount="indefinite"
    />
    <animate 
    attributeName="y2"
    values={`${yScale(points0[index][1])}; ${yScale(points1[index][1])}; ${yScale(points0[index][1])}`}
    dur="60s"
    repeatCount="indefinite"
  />
        </line>)
      })
      }
      <defs>
        <filter id="glow">
          <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="4"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d={lineGenerator0(points0)}
        strokeWidth="2px"
        stroke={theme[0]}
        fill="none"
        style={{filter:"url(#glow)"}}
        opacity="1"
      >
        <animate
          attributeName="d" 
          values={`${lineGenerator0(points0)};${lineGenerator0(points1)};${lineGenerator0(points0)}`}
          dur="60s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke" 
          values={`${theme[0]};${theme[1]};${theme[2]};${theme[3]};${theme[4]};${
            theme[3]};${theme[2]};${theme[1]};${theme[0]}`}
          dur="60s"
          repeatCount="indefinite"
        />
      </path>
      </svg>
  );
};

export default Paths;
