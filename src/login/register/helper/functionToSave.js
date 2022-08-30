
import { DataRegister } from "../Data/userData.js";
import { dataUser } from "../Data/userData.js";

import {passwordRegister } from "../Data/formData.js"
import { nameRegister } from "../Data/formData.js";

export function toSaveData(){

    event.preventDefault()

    dataUser.push(new DataRegister( nameRegister.value , passwordRegister.value))


    for(let i=0; i<dataUser.length; i++){
        localStorage.setItem(`User${i}`,JSON.stringify(dataUser[i]))
    }
    
}