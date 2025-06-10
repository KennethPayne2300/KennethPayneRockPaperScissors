const player1 = document.getElementById("one")
const player2 = document.getElementById("two")


var one
var two
var three

document.addEventListener("keydown", function(event) {
    if(event.key === "1"){
        one = true;
    }else if(event.key === "2"){
        two = true;
    }else{
        three = true;
    }
    keypress()
});

document.addEventListener("keyup", function(event) {
    if(event.key === "1"){
        one = false;
    }else if(event.key === "2"){
        two = false;
    }else{
        three = false;
    }
    keypress()
});

function keypress() {
    if (one){
        player1.style.backgroundImage = new URL("assets/Rock.png")
    }else if (two){
        console.log("2 was pressed");
    }else if (three){
        console.log("3 was pressed");
    }
}