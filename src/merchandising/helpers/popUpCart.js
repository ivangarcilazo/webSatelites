//funciones para abrir y cerrar el PopUp

import { containerOfProducts, popUpProductsID } from "../Data/popUp.js";

export function generatePopUpCart(){
    popUpProductsID.classList.remove("closeDisplay")
    popUpProductsID.className="popUpProducts"

    containerOfProducts.className="blurContainerProducts containerProducts"
}

export function closePopUp(){
    popUpProductsID.className="closeDisplay"
  
  containerOfProducts.classList.remove("blurContainerProducts")
}