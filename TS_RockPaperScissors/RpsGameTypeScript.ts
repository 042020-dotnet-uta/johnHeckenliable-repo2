//console.log("Welcome to TypeScript");

function randomNum(): number {
    let value = Math.random() * 3;
    return Math.floor(value);
}

function assignChoiceWord(player: Player) {
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

function decideWinner(p1: Player, p2: Player): string {
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
interface Player {
    Name: string;
    Choice: number;
    ChoiceWord: string;
}

let p1: Player = {
    Name: "John Doe",
    Choice: 0,
    ChoiceWord: ""
};

let p2: Player = {
    Name: "Jane Doe",
    Choice: 0,
    ChoiceWord: ""
};

p1.Choice = randomNum();
assignChoiceWord(p1);
p2.Choice = randomNum();
assignChoiceWord(p2);

let winner = decideWinner(p1,p2);
console.log(winner);