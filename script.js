let numbtn = document.querySelectorAll(".drum").length;
for (let i = 0; i < numbtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {});
}
document.addEventListener("keypress", function (event) {
    PlaySound(event.key);

});

function PlaySound(key) {
  switch (key.toLowerCase()) {

    case "w": {
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    }

    case "a": {
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    }

    case "s": {
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    }

    case "d": {
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    }

    case "j": {
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    }

    case "k": {
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    }

    case "l": {
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    }
    case "q" :{
        let devspc = new Audio("./sounds/bluebird.mp3")
        devspc.play();
        break;
    }
    default : console.log(key);
  }
}

function btnanimation(CurrentKey){
    let activebutton  = document.querySelector("."+CurrentKey)

    activebutton.classList.add("press");



}

