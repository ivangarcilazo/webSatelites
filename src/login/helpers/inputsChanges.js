import { formLogin } from "../data/inputEffect/dataInput.js";
import { inputsLogin } from "../data/inputEffect/dataInput.js";

export function changeThemeFocus(){

    for(const input of inputsLogin){
        input.addEventListener('click', ()=>{
            formLogin.className=("containerformLoginBlack")
            formLogin.classList.remove('containerformLogin')
        })

    }

}