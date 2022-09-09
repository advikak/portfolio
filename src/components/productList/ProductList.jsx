
import React from 'react'
import "./productList.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import Product from '../product/Product'
//import "swiper/css";
//import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My personal projects</h1>
        <p className="pl-desc">
          Swipe to view more
        </p>
        <div className="container py-4 px-4 justify-content-center">
          <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
      
          breakpoints={{
            0: {
              slidesPerView:1,
              spaceBetween:10
            },
            480: {
              slidesPerView:2,
              spaceBetween:10
            },
            768: {
              slidesPerView:3,
              spaceBetween:15
            },
            1024: {
              slidesPerView:3,
              spaceBetween:15
            }    
          }}>

              <SwiperSlide>
                <Product data={{imgSrc:"https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png", desc: 'Todo list', title: "Created using Java, made use of jUnit, Swing library, and JSON", link:"https://github.com/advikak/Todo-list"}}/>
              </SwiperSlide>
              <SwiperSlide>
                <Product data={{imgSrc:"https://www.kindpng.com/picc/m/102-1023199_png-for-free-cartoon-group-of-people-png.png", desc: 'Groupifynder', title: "Completed during a 24 hour hackathon, first time using ReactJS, HTML, CSS", link:"https://github.com/advikak/group-finder"}}/>
              </SwiperSlide>
              <SwiperSlide>
                <Product data={{imgSrc:"https://assets-global.website-files.com/5e39e095596498a8b9624af1/5ffca6e3e0d8ad9231cc2af6_Portfolio-course---final.png", desc: 'This portfolio!', title: "Used ReactJS, HTML, CSS, Bootstrap", link:"https://github.com/advikak/portfolio"}}/>
              </SwiperSlide>
              <SwiperSlide>
                <Product data={{imgSrc:"https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", desc: 'Reaction Tester', title: "Small project I made just for practice, used JavaScript, HTML, CSS", link:"https://github.com/advikak/ReactionTester"}}/>
              </SwiperSlide>
              <SwiperSlide>
                <Product data={{imgSrc:"https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/8b/a3/e9/8ba3e910-a240-549d-302c-7dacba2923d2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png", desc: 'BBC news clone', title: "Practicing HTML and CSS", link:"https://github.com/advikak/BBC-Clone"}}/>
              </SwiperSlide>
              <SwiperSlide>
                <Product data={{imgSrc:"https://wallpapercave.com/wp/wp5250561.jpg", desc: 'Facebook Analysis Model', title: "Used linear regression to predict amount of facebook likes in the programming language R"}}/>
              </SwiperSlide>
            
          </Swiper>
  
    <div class="swiper-scrollbar"></div>

        </div>
     
        
    
      </div>
    </div>
  );
};

export default ProductList;