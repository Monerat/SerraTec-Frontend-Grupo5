const usuarios = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123154",
    },
]

function armazenarBase(event){
    event.preventDefault();
    const inputUser = document.getElementById("exampleInputUser");
    const inputEmail = document.getElementById("exampleInputEmail1");
    const inputPassword = document.getElementById("exampleInputPassword1");
    if(checarUsuarioBase(inputUser.value)){
        const user =  
        {
        usuario: inputUser.value,
        email: inputEmail.value,
        password: inputPassword.value,
        };
        usuarios.push(user);
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
    }else{
        window.alert("Usuário já cadastrado na Base")
    }
}

function checarUsuarioBase(d){
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    const usuario = localStorage.getItem("usuarios")
    let decodeUser = JSON.parse(usuario);
    decodeUser.forEach(element => {
        console.log(element.usuario)
        if(element.usuario==d){
            return false
        }
    });
    return true;
}
