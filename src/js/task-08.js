
"use strict";

const formLogin = document.getElementsByClassName("login-form")[0];

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const formLogin = document.getElementsByClassName("login-form")[0];
    const elem = formLogin.elements;

    const obj = {
        email : elem["email"].value,
        password : elem["password"].value
    }

    if (obj.email.length == 0 || obj.password.length == 0){
        alert("Please insert BOTH username and password");
        return;
    }

    console.log("email : " + obj.email);
    console.log("password : " + obj.password);

    formLogin.reset();
})