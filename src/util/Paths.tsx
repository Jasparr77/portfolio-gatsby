import React, { useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import { scaleLinear, line, curveCardinalClosed, curveLinearClosed, curveMonotoneX, curveCardinal, curveStepAfter, curveCardinalOpen, curveStepBefore, curveBasisClosed, } from 'd3';
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

    let width = 1440
    let height = 900

    const xScale = scaleLinear([-5,105],[0,width]);
    const yScale = scaleLinear([-5,105],[0,height]);
  
    const lines = [
      curveCardinalClosed,
      curveBasisClosed,
    ]
    const lineGenerator0 = line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(lines[0])
    const lineGenerator1 = line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(lines[1])
    
    useEffect(()=>{
      width = window.innerWidth;
      height = window.innerHeight;
    },[]
    )

    const config = {
      duration: (15)*1000,
    }
    const pathTransitions = useSpring({
      loop:true,
      config:config,
      to:[
        {d:lineGenerator0(points1), stroke:theme[1]},
        {d:lineGenerator1(points1), stroke:theme[2]},
        {d:lineGenerator1(points0), stroke:theme[3]},
      ],
      from:{d:lineGenerator0(points0), stroke:theme[0]}
    })

      const x1Location = (p:[number,number], acc:number) => useSpring({
        loop:true,
        config:config,
        to:[
          {loc:xScale(points1[acc][0])},
          {loc:xScale(points1[acc][0])+.01},
          {loc:xScale(p[0])},
        ],
        from:{
          loc:xScale(p[0])
        }
      })

      const y1Location = (p:[number,number], acc:number) => useSpring({
        loop:true,
        config:config,
        to:[
          {loc:yScale(points1[acc][1])},
          {loc:yScale(points1[acc][1])+.01},
          {loc:yScale(p[1])},
        ],
        from:{
          loc:yScale(p[1])
        }
      })

      const x2Location = (acc:number) => useSpring({
        loop:true,
        config:config,
        to:[
          {loc:xScale(points1[acc][0])},
          {loc:xScale(points1[acc][0])+.01},
          {loc:xScale(points0[acc][0])},
        ],
        from:{
          loc:xScale(points0[acc][0])
        }
      })

      const y2Location = (acc:number) => useSpring({
        loop:true,
        config:config,
        to:[
          {loc:yScale(points1[acc][1])},
          {loc:yScale(points1[acc][1])+.01},
          {loc:yScale(points0[acc][1])},
        ],
        from:{
          loc:yScale(points0[acc][1])
        }
      })


  return (
    <svg overflow="visible" x={0} y={0}height={height}width={width}>
      {points0.map((p,i)=>{
        const index = (i === 0) ? points0.length -1 : i -1
        return (
        <animated.line
          x1={x1Location(p, i)['loc']}
          y1={y1Location(p, i)['loc']}
          x2={x2Location(index)['loc']}
          y2={y2Location(index)['loc']}
          stroke={theme.fontColor} strokeWidth=".25px"
        />
      )
      })}
      <animated.path
        d={pathTransitions.d}
        strokeWidth="2px"
        stroke={theme[0]}
        fill="none"
        opacity=".85"
      />
      <animated.path
        d={pathTransitions.d}
        strokeWidth="4px"
        stroke={theme[0]}
        fill="none"
        opacity=".5"
      />
      <animated.path
        d={pathTransitions.d}
        strokeWidth="6px"
        stroke={theme[0]}
        fill="none"
        opacity=".25"
      />
      </svg>
  );
};

export default Paths;
