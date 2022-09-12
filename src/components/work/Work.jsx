import "./work.css"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Work = () => {
  return (
    <div className="w">
    <div className="w-container">
      <h1 className="w-title">Work experience</h1>
      <p className="w-sub">
       Smart Technologies, Calgary AB (Summer 2021)
      </p>
      <p className="w-desc">
      While working at SMART technologies, I was able to efficiently and accurately process over 1000 software and hardware orders
       for the company. During this process, I was met with many conflicts such as missing customer information in Salesforce, or order
        delays causing customer dissatisfaction. In order to resolve conflicts like this I effectively communicated with the sales team,
         as well as customers in order to ensure their satisfaction. I was also able to gain experience 
         using Power BI as I volunteered to help the business analytics team with creating visualizations with defective product data.
      </p>

      <Carousel className="slider-2" interval="1000">
      <Carousel.Item>
        <img
          className="item"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-3"
          src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/45e29c88-de12-4ef2-b77f-0bbf39e0e8bc.png?auto=format&ixlib=react-9.0.3"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
    
    </div>

   
  </div>

  

  
);
};

export default Work