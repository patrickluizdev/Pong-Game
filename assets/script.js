//criação das variaveis
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var teclas = {};

var bola = {
    x: canvas.width / 2 - 15,
    y: canvas.height / 2 - 15,
    altura: 30,
    largura: 30,
    dirx: -1,
    diry: 1,
    mod: 0,
    speed: 50
};
    
var esquerda = {
    x: 10,
    y: canvas.height / 2 - 60,
    altura: 120,
    largura: 30,
    score: 0,
    speed: 15
};

var direita = {
    x: 560,
    y: canvas.height / 2 - 60,
    altura: 120,
    largura: 30,
    score: 0,
    speed: 15
};

// Valores das Teclas: ^ 38, \/ 40,   32, w 87, s 83
document.addEventListener("keydown", function(e){
    teclas[e.keyCode] = true;
   alert(e.keyCode);
}, false);

// função para limpar a entrada, parar de movimentar quando solta a tecla 
document.addEventListener("keyup", function(e){
    delete teclas[e.keyCode];
}, false);

// função de movimentação dos blocos (Precisa limitar o direito y)
function movebloco(){
    if(87 in teclas && esquerda.y > 0)
        esquerda.y -= esquerda.speed;

    if(83 in teclas && esquerda.y + esquerda.altura < canvas.height)
        esquerda.y += esquerda.speed;  

    if(38 in teclas && esquerda.y > 0)
        direita.y -= direita.speed;  
    
    if(40 in teclas && direita.y + direita.altura < canvas.height)
        direita.y += direita.speed; 
};
// Função do movimento da bola.
function movebola(){
    // Movimento da bola vai variar com a posição que encosta no bloco
    if(bola.y + bola.altura >= esquerda.y && bola.y <= esquerda.y + esquerda.altura && bola.x <= esquerda.x + esquerda.largura)
        bola.dirx = 1;
        
    else if(bola.y + bola.altura >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.largura >= direita.x )
        bola.diry

};

//Função de criação dos blocos
function desenha(){
    //limpar a aréa do canva
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //gerar o movimento dos blocos
    movebloco();
    //Cor dos objetos desenhados
    ctx.fillStyle = "white";
    //criação dos obetos
    ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);
    ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura);
    ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);
    //Criação do placar
    ctx.font = "20px Arial";
    ctx.fillText("Player 1: " + esquerda.score, 50, 20);
    ctx.fillText("Player 2: " + direita.score, canvas.width - 160, 20);
   // setTimeout( desenha, 10);
};
// intervalo de atualização de quadro
setInterval(desenha, 5);



//const grid = document.querySelector('.grid')