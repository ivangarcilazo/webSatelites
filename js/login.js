alert('Name: admin,  password:12345')


let login=document.querySelector('#formLogin')



login.addEventListener('submit', sendForm)

function sendForm(){
    event.preventDefault()
    
    const nombreAdmin= document.querySelector('#nameLogin').value
    const passwordAdmin=document.querySelector('#passwordLogin').value

    if((nombreAdmin=='admin') && (passwordAdmin=='12345')){
        window.location.href="./administratorPage.html"
    }else{
        let message=document.querySelector('#messageError')

        message.innerHTML='<span class="messageError"><b>Revise los datos introducidos ❌</b></span>'
    }
}



