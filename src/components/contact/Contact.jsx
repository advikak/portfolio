import React from 'react'
import "./contact.css"
//import Git from "../../img/git.png"

const Contact = () => {
 
  return (
    <div className="c">
      <div className="c-bg">
      <div className="c-wrapper">
          <h1 className="c-title">Contact Info</h1>

            <div className="c-info-item">
            <a href="https://github.com/advikak" target="_blank" rel="noreferrer">
            <button className='c-icon'>Git</button>
            <button className='c-icon'>idk</button>
            <button className='c-icon'>idk</button>
            </a>        

          </div>
        </div>
        </div>
      </div>
  );
};

export default Contact;