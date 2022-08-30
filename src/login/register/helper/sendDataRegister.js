

import { submitRegister} from "../Data/formData.js"
import { toSaveData } from "./functionToSave.js"

export function sendDataToSave(){
    submitRegister.addEventListener('click',toSaveData )
}


