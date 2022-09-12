import "./about.css";
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.giphy.com/avatars/gonryon/xp3WLnBWBLoI.gif"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right ">
        <div className="a-text">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         I prefer dark mode btw
        </p>
        <p className="a-desc">
          I'm Advika! In the past few years I've developed a love for coding, some languages I have experience with are shown below.
          What I really like about programming is the amount of creative freedom you get to make anything you want. 
           This website is my first of many, and I'm excited to learn more!
           
        
        </p>
        </div>

        <Carousel className="slider-1" interval="1000">
          

      <Carousel.Item >
        <img
          className="item  "
          src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
          alt="First slide"

          style={{
            height:"100px",
            width:"100px"
            
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-2"
          src="https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"
          alt="Second slide"

          style={{
            height:"100px",
            width:"90px"
          }}
        />

      </Carousel.Item>
      <Carousel.Item >
        <img
          className="item-3"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          alt="Third slide"

          style={{
            height:"100px",
            width:"100px"
          }}
        />
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="item-4"
          src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
          alt="Third slide"

          style={{
            height:"100px",
            width:"100px"
          }}
        />
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="item-5"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
          alt="Third slide"

          style={{
            height:"100px",
            width:"100px"
          }}
        />
      </Carousel.Item>

    </Carousel>
    
      
      </div>
    </div>
  );
};

export default About;