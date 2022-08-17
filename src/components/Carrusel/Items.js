import React from "react";

const Card = ({ results }) => {
	let display;
    let resultsItems = JSON.parse(results);

    console.log('results::', resultsItems);

	if (resultsItems) {
   	    display = resultsItems.map((x, index) => {
			return (
                // <div key={index}>
                    <img className="image-slick" src={x} alt=""/>
                // </div>
			);
		});
	} else {
   	    display = "No hay imagenes :/";
	}

	return <>{display}</>;
};

export default Card;
