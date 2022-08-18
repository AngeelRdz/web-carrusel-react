import React from "react";

const Card = ({ results }) => {
	let display;
    // let resultsItems = JSON.parse(results);

    console.log('results::', results);

	if (results) {
   	    display = 
			(
                <div>
                    <img className="image-slick" src={results} alt=""/>
                </div>
                
			);
	} else {
   	    display = "No hay imagenes :/";
	}

	return <>{display}</>;
};

export default Card;
