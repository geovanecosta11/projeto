const ppura = document.querySelector(".ppura")
const psuave =document.querySelector(".psuave")
const pquente=document.querySelector(".pquente")
const vpura=document.querySelector(".vpura")
const vclaro=document.querySelector(".vclaro")
const vneutro=document.querySelector(".vneutro")
const aquente=document.querySelector(".aquente")
const aprofundo=document.querySelector(".aprofundo")
const aneutro=document.querySelector(".aneutro")
const iclaro=document.querySelector("iclaro")
const iprofundo=document.querySelector(".iprofundo")
const ipura=document.querySelector(".ipura")
const imagem=document.querySelector(".img")

const invernoClaro =document.querySelector(".inverno-claro");
const fechado =document.querySelector(".fechado");
const fechaImagem =document.querySelector(".fecha-imagem");


invernoClaro.addEventListener("click", () => {
    fechado.classList.add("aberto");
});

fechaImagem.addEventListener("click", () => {
    fechado.classList.remove("aberto");
});