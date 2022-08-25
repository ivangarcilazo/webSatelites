alert('Name: admin,  password:12345')


let login=document.querySelector('#formLogin')

if((localStorage.getItem('nombreAdmin')=='admin') &&(localStorage.getItem('passwordAdmin')=='12345')){
    window.location.href="./administratorPage.html"
}else{

    login.addEventListener('submit', sendForm)

    function sendForm(){
        event.preventDefault()
        
        const nombreAdmin= document.querySelector('#nameLogin').value
        const passwordAdmin=document.querySelector('#passwordLogin').value
    
        localStorage.setItem('nombreAdmin', nombreAdmin)
        localStorage.setItem('passwordAdmin', passwordAdmin)
        
    
        if((nombreAdmin=='admin') && (passwordAdmin=='12345')){
            window.location.href="./administratorPage.html"  
           
        }
        else{
            let message=document.querySelector('#messageError')
    
            message.innerHTML='<span class="messageError"><b>Revise los datos introducidos ❌</b></span>'
        }
    }
    
}



