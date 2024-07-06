var dice1 = document.querySelector("body").onload = Math.floor(Math.random()*6);
var dice2 = document.querySelector("body").onload = Math.floor(Math.random()*6);

console.log(dice1+1);
console.log(dice2+1);

var ar = ["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"]
document.querySelector(".img1").setAttribute("src",ar[dice1]);
document.querySelector(".img2").setAttribute("src",ar[dice2]);

if(dice1 > dice2)
    {
        document.querySelector("h1").textContent = "Player 1 Wins !! ";
        console.log("Player 1 Wins !!");
    }
else if(dice1 < dice2)
    {
        document.querySelector("h1").textContent = "Player 2 Wins !! ";
        console.log("Player 2 Wins !!");
    }
else if(dice1 == dice2)
    {
        document.querySelector("h1").textContent = "Its a Tie";
        console.log("Game is a Tie");
    }