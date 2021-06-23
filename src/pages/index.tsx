import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Dots from '../util/Dots';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  // marginBottom: 64,
  maxWidth: '55vw',
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
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

// markup
const IndexPage = () => (
  <main style={pageStyles} id="main">
    <Dots/>
    <title>Jasper Croome</title>
    <h1 style={headingStyles}>
      Hi! I'm Jasper Croome.
    </h1>
    <p style={paragraphStyles}>
      I'm focused on delighting my fellow humans through elegant and informative experiences.
    </p>
    <h4 style={headingStyles}>
      I have deep work experience creating products with:
    <div style={skillGrid}>
    <div style={{...skillCell, gridArea: 'react'}}>
      <StaticImage
        src="../images/react.png"
        alt="react.js"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
    <div style={{...skillCell, gridArea: 'ts'}}>
      <StaticImage
        src="../images/ts.png"
        alt="typescript"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
    <div style={{...skillCell, gridArea: 'd3'}}>
      <StaticImage
        src="../images/d3.png"
        alt="d3.js"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
  </div>
  </h4>
  <h4 style={headingStyles}>
      I'm currently working on side projects to get up to speed with:
    <div style={learnGrid}>
    <div style={{gridArea: 'svelte',display: 'flex', justifyContent:'center'}}>
      <StaticImage
        src="../images/svelte.png"
        alt="svelte.js"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
    <div style={{gridArea: 'graphQL',display: 'flex', justifyContent:'center'}}>
      <StaticImage
        src="../images/graphql.png"
        alt="graphQL"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
    <div style={{gridArea: 'gatsby',display: 'flex', justifyContent:'center'}}>
      <StaticImage
        src="../images/gatsby.png"
        alt="gatsby"
        placeholder="tracedSVG"
        width={90}
        />
    </div>
  </div>
  </h4>
  </main>
);

export default IndexPage;
