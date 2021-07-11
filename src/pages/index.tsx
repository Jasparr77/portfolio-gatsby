import * as React from 'react';
import Paths from '../util/Paths';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

// styles

export type Theme = {background:string,
  0:string,
  1:string,
  2:string,
  3:string,
  4:string,
  fontColor:string}

const themes:{[key:string]:Theme} = {
  evening:{
    background:'#154360',
    0:'#DAF7A6',
    1:'#FFC300',
    2:'#FF5733',
    3:'#C70039',
    4:'#900C3F',
    fontColor:'whiteSmoke',
  },
  morning:{
    background:"#ccfbfe",
    0:"#cdd6dd",
    1:"#cdcacc",
    2:"#cdaca1",
    3:"#cd8987",
    4:"#d29492",
    fontColor:'#154360'
  }
}

const theme = Math.random() > 0.5 ? 'evening' : 'morning'

const pageStyles = {
  color: themes[theme].fontColor,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  backgroundColor: themes[theme].background,
  margin: -10,
  border: 0,
  padding: 0
};
const skillGrid = {
  display: 'grid',
  gridTemplateColumns: '30vw 30vw 30vw',
  gridTemplateRows: '110px',
  gridTemplateAreas: '"react ts d3"'
}

const learnGrid = {
  ...skillGrid,
  gridTemplateAreas: '"svelte graphQL gatsby"'
}

const sections = [
  {text:"Hi! I'm Jasper Croome.",
      style:{fontWeight:800, fontSize:'64px', fill:themes[theme].fontColor},
      x:"10%",
      y:.5,
      items:[]
    },
  {text:"I'm focused on delighting my fellow humans through elegant and informative experiences.",
      style:{fontWeight:800, fontSize:'26px', fill:themes[theme].fontColor},
      x:"10%",
      y:.275,
      items:[]
    },
  {text:"I have deep work experience creating products with:",
  style:{fontWeight:800, fontSize:'20px', fill:themes[theme].fontColor},
    x:"10%",
    y:.45,
    divStyle:skillGrid,
    items:[
      {name:'react.js'},
      {name:'d3.js'},
      {name:'typescript'},
  ]
},
  {text:"I'm currently working on side projects to get up to speed with:",
  style:{fontWeight:800, fontSize:'20px', fill:themes[theme].fontColor},
  x:"10%",
  y:.55,
  divStyle:learnGrid,
  items:[
    {name:'svelte.js'},
    {name:'gatsby.js'},
    {name:'graphQL'}
    ]
  },
  {text:"Here's how you can reach me:",
  style:{fontWeight:800, fontSize:'20px', fill:themes[theme].fontColor},
  x:"10%",
  y:.55,
  divStyle:learnGrid,
  itemTypes:'links',
  items:[
    {name:'linkedIn',url:'https://www.linkedin.com/in/jaspercroome/'},
    {name:'email',url:'mailto:jaspercroome@protonmail.com'},
    {name:'gitHub',url:'https://github.com/Jasparr77'},
    ]
  }
]

const IndexPage = () => {
  
  const holderRef0 = useRef(null)
  const holderRef1 = useRef(null)
  const holderRef2 = useRef(null)
  const holderRef3 = useRef(null)
  
  const refs = [holderRef0, holderRef1, holderRef2, holderRef3]

  const [nextRef, setNextRef ] = useState(refs[2])
  const handleArrowClick = (e) => {
    console.log(e)
    nextRef.current.scrollIntoView({behavior: "smooth", block:"center"})
  }

  let windowWidth = 1440
  let windowHeight = 900

  useEffect(()=>{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
  },[])

  const [hoveredEl, setHoveredEl] = useState<string>()

  const placeText:(sii:number)=>string=(sii)=>{
    switch (sii){
      case 2: return 'end'
        break;
      case 1: return 'middle'
        break;
      default: return 'beginning'
    }
  }

  return (
  <main style={pageStyles} id="main" >
    <title>Jasper Croome</title>
    <div style={{
      backgroundColor: 'none',
      position:'absolute',
      height:windowHeight,
      width:windowWidth,
      overflow:'scroll'
    }}
    >
    <svg x="0" y="0" height={(windowHeight * sections.length )- (windowHeight * 2)} width={windowWidth}>
      {sections.map((s:typeof sections[0],i)=>(
        <svg x={s.x} y={(windowHeight * (i+1)) * (s.y)} overflow="visible">
        <text style={s.style}  ref={refs[i]}>
          {s.text}
        </text>
        {s.items.length > 0 && s.items.map((si, sii)=> (
          <text
            x={windowWidth* ((sii)/s.items.length)}
            y={"80px"}
            textAnchor={
              placeText(sii)
            }
            style={{
              ...s.style,
              fontWeight:800,
              fontSize:'5vw',
              cursor: si.url ? 'pointer' : 'mouse'
            }}
            onClick={()=>{
                if (si.url) window.open(si.url)
              }}
              >
            {si.name}
          </text>
          ))}
        </svg>
      ))}
      <path
      d={`M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638
        c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0
        C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913
        c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z`}
      stroke={themes[theme].fontColor}
      strokeOpacity="1"
      fill="whitesmoke"
      transform={`translate(${(windowWidth /2) - 31.836} ${windowHeight * .8})`}
      onClick={(e)=>handleArrowClick(e)}
      style={{
        position: 'fixed',
        bottom: '25px',
        cursor: 'pointer'
      }}
    />
    </svg>
    </div>
    <svg x="0" y="0" height={windowHeight} width={windowWidth}>
    <Paths theme={themes[theme]}/>
    </svg>
  </main>
  )};

export default IndexPage;
