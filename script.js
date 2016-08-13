var computerWins = 0;
var userWins = 0;

var playerChoice = function(){
	var userChoice = prompt("rock (r), paper (p), or scissors (s)?");

	while (userChoice !== r || p || s){
		userChoice = prompt("rock (r), paper (p), or scissors (s)?");
	}
	return userChoice;
}

var compChoice = function(){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "r";
	} else if(computerChoice <= 0.67) {
		computerChoice = "p";
	} else {
		computerChoice = "s";
	}
	return computerChoice;
}

var compare = function(user, computer){
	while (user === computer){
		playerChoice();
		compChoice();
	}
	if (user === "r"){
		if (computerChoice === "p"){
			console.log("Computer Wins!")
			computerWins++;
		} else{
			console.log("User Wins!")
			userWins++;
		}
	}
	if (user === "p"){
		if (computerChoice === "s"){
			console.log("Computer Wins!")
			computerWins++;
		} else{
			console.log("User Wins!")
			userWins++;
		}
	}
	if (user === "s"){
		if (computerChoice === "r"){
			console.log("Computer Wins!")
			computerWins++;
		} else{
			console.log("User Wins!")
			userWins++;
		}
	}
}

while (userWins <10 && computerWins <10){
	compare(userChoice,computerChoice);
	console.log("User has" + " " + userWins + " " + "wins.")
	console.log("Computer has" + " " + computerWins + " " + "wins.")
}

if (userWins > computerWins){
	console.log("User has won the game!")
} else{
	console.log("Computer has won the game!")
}