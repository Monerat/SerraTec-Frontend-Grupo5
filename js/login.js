// const EXPIRATION_TIME = 3600000;
const padrao = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123456",
    },
]

let usuarios = localStorage.getItem("usuarios")

if (usuarios) usuarios = JSON.parse(usuarios);
else usuarios = padrao;


function armazenarBase(event){
    event.preventDefault();
    const inputUser = document.getElementById("cadastroUsuario");
    const inputEmail = document.getElementById("cadastroEmail");
    const inputPassword = document.getElementById("cadastroPassword");
    if(!checarUsuarioBase(inputUser.value)){
        const user =  
        {
        usuario: inputUser.value,
        email: inputEmail.value,
        password: inputPassword.value,
        };
        usuarios.push(user);

        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        window.location.href="login.html"

    }else{
        window.alert("Usuário já cadastrado na Base")
    }
}

function checarUsuarioBase(user){

    const usuario = localStorage.getItem("usuarios")

    let decodeUser = JSON.parse(usuario);

    const existingUser = decodeUser.find((element) => element.usuario === user);
    if(existingUser){
        return true;
    }
    else{
        return false;
    }
}

function inputLogin(event){
    event.preventDefault();
    const inputUser = document.getElementById("loginUsuario");
    const inputPassword = document.getElementById("loginSenha");
        
    if(checarLogin(inputUser.value,inputPassword.value)){
        window.location.replace("app.html");
    }
    else{
        window.alert('Usuário ou senha inválidos')
    }
}


function checarLogin(user, password){ 
    const usuario = localStorage.getItem("usuarios");

    let decodeUser = JSON.parse(usuario);
    
    const existingUser = decodeUser.find((element) => element.usuario === user && element.password===password);
    
    if(existingUser){
        sessionStorage.setItem("token",true);
        return true;
    }
    else{
        return false;
    }
}


function obterUsuario() {
    const usuario = localStorage.getItem("usuarios")
    let decodeUser = JSON.parse(usuario);

    if(decodeUser) {
        return decodeUser;
    }
}

function testDelay(){
    setTimeout(() => {
        console.log(obterUsuario());
      }, 2000);
}