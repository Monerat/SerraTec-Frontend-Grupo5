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
    armazenarLocalStorage()
    console.log(inputEmail)
    console.log(inputPassword)
}

    localStorage.setItem(usuarios,JSON.stringify(usuarios));

     // Função para lidar com o envio do formulário
     document.getElementsByClassName("nomeForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o valor do campo de entrada de nome
        const nome = document.getElementById("nome").value;

        // Armazena o nome no Local Storage
        localStorage.setItem("nomeUsuario", nome);

        // Exibe o nome na página
        document.getElementById("nomeSalvo").textContent = "Nome Salvo: " + nome;
    });

    // Verifica se o nome já está no Local Storage
    const nomeArmazenado = localStorage.getItem("nomeUsuario");

    if (nomeArmazenado) {
        // Se o nome já estiver armazenado, exibe na página
        document.getElementById("nomeSalvo").textContent = "Nome Salvo: " + nomeArmazenado;
    }