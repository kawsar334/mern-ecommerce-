import "./slider.scss"
import { sliderItems } from "../../data"
import { useState } from "react"
import {NavLink} from "react-router-dom";
import slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0) ;

  const handleSlide = (operation)=>{
    if(operation=== "l"){
      setSlideIndex(slideIndex > 0 ?slideIndex -1 :sliderItems.length-1) ;
    }else{
      setSlideIndex(slideIndex<sliderItems.length ?slideIndex +1 : 0)
    }
  }
  return (
    <div className="sliderContainer" >
      <i class="fa-solid fa-circle-arrow-left" onClick={()=>handleSlide("l")} ></i>
    <div className="wrapper" style={{transform:`translateX(${slideIndex * -100}vw)`}}>
      {sliderItems.map((item)=>(
        <div className="slide" style={{ background: `#${item.bg}` }} key={item.id}>
        <div className="imgContainer">
            <img src={item.img} alt="" className="img" /> 
        </div>
        <div className="infoContainer">
            <h1 className="title">{item.title}</h1>
            <div className="desc">{item.desc}</div>
            <button>Shop now</button>
        </div>
      </div>
      ))}
    </div>
      <i class="fa-solid fa-circle-arrow-right" onClick={() => handleSlide("r")}></i>



    </div>
  )
}

export default Slider