import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Paths from '../util/Paths';
import Arrow from '../util/Arrows';

// styles

const themes = {
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
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: '55vw',
};
const paragraphStyles = {
  marginBottom: 48,
};
const skillGrid = {
  display: 'grid',
  gridTemplateColumns: '110px 110px 110px',
  gridTemplateRows: '110px',
  gridTemplateAreas: '"react ts d3"'
}

const skillCell = {display: 'flex', justifyContent:'center'}

const learnGrid = {
  ...skillGrid,
  gridTemplateAreas: '"svelte graphQL gatsby"'
}
const learnCell = {...skillCell}

const sections = [
  {text:"Hi! I'm Jasper Croome.",
      style:{fontWeight:800, fontSize:'64px', fill:themes[theme].fontColor},
      x:"10%",
      y:.5
    },
  {text:"I'm focused on delighting my fellow humans through elegant and informative experiences.",
      style:{fontWeight:800, fontSize:'26px', fill:themes[theme].fontColor},
      x:"10%",
      y:.275
    },
  {text:"I have deep work experience creating products with:",
  style:{fontWeight:800, fontSize:'20px', fill:themes[theme].fontColor},
    x:"10%",
    y:.5
  },
  {text:"I'm currently working on side projects to get up to speed with:",
  style:{fontWeight:800, fontSize:'20px', fill:themes[theme].fontColor},
    x:"10%",
    y:.5
  }
]

const IndexPage = () => (
  <main style={pageStyles} id="main" >
    <title>Jasper Croome</title>
    <div style={{
      backgroundColor: 'none',
      position:'absolute',
      height:innerHeight,
      width:innerWidth,
      overflow:'scroll'
    }}
    >
    <svg x="0" y="0" height={innerHeight * sections.length} width={innerWidth} overflow="scroll" onScroll={()=>{console.log('scroll')}}>
      {sections.map((s:typeof sections[0],i)=>(
        <text style={s.style} x={s.x} y={(innerHeight * (i+1)) * (s.y)}>
          {s.text}
        </text>
      ))}
    </svg>
    </div>
    <svg x="0" y="0" height={innerHeight} width={innerWidth}>
    <Paths theme={themes[theme]}/>
    <Arrow direction="down" stroke={themes[theme].fontColor} x="50%" y="90%"/>
    </svg>
  </main>
);

export default IndexPage;
