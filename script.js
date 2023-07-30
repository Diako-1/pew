var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var randomizerBtn=document.querySelector(".randomizer");

//body and Button color at the beginning
body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
// randomizerBtn.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";

//hex to rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

//h3 text at beginning
var color1rgb=hexToRgb(color1.value);
var color2rgb=hexToRgb(color2.value);


var txt="linear-gradient(to right, rgb("+color1rgb.r+", " +color1rgb.g+", " +color1rgb.b+"), rgb("+color2rgb.r+", " +color2rgb.g+", " +color2rgb.b+"))";

css.textContent= body.style.background;
//change color 

function setGradient(){
	
	

	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";

	css.textContent= body.style.background;
}

//randomize color
	var clr1;
  	var clr2;
  	var clr1rgb;
  	var clr2rgb;
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  var colorr = '#';
  
  for (var i = 0; i < 6; i++) {
   clr1= color += letters[Math.floor(Math.random() * 16)];
   
   
  }
  
  for (var i = 0; i < 6; i++) {
   clr2= colorr += letters[Math.floor(Math.random() * 16)];
   
  }
 
 	 clr1rgb=hexToRgb(clr1);
	 clr2rgb=hexToRgb(clr2);
}

	
function setRandomColor(){
	body.style.background="linear-gradient(to right, "+clr1+", "+clr2+")";
	

	css.textContent= body.style.background;

	color1.value=clr1;
	color2.value=clr2;

}

randomizerBtn.addEventListener("click", function(){
	getRandomColor();
	
	setRandomColor();
	
})

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


