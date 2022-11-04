import { validacion } from "./validacion.js";

const entradas = document.querySelectorAll("input");

inputs.forEach((input) => {
	input.addEventListener("blur", (input) => {
		valida(entradas.target);
	});
});
