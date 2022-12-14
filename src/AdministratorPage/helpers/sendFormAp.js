import { Products } from "../Data/ProductsToAdd.js";
import { newProducts } from "../Data/ProductsToAdd.js";

import { evalueData } from "./evalueData.js";

import {idElement} from "../Data/ToEvalue.js"
import {UserPrice} from "../Data/ToEvalue.js"


export function sendFormAp(){

    event.preventDefault()

    let UserPicture=document.querySelector("#pictureAP").value

    let garmentValue = document.querySelector("#garmentSelectorAP");
    let selectGarment = garmentValue.options[garmentValue.selectedIndex].text;

    let UserSize=document.querySelector("#sizeAP").value

    evalueData()

    const sentForm=document.querySelector('#checkMessage')

    if(newProducts.some((id)=>id.id==idElement.value)||(isNaN(parseInt(UserPrice.value)))){
        evalueData()
        sentForm.className=""
        sentForm.innerHTML='<span class="checkSimbolSubmit"></span>'
    }else{
        newProducts.push(new Products(UserPicture, idElement.value, selectGarment, UserSize, UserPrice.value))
        sentForm.className="animationSent"
        sentForm.innerHTML='<span class="checkSimbolSubmit">✔️</span>'
       
    }
   
}