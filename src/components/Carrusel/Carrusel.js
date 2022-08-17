import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import Items from "./Items";

import "./carrusel.scss";

const SimpleSlider = () => {
        const getImage = localStorage.getItem("slick-imagen");
        let [fetchedData, updateFetchedData] = useState([]);

        if (getImage === null) {
            console.log('estoy vacio');
        }

        useEffect(() => {
            (async function () {
                console.log('data:::', getImage);
    
                updateFetchedData(getImage);
            })();
        }, []);  

        console.log('getImage:::', fetchedData);

        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: false,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };

        return (
            <div>
                <Slider {...settings}>
                    <Items
                        results={getImage}
                    />
                    {/* {getImage.map((x, index) => {
                        return (
                            <div key={index}>
                                <img className="image-slick" src={x} alt=""/>
                            </div>
                            
                        );
		            })} */}
                {/* <div>
                    <img className="image-slick" src="./images/abstract01.jpg" alt=""/>
                </div>
                <div>
                    <img className="image-slick" src="./images/abstract02.jpg" alt=""/>
                </div>
                <div>
                    <img className="image-slick" src="./images/abstract03.jpg" alt=""/>
                </div>
                <div>
                    <img className="image-slick" src="./images/abstract04.jpg" alt=""/>
                </div> */}
                </Slider>
            </div>
        );
}

export default SimpleSlider;