class DetermineWinner {
  #moves = ["rock", "paper", "scissors"];
  #message;
  #playerMove;
  constructor(playerMove) {
    this.#playerMove = playerMove;
  }
  computerMove() {
    return this.#moves[Math.floor(Math.random() * this.#moves.length)];
  }
  compare() {
    const player = this.#playerMove; 
    const computer = this.computerMove(); 
    
    if (!this.#moves.includes(player)) {
      this.#message = `Please move 'rock', 'paper' or 'scissors'`;
    } else if (player === computer) {
      this.#message = "draw";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      this.#message = "you are winner";
    } else {
      this.#message = `Better luck next time`;
    }
    return this.#message;
  }
}
let playerMove = process.argv[2].toLowerCase();
const determineWinner = new DetermineWinner(playerMove);
console.log(determineWinner.compare());
