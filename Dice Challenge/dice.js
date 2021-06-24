window.onload = choosePic;

var myPix1 = new Array("dice2.png","dice3.png","dice4.png","dice5.png","dice6.png");
var myPix2 = new Array("dice2.png","dice3.png","dice4.png","dice5.png","dice6.png");

function choosePic() {
     var randomNum1 = Math.floor(Math.random() * myPix1.length);
     var randomNum2 = Math.floor(Math.random() * myPix2.length);
     document.getElementById("mypic1").src = myPix1[randomNum1];
     document.getElementById("mypic2").src = myPix2[randomNum2];
     if(randomNum1==randomNum2)
     document.getElementById("result").innerHTML="Draw!";
     else if(randomNum1>randomNum2)
     document.getElementById("result").innerHTML="Winner is Player 1!";
     else
     document.getElementById("result").innerHTML="Winner is Player 2!";
}