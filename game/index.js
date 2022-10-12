var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomimg1 = "dice"+randomNumber1+".png";

var randomimgsrc = "images/"+randomimg1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimgsrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomimg2 = "dice"+randomNumber2+".png";
var randomimgsrc2 = "images/"+randomimg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsrc2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Tanmay Win's";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "You Win";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
