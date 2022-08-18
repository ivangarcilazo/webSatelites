
class Products{
    constructor(id, garment, size, price){
        this.id=id
        this.garment= garment
        this.size=size
        this.price=price
    }
}

let newProducts=[
    {garment:'Remera Galaxia',size:'L', price:25},
    {garment:'Remera Estrella',size:'XL', price:157},
    {garment:'Remera Nebulosa',size:'S', price:320},
    {garment:'Buzo Galaxia',size:'S', price:200},
    {garment:'Buzo Estrella',size:'M', price:350},
    {garment:'Buzo Nebulosa',size:'XXL', price:150}
]

let userChoice=prompt('¿Que quiere hacer con sus productos? \n Responda: Añadir / Salir').toLocaleLowerCase()
    
switch(userChoice){
    case('añadir'):

        let quantityProducts= parseInt(prompt('¿Cúantos productos deseas agregar? \n (Número)'))

        for(let i=1; i<(quantityProducts+1); i++){

            let idNumber=i
            alert('Product id: ' + i)
            let gargamentType=prompt('Prenda (Vestido, remera...')
            let sizeNumber=prompt('Talla')
            let priceNumer=parseFloat(prompt('Precio (Numero)'))

            newProducts.push(new Products(idNumber, gargamentType, sizeNumber, priceNumer))
        }
        
        let deleteProductCheck=prompt('¿Desea remover algún producto? \n Si / No').toLocaleLowerCase()

        switch (deleteProductCheck){
            case('si'):

                let productDelete=(parseInt(prompt('¿Cúal es el ID del producto que desea eliminar?'))-1)

                newProducts.splice(productDelete,1)

            break;
            case('no'):
            break;
            default:
                alert('Dato no válido')
                break;
        }

        alert('¡Listo, todo añadido. Acceda desde el console.log.')

        for(const products of newProducts){
            console.log(products)
        }
      
    break;

    case('salir'):
        break;
    default:
        alert('Por favor, ingrese datos válidos.')
        break;
}

//PRIMERA ENTREGA DEL PROYECTO FINAL

alert('¡Bienvenido a la tienda de ropa!')


userSearch=prompt('¿Qué es lo que buscas?  \n (Remeras, buzos o todos)').toLowerCase()

function userDetails(){
    userBudgetMax=parseInt(prompt('¿Cúal es el precio máximo a pagar?'))
    userTalla=prompt('¿Cúal es su talla?')
    
    return userBudgetMax, userTalla
}



switch(userSearch){
    case('remeras'):
        userDetails()

        const clasificationTshirt= newProducts.filter((tshirt)=>tshirt.garment.includes('Remera'))

        const clasificationPriceTshirt= clasificationTshirt.filter((price)=>price.price<userBudgetMax)

        if(clasificationPriceTshirt.some((size)=>size.size==userTalla.toUpperCase())){


            const clasificationSizeTshirt= clasificationPriceTshirt.filter((size)=>size.size==userTalla.toUpperCase())
            
            alert('¡Accede al console.log para ver los resultados!')

            console.log(clasificationSizeTshirt);
        }else{
            alert('Lo siento, no encontramos tu talle, pero en el console.log podrás ver que tenemos disponible.')
            console.log(clasificationPriceTshirt)
        }


        break;

    case('buzos'):
        userDetails()

        const clasificationBuzos= newProducts.filter((buzos)=>buzos.garment.includes('Buzo'))

        const clasificationPriceBuzos= clasificationBuzos.filter((price)=>price.price<userBudgetMax)

        const clasificationSizeBuzos=clasificationPriceBuzos.filter((size)=>size.size==userTalla.toUpperCase())
   
        
        console.log(clasificationSizeBuzos)

        break;

    default:
        console.log(newProducts)
        break;
}

