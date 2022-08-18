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
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };

        let resultsItems = JSON.parse(getImage);

        return (
            <div>
                <Slider {...settings}>
                    {fetchedData !== '' ? resultsItems.map((x, index) => {
                        return (
                            <Items
                                results={x}
                            />
                            
                        );
		            }) : <p>Esperando datos</p>}
                    {/* {fetchedData !== '' ? resultsItems.map((x, index) => {
                        return (
                            <div key={index}>
                                <img className="image-slick" src={x} alt=""/>
                            </div>
                            
                        );
		            }) : <p>Esperando datos</p>} */}
                </Slider>
            </div>
        );
}

export default SimpleSlider;