const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-game');
const over1 = document.querySelector('.game-over-1'); //Desafio
const over2 = document.querySelector('.game-over-2'); //Desafio
const restart = document.querySelector('.restart'); //Desafio


const jump = () => {  //arrow function, outra forma de definir uma função
    mario.classList.add('jump-mario');
    setTimeout(() => {  //executa uma certa função após certo tempo
        mario.classList.remove('jump-mario');
    }, 500); //esses 500ms são a duração do tempo do Mario
};

// De tempos em tempos, é preciso conferir o status do jogo, ou seja, se houve ou não colisão
// Para saber se o jogo continua ou se o jogo acabou


const loopGame = setInterval( () => {  //criar intervalo pra reconhecer quando os elementos colidem
    const pipePosition = pipe.offsetLeft;  //retorna a medida, em pixels, da distância do canto superior esquerdo do elemento atual para o nó HTMLElement.offsetParent.
    const marioPosition = +window   //marioPosition corresponde à distância do Mario ao chão
        .getComputedStyle(mario) 
        .bottom.replace('px','');  //o px é retirado pra permitir o teste lógico do 'if'
    
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){  // altura do cano é 80px
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;  // p/ o pipe parar na posição da colisão 

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;  // p/ o Mario parar na posição da colisão

    mario.src = "./mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    over1.style.display = "block";  //Desafio
    over2.style.display = "block";  //Desafio
    restart.style.display = "flex";  //Desafio
    


    clearInterval(loopGame)
    }
}, 10); 



document.addEventListener('keydown', jump); //a qq tecla apertada, o 'jump' vai funcionar

// Desafio 


const score = document.querySelector('#score');
score.textContent = 0;
let placar = parseInt(score.textContent);
const teste = over2.style.display;

console.log(teste); 

const loopOver = setInterval( () => {      
     
    if(over2.style.display == "none"){
        placar = placar + 1;
        console.log(placar);
        score.textContent = placar;
    } else{ 
        placar = placar + 0;          
    }    
      
}, 1500);      