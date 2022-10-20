
  var playerName = prompt("Please enter username");
  let point = 0;
  const guessingGame = (range) => {
    const rndGuess = Math.floor(Math.random() * range) + 1;
    console.log(rndGuess);
    var guess = prompt(`Predict a number between 1 and ${range}`);
    const playerGuess = Number(guess);

    if (rndGuess === playerGuess) {
      point = point + 1;

      alert(`You won!, ${playerName}, You've scored ${point} point`);
      guessingGame(range + 1);
    } else {
      point = 0;
      alert("You lose!");
    }
  };
  guessingGame(2);
