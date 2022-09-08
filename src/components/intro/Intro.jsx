import React from 'react'
import "./intro.css"
import Sun from "../../img/sun.png"
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";


const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='i'>
        <div className='i-left'>
          <div className="i-left-wrapper">
            <h2 className='i-intro'> Hi there, my name is</h2>
            <h1 className='i-name'>Advika Kumari</h1>
            <p className="i-desc">I'm a computer science student at UBC interested in:</p>
                 <div className="i-title">
                     <div className="i-title-wrapper">
                           <div className="i-title-item">Web Development</div>
                           <div className="i-title-item">Data Analysis</div>
                           <div className="i-title-item">UI/UX design</div>
                           <div className="i-title-item">Front End Development</div>
                           <div className="i-title-item">App Development</div>
                     </div>
                 </div>
                 <p className="i-desc">
                   Welcome to my Website!
                 </p>
          </div>
        </div>

        <div className='i-right'>
            <div className='i-bg' style={{backgroundColor:darkMode && "#333"}}></div>
            <img src={Sun} alt="" className="i-img" />  
        </div>
    </div>
  )
}

export default Intro