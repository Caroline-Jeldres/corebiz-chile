import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './css/Banner.css';
import banner from '../statics/Banner.jpg'
export class Banner extends Component{
    render(){
        return(
            <div className="div-banner">
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={banner} className="sliderimg" />
                    <img src={banner} className="sliderimg" />
                    <img src={banner} className="sliderimg" />

                </AliceCarousel>
           </div>
        )
    }
}
export default Banner