//incializacion de variables
let cardSeen = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = null;
let score = null;

//variables de html
let showMoves = document.getElementById('showMoves');
let showScore = document.getElementById('showScore');
let effect = document.getElementById('effect');



//genero numeros aleatrorios
let numberCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numberCards = numberCards.sort(()=>{return Math.random() - 0.5});

console.log(numberCards)

//funcion principal
function show(id){
    cardSeen ++; //cada vez que destapo una cara se incrementa el movimiento
    console.log(cardSeen)

    if (cardSeen == 1){
        //mostrar la primera carta tomando el id de la misma. 
        card1 = document.getElementById(id);
        firstResult = numberCards[id];
        card1.innerHTML = firstResult ;
        //deshabilitar el primer boton para que el contador no siga aumentando
        card1.disabled = true;

    } else if (cardSeen == 2){
        card2 = document.getElementById(id);
        secondResult = numberCards[id];
        card2.innerHTML = secondResult;
        card2.disabled = true;
        //incrementar movimiento cada vez que mostramos dos cartas
        moves ++;
        showMoves.innerHTML = `Moves: ${moves}`

        if(firstResult == secondResult){
            //cambio de color fondo verde
            card1.style.backgroundColor='#A1D6B2'
            card2.style.backgroundColor='#A1D6B2'
            //poner en cero las tarjetas vistas para que me deje ver dos mas
            cardSeen = 0;
            //incrementamos los aciertos 
            score ++
            showScore.innerHTML = `Score: ${score}`
           

            if(score == 8){
                containerCards = document.getElementById('containerCards');
                // textWon = document.getElementById('textWon');
                containerCards.innerHTML= `<div class="containerWon animate__animated animate__flipInX">
                                                <img src="youWon.png" alt="">
                                            </div>
                                            <div class="containerBtnWon animate__animated animate__shakeX">
                                                <button class="btnWon" id="playAgain">Play again</button>
                                            </div>`
                playAgain.addEventListener('click', ()=>{
                    location.reload();
                })
            }

        } else{
            //dar vueltas las cartas despues de un segundo
            setTimeout(() => {
                card1.innerHTML = `?`;
                card2.innerHTML = `?`;
                card1.disabled = false;
                card2.disabled = false;
                cardSeen = 0;
            }, 500);
        }
    }
}
