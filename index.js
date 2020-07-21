
// 1 Add an event listener to each button and call a function: 

	// 2 Create var audio :

	

for (var n=0 ; n<document.querySelectorAll(".drum").length; n++){

	document.querySelectorAll("button")[n].addEventListener("click", function (){
	
		var buttonInnerhtml= this.innerHTML;

		buttonAnimation(buttonInnerhtml)

	// 3 Recorrer el inner html del boton con switch:
	switch (buttonInnerhtml) {

		case "w":
			var tom1= new Audio('sounds/tom-1.mp3')
			tom1.play()

			break;
		case "a":
			var tom2= new Audio('sounds/tom-2.mp3')
			tom2.play()
		case "s":
			var tom3= new Audio('sounds/tom-3.mp3')
			tom3.play()

			break;
		case "d":
			var tom4= new Audio('sounds/tom-4.mp3')
			tom4.play()

			break;
		case "j":
			var crash1= new Audio('sounds/crash.mp3')
			crash1.play()

			break;
		case "k":
			var kickbass= new Audio('sounds/kick-bass.mp3')
			kickbass.play()

		case "l":
			var snare1= new Audio('sounds/snare.mp3')
			snare1.play()

			break;

					

		default: console.log(buttonInnerhtml) 
	}

} )
}

// KEY PRESS AND CALL THE SOUND: 

document.addEventListener("keydown", function(makesound) {
	var key=makesound.key;
	

	buttonAnimation(key)

	switch (key) {

		case "w":
			var tom1= new Audio('sounds/tom-1.mp3')
			tom1.play()

			break;
		case "a":
			var tom2= new Audio('sounds/tom-2.mp3')
			tom2.play()
		case "s":
			var tom3= new Audio('sounds/tom-3.mp3')
			tom3.play()

			break;
		case "d":
			var tom4= new Audio('sounds/tom-4.mp3')
			tom4.play()

			break;
		case "j":
			var crash1= new Audio('sounds/crash.mp3')
			crash1.play()

			break;
		case "k":
			var kickbass= new Audio('sounds/kick-bass.mp3')
			kickbass.play()

		case "l":
			var snare1= new Audio('sounds/snare.mp3')
			snare1.play()

			break;

					

		default: pass
	}
})

function buttonAnimation(currentkey){
	var actualButton= document.querySelector("."+currentkey)
	actualButton.classList.add("pressed")

	setTimeout(function(){
		actualButton.classList.remove("pressed")
	}, 100)

}  
	

