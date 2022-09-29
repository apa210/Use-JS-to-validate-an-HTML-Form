/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document
    .getElementById("formulario")
    .addEventListener("submit", validaciones);

  //Se oculta la alerta
  document.querySelector("div.alert.alert-danger").style.display = "none";

  console.log("funciona!");
};

//Logica de validaciones
function validaciones(event) {
  //Variables
  let isFormValidate = true;
  let isRadioSelected = false;
  let textoAlerta = "";

  //CARD
  if (document.querySelector("#exampleInputCard1").value === "") {
    textoAlerta = "Card vacia";
    isFormValidate = false;
    document.querySelector("#exampleInputCard1").classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputCard1")
      .classList.remove("alert-danger");
  }

  //CVC
  if (document.querySelector("#exampleInputCVC1").value === "") {
    textoAlerta = "CVC vacio";
    isFormValidate = false;
    document.querySelector("#exampleInputCVC1").classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputCVC1")
      .classList.remove("alert-danger");
  }

  //Amount
  if (document.querySelector("#exampleInputMonto1").value === "") {
    textoAlerta = "Amount vacio";
    isFormValidate = false;
    document.querySelector("#exampleInputMonto1").classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputMonto1")
      .classList.remove("alert-danger");
  }

  //First Name
  if (document.querySelector("#exampleInputPNombre1").value === "") {
    textoAlerta = "First Name vacio";
    isFormValidate = false;
    document
      .querySelector("#exampleInputPNombre1")
      .classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputPNombre1")
      .classList.remove("alert-danger");
  }

  //Last Name
  if (document.querySelector("#exampleInputSNombre1").value === "") {
    textoAlerta = "Last Name vacio";
    isFormValidate = false;
    document
      .querySelector("#exampleInputSNombre1")
      .classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputSNombre1")
      .classList.remove("alert-danger");
  }

  //City
  if (document.querySelector("#exampleInputSCity1").value === "") {
    textoAlerta = "City vacio";
    isFormValidate = false;
    document.querySelector("#exampleInputSCity1").classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputSCity1")
      .classList.remove("alert-danger");
  }

  //State
  if (document.querySelector("select.form-select").value === "") {
    textoAlerta = "State vacio";
    isFormValidate = false;
    document.querySelector("select.form-select").classList.add("alert-danger");
  } else {
    document
      .querySelector("select.form-select")
      .classList.remove("alert-danger");
  }

  //Postal Code
  if (document.querySelector("#exampleInputPostalCdoe1").value === "") {
    textoAlerta = "Postal Code vacio";
    isFormValidate = false;
    document
      .querySelector("#exampleInputPostalCdoe1")
      .classList.add("alert-danger");
  } else {
    document
      .querySelector("#exampleInputPostalCdoe1")
      .classList.remove("alert-danger");
  }

  //Message
  if (document.querySelector("textarea.form-control").value === "") {
    textoAlerta = "Message vacio";
    isFormValidate = false;
    document
      .querySelector("textarea.form-control")
      .classList.add("alert-danger");
  } else {
    document
      .querySelector("textarea.form-control")
      .classList.remove("alert-danger");
  }

  if (document.querySelector("#inlineRadio1").checked) {
    isRadioSelected = true;
  }
  if (document.querySelector("#inlineRadio2").checked) {
    isRadioSelected = true;
  }
  if (document.querySelector("#inlineRadio3").checked) {
    isRadioSelected = true;
  }
  if (document.querySelector("#inlineRadio4").checked) {
    isRadioSelected = true;
  }

  if (!isFormValidate) {
    event.preventDefault(); //detiene el comportamiento predeterminado

    document.querySelector("div.alert.alert-danger").style.display = "block";
    document.querySelector("div.alert.alert").textContent = textoAlerta;
  } else {
    document.querySelector("div.alert.alert-danger").style.display = "none";
  }

  if (!isRadioSelected) {
    event.preventDefault(); //detiene el comportamiento predeterminado

    document.querySelector("div.alert.alert-danger").style.display = "block";
    document.querySelector("div.alert.alert").textContent =
      "Selected card please";
  }
}
