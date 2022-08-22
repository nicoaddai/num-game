let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    let target = Math.ceil(Math.random()*10) ; 
    return target; 
}

function compareGuesses(human, computer){
    const currentGame = generateTarget(); 
    const absHuman = Math.abs(currentGame - human); 
    const absComputer = Math.abs(currentGame-computer);
    
    if(human > 10){
        return 'Error, number out of range.'
    }
    if(absHuman<=absComputer){
        return true
    }else{
        return false; 
    }
     
}
function updateScore(winner) {
    if(winner === 'human'){
        humanScore+=1; 
    }else{
        computerScore+=1; 
    }
}



function advanceRound() {
     currentRoundNumber +=1; 
}



