import React from 'react';//
import  './ListingsSlider.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function Slider({prop}){
    const [sliderRef] = useKeenSlider()
    return (
        <div className='photo'>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <img className="keen-slider__image" src={prop[0]?.photo}></img>
            </div>
            <div className="keen-slider__slide number-slide2">
              <img className="keen-slider__image" src={prop[1]?.photo}></img>
            </div>
            <div className="keen-slider__slide number-slide3">
              <img className="keen-slider__image" src={prop[2]?.photo}></img>
            </div>
            <div className="keen-slider__slide number-slide4">
              <img className="keen-slider__image" src={prop[3]?.photo}></img>
            </div>
            <div className="keen-slider__slide number-slide5">
              <img className="keen-slider__image" src={prop[4]?.photo}></img>
            </div>
          </div>
        </div>
    )
}
export default Slider;
