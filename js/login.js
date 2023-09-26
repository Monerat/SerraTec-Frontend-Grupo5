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
    const user =  
    {
    usuario: inputUser.value,
    email: inputEmail.value,
    password: inputPassword.value,
    };
    usuarios.push(user);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
}



const user = localStorage.getItem("usuarios")
let decodeUser = JSON.parse(user);
console.log(decodeUser[0].usuario)