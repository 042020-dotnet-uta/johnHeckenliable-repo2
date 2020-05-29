"use strict";
//console.log("Welcome to TypeScript");
function randomNum() {
    var value = Math.random() * 3;
    return Math.floor(value);
}
function assignChoiceWord(player) {
    if (player.Choice === 1) {
        player.ChoiceWord = "Rock";
    }
    else if (player.Choice === 2) {
        player.ChoiceWord = "Paper";
    }
    else if (player.Choice === 3) {
        player.ChoiceWord = "Scissors";
    }
}
function decideWinner(p1, p2) {
    if (p1.ChoiceWord === p2.ChoiceWord)
        return "Tie";
    else {
        switch (p1.ChoiceWord) {
            case "Rock":
                if (p2.ChoiceWord === "Scissors") {
                    return p1.Name;
                }
                break;
            case "Paper":
                if (p2.ChoiceWord === "Rock") {
                    return p1.Name;
                }
                break;
            case "Scissors":
                if (p2.ChoiceWord === "Paper") {
                    return p1.Name;
                }
                break;
            default:
                return "Something Wonky";
        }
        return p2.Name;
    }
}
var p1 = {
    Name: "John Doe",
    Choice: 0,
    ChoiceWord: ""
};
var p2 = {
    Name: "Jane Doe",
    Choice: 0,
    ChoiceWord: ""
};
p1.Choice = randomNum();
assignChoiceWord(p1);
p2.Choice = randomNum();
assignChoiceWord(p2);
var winner = decideWinner(p1, p2);
console.log(winner);
