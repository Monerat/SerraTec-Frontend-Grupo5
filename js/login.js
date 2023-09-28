const padrao = [// Define um array padrão de usuários (pode ser usado se o Local Storage estiver vazio)
    {
        usuario: "josezin",
        email: "jose@dasilva.com",
        password: "123456",
    },
]

let usuarios = localStorage.getItem("usuarios");// Tenta obter a lista de usuários do Local Storage

if (usuarios) {
    usuarios = JSON.parse(usuarios);// Se a lista de usuários já existir, a decodifica de JSON
}
else{
    usuarios = padrao; // Caso contrário, utiliza o array padrão definido acima
} 
// Inicializa a base de usuários no Local Storage
localStorage.setItem("usuarios",JSON.stringify(usuarios));
// Inicializa o token no Local Storage com o valor "false"
localStorage.setItem("token",false);

// Função para armazenar informações do formulário no Local Storage
function armazenarBase(event){
    event.preventDefault();// Impede o envio padrão do formulário
    const inputUser = document.getElementById("cadastroUsuario");// Obtém o elemento de entrada de usuário do formulário
    const inputEmail = document.getElementById("cadastroEmail");// Obtém o elemento de entrada de email do formulário
    const inputPassword = document.getElementById("cadastroPassword");// Obtém o elemento de entrada de senha do formulário
    const inputConfirmPwd = document.getElementById("cadastroConfirmPwd");// Obtém o elemento de confirmação de senha do formulário    

    if(!checarUsuarioBase(inputUser.value) && (inputPassword.value == inputConfirmPwd.value)){// Verifica se o usuário não está na base e se as senhas coincidem
        const user =  //Pega os valores para adicionar
        {
        usuario: inputUser.value,
        email: inputEmail.value,
        password: inputPassword.value,
        };
        usuarios.push(user);   // Adiciona o novo usuário ao array de usuários
        localStorage.setItem("usuarios",JSON.stringify(usuarios));// Atualiza a lista de usuários no Local Storage
        window.location.href="login.html"// Redireciona para a página de login após o cadastro bem-sucedido
    }else if ((inputPassword.value == inputConfirmPwd.value)){
        window.alert("As duas senhas não conferem")// Exibe um alerta se as senhas não coincidirem
    }else {
        window.alert("Usuário já cadastrado na Base")// Exibe um alerta se o usuário já estiver cadastrado na base
    }
}

//Checa se o usuario já está inserido na base.
function checarUsuarioBase(user){// Função para verificar se o usuário já está na base
    const usuario = localStorage.getItem("usuarios")// Obtém a lista de usuários do Local Storage
    let decodeUser = JSON.parse(usuario); // Decodifica a lista de usuários de JSON para um objeto JavaScript

    const existingUser = decodeUser.find((element) => element.usuario === user);// Procura pelo usuário na lista de usuários usando o método find
    
    if(existingUser){ // Retorna verdadeiro se o usuário existir na base, caso contrário, retorna falso
        return true;
    }
    else{
        return false;
    }
}

//Faz o login se o usuario e senha estiver na base.
function inputLogin(event){// Função para fazer login se o usuário e senha estiverem na base
    event.preventDefault();// Impede o envio padrão do formulário
    const inputUser = document.getElementById("loginUsuario");// Obtém os valores dos campos de entrada do formulário de login
    const inputPassword = document.getElementById("loginSenha");
        
    if(checarLogin(inputUser.value,inputPassword.value)){ // Chama a função checarLogin para verificar se o usuário e senha estão na base
        window.location.replace("app.html");  // Redireciona para a página "app.html" após o login bem-sucedido
    }
    else{
        window.alert('Usuário ou senha inválidos') // Exibe um alerta se o login não for bem-sucedido
    }
}

//Checa se o par Usuario e Senha estao na base
function checarLogin(user, password){ // Função para verificar se o par de usuário e senha está na base
    const usuario = localStorage.getItem("usuarios");// Obtém a lista de usuários do Local Storage
    let decodeUser = JSON.parse(usuario);// Decodifica a lista de usuários de JSON para um objeto JavaScript
    
    const existingUser = decodeUser.find((element) => element.usuario === user && element.password===password);
      // Procura pelo par de usuário e senha na lista de usuários usando o método find
    if(existingUser){ // Se o par de usuário e senha for encontrado na base
        localStorage.setItem("token",true);// Define o token como "true" no Local Storage (indicando login bem-sucedido)
        return true;// Retorna verdadeiro
    }
    else{
        return false;// Retorna falso se o par não for encontrado
    }
}