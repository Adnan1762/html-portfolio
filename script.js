
randomNumber1=Math.floor(Math.random()*6)+1;
var image1="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

randomNumber2=Math.floor(Math.random()*6)+1;
var image2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
var c1=0,c2=0;
var heading=document.querySelector("body h1");

if(randomNumber1>randomNumber2){
    heading.textContent="Player1 Wins 👑";
}

else if(randomNumber1<randomNumber2){
    heading.textContent="Player2 Wins 👑";
}

else{
    var x=heading.textContent="Game Draw 👻";
}
