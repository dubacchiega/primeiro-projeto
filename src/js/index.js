/*
OBJETIVO 1 - quando o usuário clicar no botão de ver o trailer, devemos abrir a modal com o video do trailler

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuário clicar no botão de ver o trailer, devemos abrir a modal com o video do trailler
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela 


OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar o elemento de fechar modal usando js
    - passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer"); //armazenei o botao na variavel
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal"); //armazenei a modal na variavel
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    //.classList.add serve para adicionar mais uma classe na modal
    video.setAttribute("src", linkDoVideo);
}); // o addEventListener serve meio que uma "escuta". dentro do parenteses coloca os parametros. A primeira é um "click" que é quando o usuário clicar. A função arrow é para executar uma ação

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    //.classList.remove serve para tirar uma classe na modal
   video.setAttribute("src", ""); //setAttribute("src","") significa que eu to substituindo o src por um valor vazio
});

