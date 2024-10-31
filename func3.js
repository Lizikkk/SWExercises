function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

const userA = { name: "a", attempts: 0};
const userB = { name: "b", attempts: 0};

function playingGame() {
    while (userA.result !== 3 && userB.result !== 3) {
       
        userA.result = rollDice();
        userB.result = rollDice();

        userA.attempts++;
        userB.attempts++;
    }

    if (userA.result === 3) {
        return "A won after " + userA.attempts + " attempts";
    }
    if (userB.result === 3) {
        return "B won after " + userB.attempts + " attempts";
    }
}

console.log(playingGame());