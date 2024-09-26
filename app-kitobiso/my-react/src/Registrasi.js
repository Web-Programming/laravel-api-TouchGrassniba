import React from "react";

function Registrasi(){

    const [email,setEmail] = React.useState("");
    const [nama,setNama] = React.useState("");
    const [hp,setHp] = React.useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`
            nama:${nama}
            email:${email}
            hp:${hp}
            `)

            console.log(`
                nama:${nama}
                email:${email}
                hp:${hp}`)
    }

}