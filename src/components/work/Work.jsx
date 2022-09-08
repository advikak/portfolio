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
      Lorem ipsum dolor sit amet. Qui nostrum architecto et quibusdam autem rem earum quis. A earum reiciendis eos fugiat ipsam qui voluptas nihil aut ipsum alias. Qui similique Quis ut rerum quia quo impedit libero ab eaque. Ad internos explicabo nam quia nobis ut dolores quod.

Non magni iure eos esse voluptas aut ratione iusto vel nihil dicta vel porro perferendis vel ipsum similique. Eum quaerat quisquam sit accusantium facere rem corporis quia sit laudantium sunt non nobis corrupti!

Ex atque itaque nam dicta voluptas et praesentium voluptas. Qui voluptatum ipsum non explicabo itaque et mollitia enim.
        
      </p>

      <Carousel className="slider">
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