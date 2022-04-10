import React from 'react'
import './slider.css'

import banner from '../../statics/Banner.jpg'




const Slider = () => {
  return (
    <div className='slider__container'>
        <img src={banner} alt='banner'/>
    </div>
  )
}

export default Slider