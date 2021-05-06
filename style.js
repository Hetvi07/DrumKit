// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }
// function handleClick(){
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML); 
//     makeAnimation(buttonInnerHTML);       
// }

// document.addEventListener("keydown", handleKeyPress);

// function handleKeyPress(event){
//     makeSound(event.key);
//     makeAnimation(event.key);
// }

// window.addEventListener("click", function(handleClick)) {

//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML); 
//     makeAnimation(buttonInnerHTML);       
//     }
window.addEventListener("keydown", function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.childNodes[1].classList.add('playing');
        setTimeout(function() {
            key.childNodes[1].classList.remove('playing');
        }, 90);
        
    })


// function makeSound(key){
//     switch(key){
//         case "A":
//             var clap = new Audio("sounds/clap.wav");
//             clap.play();
//             break;
//         case "S":
//             var hihat = new Audio("sounds/hihat.wav");
//             hihat.play();
//             break;
//         case "D":
//             var kick = new Audio("sounds/kick.wav");
//             kick.play();
//             break;

//         case "F":
//             var openhat = new Audio("sounds/openhat.wav");
//             openhat.play();
//             break;
        
//         case "G":
//             var boom = new Audio("sounds/boom.wav");
//             boom.play();
//             break;

//         case "H":
//             var ride = new Audio("sounds/ride.wav");
//             ride.play();
//             break;

//         case "J":
//             var snare = new Audio("sounds/snare.wav");
//             snare.play();
//             break;
        
//         case "K":
//             var tom = new Audio("sounds/sounds_tom-2.mp3");
//             tom.play();
//             break;
        
//         case "L":
//             var tink = new Audio("sounds/tink.wav");
//             tink.play();
//             break;
        
//         default: console.log(buttonInnerHTML);
//     }
// }
   
// function makeAnimation(key){
//     var keyToAnimate = document.querySelector("." + key);
//     keyToAnimate.classList.add("pressed");
//     setTimeout(function(){
//         keyToAnimate.classList.remove("pressed");
//     }, 100);
    
// }