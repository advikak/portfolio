import "./product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


import React from 'react'

const Product = props => {
  let {imgSrc, desc, title, link} = props.data;
  return (
    <div className="p">
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="p-img overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc}/> 
     <p className="text">{title}</p>
      </div>
    
      <Card.Body className="text-center">
      <Card.Title className="title" >{desc}</Card.Title>


      <a href={link} class="button">Link</a>


      </Card.Body>
   
    
    </Card>
    </div>
  );
};

export default Product;