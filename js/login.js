
// const EXPIRATION_TIME = 3600000;
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
    if(!checarUsuarioBase(inputUser.value)){
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
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    const usuario = localStorage.getItem("usuarios");
    let decodeUser = JSON.parse(usuario);
    
    const existingUser = decodeUser.find((element) => element.usuario === user && element.password===password);
    
    if(existingUser){
        localStorage.setItem("token",true);
        return true;
    }
    else{
        return false;
    }
}

function testDelay(){
    setTimeout(() => {
        console.log(localStorage.getItem("token"));
      }, 2000);
}