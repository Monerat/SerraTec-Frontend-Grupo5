const url = "https://rickandmortyapi.com/api/character/"; //coloca um valor constante url com a URL da api do Rick and Morty

let totalPersonagens;

const EXPIRATION_TIME = 60000;

consultaAllChars();
trocarStatusToken();

const portal = document.getElementById("portal");
const nome = document.getElementById("name");
const image = document.getElementById("image");
const species = document.getElementById("species");
const gender = document.getElementById("gender");

//Função para pegar a quantidade total de personagens.
function consultaAllChars(){
    fetch(url) //Usa a função fetch() para fazer a consulta à URL. A função fetch() retorna uma promessa, que é um objeto que representa uma operação assíncrona.
        .then((res) => res.json())//Usa a função then() para tratar a resposta da consulta. A função then() recebe dois argumentos: uma função que é chamada quando a consulta é bem-sucedida e uma função que é chamada quando a consulta falha.
        .then((dados) => {
            totalPersonagens = dados.info.count-1;
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
        nome.innerHTML = "<h1>É isso mesmo, Malandro! <br>Você é o "+ dados.name + "!</h1>";
        image.innerHTML = '<img src="' + dados.image + '"/>';
        species.innerHTML = "<h3>A sua espécie é: " + dados.species + "</h3>";
        gender.innerHTML = "<h3>O seu genero é: " + dados.gender + "</h3>";
    });
}

//Chama as funções para disponibilizar as informações na tela do app.html.
function randomNum() {
    const nro = getRandomInt(totalPersonagens)+1; //o +1 é por que o Random pega um numero de 0 a N e a API começa a contagem em 1.
    tocarSom()
    consultaPersonagem(nro);
}

function tocarSom() {
    const audio = document.getElementById("portalSFX");
    audio.currentTime = 0;
    audio.play();
}

//verifica se o usuario está logado, se nao estiver vai enviar para a pagina de login.
function checkLogado(){
    const teste = localStorage.getItem("token")
    if (teste == "true"){ 
        randomNum();
    }
    else{
        window.alert("Tempo de login finalizado, logue novamente")
        window.location.replace("login.html");
    }
}

//função para trocar o status do token depois de um tempo.
function trocarStatusToken(){
    setTimeout(() => {
        localStorage.setItem("token", false);
      }, EXPIRATION_TIME);
}

portal.onclick = checkLogado;