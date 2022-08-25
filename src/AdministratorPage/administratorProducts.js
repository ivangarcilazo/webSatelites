import { newProducts } from "./Data/ProductsToAdd.js"
import { evalueData } from "./helpers/evalueData.js"
import { sendFormAp } from "./helpers/sendFormAp.js"

import {idElement} from "./Data/ToEvalue.js"
import {UserPrice} from "./Data/ToEvalue.js"


//Data & evalue
idElement.addEventListener('input', evalueData)
UserPrice.addEventListener('input', evalueData)

//Send Form
const formAP=document.querySelector('#formAP')
formAP.addEventListener('submit',sendFormAp )









