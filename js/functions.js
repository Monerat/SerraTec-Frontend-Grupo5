const url = "https://rickandmortyapi.com/api/character/"; //coloca um valor constante url com a URL da api do Rick and Morty

// declara a variavel que armazena o valor total de personagens disponiveis na API
let totalPersonagens;
const EXPIRATION_TIME = 60000; //60 segundos de duração no uso da API.

consultaAllChars(); //chama a funcao para consultar todos os personagens disponiveis, apenas para pegar o total de personagens na API.
trocarStatusToken();

const portal = document.getElementById("portal"); //Pega o Botão pelo ID.
const nome = document.getElementById("name"); //Pega a div do Nome pelo ID.
const image = document.getElementById("image"); //Pega a div da imagem pelo ID.
const species = document.getElementById("species"); //Pega a div da especie pelo ID.
const gender = document.getElementById("gender"); //Pega a div do genero pelo ID.

//Função para pegar a quantidade total de personagens.
function consultaAllChars(){
    fetch(url)
        .then((res) => res.json())//parseia os dados da url em json.
        .then((dados) => { //percorre esses dados.
            totalPersonagens = dados.info.count-1; //Esse -1 é por que a contagem de de personagens na API começa em 1.
        });
}

//Funcão para pegar um valor aleatorio.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//consulta a API buscando o personagem de id nro.
function consultaPersonagem(nro) {
  fetch(url + nro)
    .then((res) => res.json())
    .then((dados) => {
        nome.innerHTML = "<h1>É isso mesmo, Malandro! <br>Você é o "+ dados.name + "!</h1>"; //Pega o nome do personagem e joga dentro da div com id = name.
        image.innerHTML = '<img src="' + dados.image + '"/>'; //Pega a imagem do personagem e joga dentro da div com id = image.
        species.innerHTML = "<h3>A sua espécie é: " + dados.species + "</h3>"; //Pega a especie e joga dentro div com id = species.
        gender.innerHTML = "<h3>O seu genero é: " + dados.gender + "</h3>"; //Pega o genero e joga dentro da div com id = gender.
    });
}
//Chama as funções para disponibilizar as informações na tela do app.html.
function randomNum() {
    const nro = getRandomInt(totalPersonagens)+1; //o +1 é por que o Random pega um numero de 0 a N e a API começa a contagem em 1.
    tocarSom() //chama a função de tocar um audio do portal.
    consultaPersonagem(nro); //chama a função que consulta a API.
}

function tocarSom() {
    const audio = document.getElementById("portalSFX");// Obtém o elemento de áudio.
    audio.play();// Toca o som.
}

//verifica se o usuario está logado, se nao estiver vai enviar para a pagina de login.
function checkLogado(){
    const teste = localStorage.getItem("token")//pega o staus do token.
    if (teste == "true"){ 
        randomNum(); //chama a função randomNum para pegar um personagem aleatorio na API.
    }
    else{
        window.alert("Tempo de login finalizado, logue novamente")
        window.location.replace("login.html"); //manda para pagina de login.
    }
}

//função para trocar o status do token depois de um tempo.
function trocarStatusToken(){
    setTimeout(() => {
        localStorage.setItem("token", false);
      }, EXPIRATION_TIME);
}

//quando a img do portal for clicado ele chama a funcao check logado.
portal.onclick = checkLogado;