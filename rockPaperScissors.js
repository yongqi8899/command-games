const playerMove = process.argv[2]
const moves = ['rock', 'paper', 'scissors']
let computerMove = moves[Math.floor(Math.random()*moves.length)]
function determineWinner(playerInput, computer){
    let player = playerInput.toLowerCase()
    let result
    if (!moves.includes(player)){
        result = `Please move 'rock', 'paper' or 'scissors'`
    } else if (player === computer){
        result = 'draw'
    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper'){
        result = 'you are winner'
    } else {
        result = `Better luck next time`
    }
    return console.log(result)
}
determineWinner(playerMove, computerMove)