 export function validacion(input) {
     const tipoDeInput = input.dataset.tipo;
     //VALIDACIÓN PARA AGREGAR CLASE INVALIDA
     if (input.validity.valid) {
         input.parentElement.classList.remove("input--invalid");
         input.parentElement.querySelector(".input-message-error").innerHTML = "";
     } else {
         input.parentElement.classList.add("input--invalid");
         input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
     }
 }

 const tipoDeErrores = ["valueMissing", "typeMismatch", ];
 const mensajesDeError = {
     nombre: {
         valueMissing: "El campo nombre no puede estar vacío",
     },
     email: {
         valueMissing: "El campo correo no puede estar vacío",
         typeMismatch: "El correo no es válido",
     },
     asunto: {
         valueMissing: "El campo asunto no puede estar vacío",
     },
 };

 function mostrarMensajeDeError(tipoDeInput, input) {
     let mensaje = "";
     tipoDeErrores.forEach((error) => {
         if (input.validity[error]) {
             mensaje = mensajesDeError[tipoDeInput][error];
         }
     });
     return mensaje;
 }