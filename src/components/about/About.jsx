import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://wallpapercave.com/wp/wp6037549.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         This is epic 
        </p>
        <p className="a-desc">
        Lorem ipsum dolor sit amet. Qui nostrum architecto et quibusdam autem rem earum quis. A.
        </p>
      
      </div>
    </div>
  );
};

export default About;