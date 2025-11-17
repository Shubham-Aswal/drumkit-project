let numbtn = document.querySelectorAll(".drum").length;

// Mouse Click Events
for (let i = 0; i < numbtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let key = this.textContent.trim().toLowerCase();
        PlaySound(key);
        btnanimation(key);
    });
}

// Keyboard Events
document.addEventListener("keypress", function (event) {
    PlaySound(event.key);
    btnanimation(event.key);
});


function PlaySound(key) {
    switch (key.toLowerCase()) {

        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;

        case "q":
            new Audio("./sounds/bluebird.mp3").play();
            break;

        default:
            console.log("Unknown key:", key);
    }
}


function btnanimation(CurrentKey) {
    let activebutton = document.querySelector("." + CurrentKey);

    if (!activebutton) return;

    activebutton.classList.add("press");

    setTimeout(() => {
        activebutton.classList.remove("press");
    }, 150);
}
