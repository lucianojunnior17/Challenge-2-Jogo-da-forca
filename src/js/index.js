//VARIAVÉIS 


var palavras = ['ALURA','ORACLE','ABACAXI','MORANGO','EMPREGO'];
var tela = document.getElementById('forca');
var tabuleiro =tela.getContext('2d');
var letras = [];
var palavraCorreta = '';
var erros = 9;

function EcolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random()*palavras.length)];
    Secreta = palavra;
    console.log(palavra);
    return palavra;
}

function escreverTracinho(){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#000000"
    tabuleiro.beginPath()
    var eixo = 600/Secreta.length
    for(let i = 0; i < Secreta.length; i++){
        tabuleiro.moveTo(600 + (eixo*i),640);
        tabuleiro.lineTo(550 + (eixo*i),640);
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}escreverTracinho(EcolherPalavraSecreta());


