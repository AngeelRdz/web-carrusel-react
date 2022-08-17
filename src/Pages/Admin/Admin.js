import React from "react";

import styles from "./admin-styles.scss";

const Admin = ({ setSearch }) => {
    let searchBtn = (e) => {
        let setimg = [];
        e.preventDefault();
        const existsImage = localStorage.getItem("slick-imagen");
        console.log('existsImage::', existsImage);

        if (existsImage && existsImage !== '') {
            // console.log('elemento:', document.getElementById('imagen').value);
            let a = JSON.parse(existsImage);
            let datosDeCadaEquipoRecuperado = document.getElementById('imagen').value;
            console.log('elemento nuevo:', datosDeCadaEquipoRecuperado);
            console.log('elementos guardados:', a);

            a.push(datosDeCadaEquipoRecuperado);
            localStorage.setItem('slick-imagen', JSON.stringify(a));

            // const arraynew = existsImage.push(document.getElementById('imagen').value);
            console.log('array nuevo:', a);
        } else {
            setimg = new Array(document.getElementById('imagen').value);

            // setimg = {"imagenes": document.getElementById('imagen').value};

            console.log('setimg::', setimg);
        
            // Guardar
            localStorage.setItem("slick-imagen", JSON.stringify(setimg));
        }
    };

    return (
        <form
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
            <input
                placeholder="Paste your image url here"
                className={styles.input}
                type="text"
                id="imagen"
                name="prod"
            />
            <button
                onClick={searchBtn}
                className={`${styles.btn} btn btn-primary fs-5`}
            >
                Subir
            </button>
        </form>
    );  
};

export default Admin;
