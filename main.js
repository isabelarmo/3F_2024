const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2024,6,5,12,35)
const tempoObjetivo2 = new Date (2024,6,15,00,28)
const tempoObjetivo3 = new Date (2024,6,30,20,35)
const tempoObjetivo4 = new Date (2024,11,13,12,35)

let agora = new Date();
contador[0].textContent=tempoObjetivo1 -agora
contador[1].textContent=tempoObjetivo2 -agora
contador[2].textContent=tempoObjetivo3 -agora
contador[3].textContent=tempoObjetivo4 -agora

function calculaTempo(tempoObjetivo){

let segundos
let minutos
let horas
let dias

segundos = (tempoObjetivo - agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;

segundos = Math.floor (segundos);
minutos = Math.floor (minutos);
horas = Math.floor (horas);
dias = Math.floor (dias);

segundos = segundos%60
minutos = minutos%60
horas = horas%24
}

contador[0].textContent= `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

calculaTempo (tempoObjetivo1);
calculaTempo (tempoObjetivo2);
calculaTempo (tempoObjetivo3);
calculaTempo (tempoObjetivo4);


for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
