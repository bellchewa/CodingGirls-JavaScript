/* 
Write a program, which chooses either rock, 
paper or scissors randomly each time it is run. 
If you want an extra challenge with that, 
you can use the prompt() function to get an input 
from the user and compare his input to what the 
program chose and display who is the winner.
*/

let userChoice = prompt('Please choose one from rock, paper or scissors, and type into the box below');

userChoice = userChoice.toLowerCase();

let choiceStack = ['paper', 'rock', 'scissors'];

let randomNum = Math.floor(Math.random() * 3);

let computerChoice = choiceStack[randomNum];

console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);

if (userChoice === computerChoice){
	console.log("Tie!");
}
else if (userChoice === 'paper' && computerChoice === 'rock') {
	console.log("You win!");
}
else if (userChoice === 'rock' && computerChoice === 'scissors') {
	console.log("You win!");
}
else if (userChoice === 'scissors' && computerChoice === 'rock') {
	console.log("You lose!");
}
else if (userChoice === 'rock' && computerChoice === 'paper') {
	console.log("You lose!");
}
else if (userChoice === 'paper' && computerChoice === 'scissors') {
	console.log("You lose!");
}
else if (userChoice === 'scissors' || computerChoice === 'paper') {
	console.log("You win!");
}
else {
	console.log("Invalid input, please try again");
}


/*
Write a program, which uses the prompt() function 
to get an input from the user. We want this input 
to represent the age of the user, so if he provides 
an input with incorrect format, the code should ask 
him until he provides a valid option (a number which 
is more than zero and less than 130).
*/

let userAge = prompt('Please write you age in the box below');
/*
do{

	console.log("Invalid input, please try again");
	//userAge = prompt('Please write you age in the box below');
	
} while ( userAge < 0 && userAge > 130 );
console.log('Valid age'); 

/*
switch (userAge){
	case 1:
	case 129:
		console.log('Correct age'); break;
	default: 
		console.log('Invalid age'); 
		userAge = prompt('Please write you age in the box below');

}*/

if (userAge > 0 && userAge < 130){
	console.log('Valid age');
} else {
	console.log('Invalid age');	
	userAge = prompt('Please write you age in the box below');
}

/*
Write a program, which calculates the area 
of a circle (check google for the formula). 
You'll need only the radius as a variable, 
your choice whether you take the radius as 
an input from the user or hardcode it.
*/

let r = prompt('Please write a number for the radius of a circle in the box below');
if (r > 0) {
	let area = Math.PI*r*r;
	console.log(`The area of the circle is ${area}`);
}
else {
	let r = prompt('Please write a number for the radius of a circle in the box below');
}