import React, { useState, useEffect } from "react";

import Items from "../../components/Carrusel/Items";
import Filter from "../../components/Filter/Filter";

// import "./carrusel.scss";

const DeleteImageSlider = () => {
        const getImage = localStorage.getItem("slick-imagen");
        let [fetchedData, updateFetchedData] = useState([]);

        if (getImage === null) {
            console.log('estoy vacio');
        }

        useEffect(() => {
            (async function () {
                console.log('data a mostrar:::', getImage);
    
                updateFetchedData(getImage);
            })();
        }, []);  

        console.log('obtener imagenes:::', fetchedData);

        let resultsItems = JSON.parse(getImage);

        return (
            <div>
                    {/* {fetchedData !== '' ? resultsItems.map((x, index) => {
                        return (
                            // <Items
                            //     results={x}
                            // />
                            <Filter
                                updateStatus={resultsItems}
                            />
                        );
		            }) : <p>Esperando datos</p>} */}
                    <Filter
                        updateStatus={resultsItems}
                    />
                    {/* {fetchedData !== '' ? resultsItems.map((x, index) => {
                        return (
                            <div key={index}>
                                <img className="image-slick" src={x} alt=""/>
                            </div>
                            
                        );
		            }) : <p>Esperando datos</p>} */}
            </div>
        );
}

export default DeleteImageSlider;