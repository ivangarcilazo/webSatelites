import { idElement } from "../Data/ToEvalue.js"
import { UserPrice } from "../Data/ToEvalue.js"
import { newProducts } from "../Data/ProductsToAdd.js"

export function evalueData(){

    const messageRetry=document.querySelector("#retryIdMessage")
    if(newProducts.some((id)=>id.id==idElement.value)){
      messageRetry.innerHTML="<strong class='messageRetry'>ID repeated</strong>"
    }else{
      messageRetry.innerHTML="<strong class='messageRetry'></strong>"
    }
  
    let isNaNError=document.querySelector('#isNaNError')
    if(isNaN(parseInt(UserPrice.value)) ){
      isNaNError.innerHTML="<strong class='messageRetry'>Enter a number</strong>"
    }else{
      isNaNError.innerHTML="<strong class='messageRetry'>✔️</strong>"
    } 
    
  }