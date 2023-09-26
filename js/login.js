const usuarios = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123154",
    },
]

function enviar(event){
    event.preventDefault()
    const inputLogin = document.getElementById("exampleInputEmail1")
    const inputEmail= document.getElementById("exampleInputPassword1")
    console.log(inputLogin.value)
    console.log(inputEmail.value)
}

const user =  
{
    usuario: "arnaldo",
    email: "ar@dasilva.com",
    password: "123154",
};

usuarios.push(user)

localStorage.setItem(usuarios,JSON.stringify(usuarios));