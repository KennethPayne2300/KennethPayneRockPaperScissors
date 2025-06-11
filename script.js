const player1 = document.getElementById("one")
const player2 = document.getElementById("two")

// console.log(player1, player2)
var one
var two
var three

document.addEventListener("keydown", function(event) {
    if(event.key === "1"){
        one = true;
    }else if(event.key === "2"){
        two = true;
    }else if(event.key === "3"){
        three = true;
    }
    keypress()
});

document.addEventListener("keyup", function(event) {
    if(event.key === "1"){
        one = false;
    }else if(event.key === "2"){
        two = false;
    }else if (event.key === "3"){
        three = false;
    }
    keypress()
});

function keypress() {
    if (one){
        player1.src = 'assets/Rock.png'
    }else if (two){
        player1.src = 'assets/Paper.png'
    }else if (three){
        player1.src = 'assets/Scissors.png'
    }
    aipress()
}

function aipress() {
    
}