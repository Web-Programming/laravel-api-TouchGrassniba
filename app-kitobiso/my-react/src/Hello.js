import React from "react";

function Hello(props){
    const{nama,pesan} = props;
    return <h1>Halo bro {nama},{pesan}</h1>;
}

Hello.defaultProps={
    nama:"Jessen",
    pesan:"Mantap",
}

export default Hello;