
alert("¡Bienvenido al calculador de cuotas para que puedas sacar tu boleto espacial y volar sobre la tierra!")


let aceptaCuota= prompt("¿Está interesando en realizar cuotas para hacer su viaje?. Si no, escriba 'salir'")

let calculoInteres= (costoVuelo,interesAplicado) => {return (costoVuelo*interesAplicado)/100};

let calculoCuota=(cuotaUser,cuotaIntereses, costoVuelo) =>{return (costoVuelo+cuotaIntereses)/cuotaUser}

function cuotas(costoVuelo){    

    alert("El precio de su vuelo elegido es de $"  + costoVuelo);

    let cuotasUser=parseInt(prompt("¿En cuantas cuotas desea hacer el pago?"))

    if(((cuotasUser>1)&&(cuotasUser<64)) && (cuotasUser!= isNaN)){

        let cuotaIntereses=calculoInteres(costoVuelo,30)

        let totalCuota=calculoCuota(cuotasUser, cuotaIntereses, costoVuelo)

        alert("¡Genial!, deberás hacer " + cuotasUser + " pagos de $" + parseInt(totalCuota))
        alert("¡Gracias por tenernos en cuenta!")

    }else{
        if(cuotasUser<1){
            alert("Ingresó un número menor al minimo de cuotas ofrecidas (1)");
        }else if(cuotasUser>64){
            alert("Ingresó un número mayor al máximo de cuotas ofrecidas (64)")
        }else{
            alert("Ingresó un dato no válido(Ingrese números)")
        }
    }

}

while(aceptaCuota!="salir"){
    
    let presupuestoInicial=prompt("¿Que presupuesto desea cotizar? Escriba: 'Barato', 'Mediano' o 'Caro")

    switch(presupuestoInicial.toLocaleLowerCase()){

        case("barato"):
            cuotas(20000)
            break;   
        case("mediano"):
            cuotas(30000)
            break;
        case("caro"):
            cuotas(45000)
            break;
        default:
            alert("Por favor, revise el dato ingresado");
            break;
    }

    break;
}
