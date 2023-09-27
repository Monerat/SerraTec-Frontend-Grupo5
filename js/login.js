const usuarios = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123456",
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

function checarUsuarioBase(user){
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    const usuario = localStorage.getItem("usuarios")
    let decodeUser = JSON.parse(usuario);

    const existingUser = decodeUser.find((element) => element.usuario === user);

    return existingUser;
}

function checarLogin(user, password){
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    const usuario = localStorage.getItem("usuarios")
    let decodeUser = JSON.parse(usuario);

    const existingUser = decodeUser.find((element) => element.usuario === user && element.password===password);

    return existingUser;
}

function checarSeUsuarioLogado(){
    //checar se o usuario está logado, senão, redireciona-lo para a tela de login
}