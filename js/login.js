const padrao = [
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123456",
    },
]

const token = false;

let usuarios = localStorage.getItem("usuarios")

if (usuarios) usuarios = JSON.parse(usuarios);
else usuarios = padrao;
//inicializa a base
localStorage.setItem("usuarios",JSON.stringify(usuarios));
//inicializa o token
localStorage.setItem("token",token);

//Armazena oque foi inserido nos campos do formulario no local Storage.
function armazenarBase(event){
    event.preventDefault();
    const inputUser = document.getElementById("cadastroUsuario");
    const inputEmail = document.getElementById("cadastroEmail");
    const inputPassword = document.getElementById("cadastroPassword");
    const inputConfirmPwd = document.getElementById("cadastroConfirmPwd");
    console.log(inputPassword)
    console.log(inputConfirmPwd)
    console.log((inputPassword == inputConfirmPwd))
    

    if(!checarUsuarioBase(inputUser.value) && (inputPassword.value == inputConfirmPwd.value)){
        const user =  
        {
        usuario: inputUser.value,
        email: inputEmail.value,
        password: inputPassword.value,
        };
        usuarios.push(user);

        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        window.location.href="login.html"
<<<<<<< HEAD

    }else{
=======
    }else if (checarUsuarioBase(inputUser.value)){
>>>>>>> 03a9a802795a0f100ae8ad2ad76c452a1f45b8bf
        window.alert("Usuário já cadastrado na Base")
    }else {
        window.alert("As duas senhas não conferem")
    }
}

//Checa se o usuario já está inserido na base.
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

//Faz o login se o usuario e senha estiver na base.
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

<<<<<<< HEAD

=======
//Checa se o par Usuario e Senha estao na base
>>>>>>> 03a9a802795a0f100ae8ad2ad76c452a1f45b8bf
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
<<<<<<< HEAD
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
=======
>>>>>>> 03a9a802795a0f100ae8ad2ad76c452a1f45b8bf
}