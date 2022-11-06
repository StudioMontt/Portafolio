import {
    validacion
} from "./validation.js";
const entradas = document.querySelectorAll("input");
entradas.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validacion(input.target);
    });
});