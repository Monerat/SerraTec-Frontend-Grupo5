const usuarios = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123154",
    },
]

function enviar(event){
    event.preventDefault()
    const inputUser = document.getElementById("cadastroUsuario")
    const inputEmail = document.getElementById("cadastroEmail")
    const inputPassword = document.getElementById("cadastroPassword")
    const user =  
    {
    usuario: inputUser.value,
    email: inputEmail.value,
    password: inputPassword.value,
    };
    console.log(user)
    usuarios.push(user)
}

localStorage.setItem(usuarios,JSON.stringify(usuarios));