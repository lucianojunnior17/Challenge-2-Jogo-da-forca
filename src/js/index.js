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

function escreverLetraCorreta(index){
    tabuleiro.font = 'bold 52px Koulen';
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#000000"

    var eixo =  600/Secreta.length
    tabuleiro.fillText(Secreta[index],560+(eixo*index), 620)
    tabuleiro.stroke()
}

function ecreverLetraIncorreta(letras, errosLeft){
    tabuleiro.font = 'bold 40px Koulen';
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#000000"
    tabuleiro.fillText(letras, 535+(40*(10-errosLeft)),710,40)
}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0 ){
        console.log(key)
        letras.push(key)
        return false
    }
    else{
        letras.push(key.toUpperCase())
        return true
    }
}

function adicinarLetraCorreta (i){
    palavraCorreta += Secreta[i].toUpperCase()
}

function adicionarLetraIncorreta (letter) {
    if(Secreta.indexOf(letter) <= 0){
        erros-=1
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase()
    if(! verificarLetraCorreta(e.key)){
        if(Secreta.includes(letra)){
            adicinarLetraCorreta(Secreta.indexOf(letra))
            for(let i = 0; i < Secreta.length; i++){
                if(Secreta[i] === letra){
                    escreverLetraCorreta(i)
                }

            }
        }
    else{
        if(!verificarLetraCorreta(e.key))
        return
        adicionarLetraIncorreta(letra)
        ecreverLetraIncorreta(letra,erros)
        
    }
}

}