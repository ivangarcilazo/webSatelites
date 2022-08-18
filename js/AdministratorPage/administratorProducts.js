class Products{
    constructor(picture, id, garment, size, price){
        this.picture=picture
        this.id=id
        this.garment=garment
        this.size=size
        this.price=price
    }
}

const newProducts=[]



//Data & evalue
let idElement=document.querySelector("#idProductAP")
let UserPrice=document.querySelector("#priceAP")

idElement.addEventListener('input', evalueData)
UserPrice.addEventListener('input', evalueData)

//Function evalueData
function evalueData(){

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

//Send Form
const formAP=document.querySelector('#formAP')
formAP.addEventListener('submit',sendFormAp )

//Function send form
function sendFormAp(){

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







