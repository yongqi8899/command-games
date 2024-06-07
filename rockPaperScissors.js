class DetermineWinner {
  #moves = ["rock", "paper", "scissors"];
  #message;
  constructor(message) {
    this.#message = message;
  }
  computerMove() {
    return this.#moves[Math.floor(Math.random() * this.#moves.length)];
  }
  playerMove() {
    return process.argv[2].toLowerCase();
  }
  compare() {
    const player = this.playerMove(); // Call playerMove() inside compare()
    const computer = this.computerMove(); // Call computerMove() inside compare()

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
const determineWinner = new DetermineWinner();
console.log(determineWinner.compare());
