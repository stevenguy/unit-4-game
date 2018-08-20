// Star Wars Pseudocode
// 1. User chooses fighter to play with.
// 2. Chosen fighter moves to back of the line up
// 3. User chooses emeny to fight
// 4. Left over fighters move to back of defender area
// 5. Chosen emeny moves to the defender area
// 6. Chosen fighter attacks and counter attacks
//     Counter attack takes away 1 HP
//     Attack takes away 2 HP    
// 7. Emeny attacks
//     Attack takes away 2 HP
// 8. User wins when emeny's HP is zero.
// 9. User loses when users's HP is zero.
// 10. We take away from the score when User defeats emenies

let emenyHealth = 150;
let playerHealth = 150;

var chosenEnemy = []
var chosenPlayer = []
let isChosenPlayer = false;
let isChosenEmeny = false;
var opponent;
var defeated = false; 

let characters = [
    rey = {
        name: 'rey',
        health: 120,
        attack: 10,
        image: "<img src = 'assets/images/rey.jpg' id = 'rey'>",
        defendImage: "<img src = 'assets/images/rey.jpg'>",
        AttackBack: 10
    }, 
    luke = {
        name: 'luke',
        health: 150,
        attack: 14,
        image: "<img src = 'assets/images/luke.jpg' id = 'luke'>",
        defendImage: "<img src = 'assets/images/luke.jpg'>",
        AttackBack: 13
    }, 
    leia = {
        name: 'leia',
        health: 100,
        attack: 5,
        image: "<img src = 'assets/images/leia.jpg' id = 'leia'>",
        defendImage: "<img src = 'assets/images/leia.jpg'>",
        AttackBack: 5
    }, 
    yoda = {
        name: 'yoda',
        health: 180,
        attack: 25,
        image: "<img src = 'assets/images/yoda.jpg' id = 'yoda'>",
        defendImage: "<img src = 'assets/images/yoda.jpg'>",
        AttackBack: 20
    },
    obiwan = {
        name: 'obiwan',
        health: 165,
        attack: 20,
        image: "<img src = 'assets/images/obiwan.jpg' id = 'obiwan'>",
        defendImage: "<img src = 'assets/images/obiwan.jpg'>",
        AttackBack: 18
    }
];


function startGame () {

    // firstNumber = "";
    // secondNumber = "";
    // operator = "";   
    isChosenPlayer = false;
    isChosenEmeny = false;

    $('#fighters-area').append(luke.image, rey.image);
    $('#heros-area').append(obiwan.image, leia.image, yoda.image);

        $('#fighters-area').on('click', "img[id = luke]", function(){
            chooseChar(luke);
            console.log(chooseChar);
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(luke);
                console.log(chooseOpp);
            }
        });
        $('#fighters-area').on('click', "img[id = rey]", function(){
            chooseChar(rey);
            console.log(chooseChar);
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(rey);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = obiwan]", function(){
            chooseOpp(obiwan);
            $('#heros-area').hide();
            console.log(chooseOpp);
                if (chooseChar === false) {
                chooseOpp(obiwan);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = leia]", function(){
            chooseOpp(leia);
            $('#heros-area').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(leia);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = yoda]", function(){
            chooseOpp(yoda);
            $('#heros-area').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(yoda);
                console.log(chooseOpp);
            }
        });
    
};

startGame()


//Choose character function
function chooseChar(char){

        chosenPlayer = true; 
        character = char;
        console.log(character);
        $('#player-area').append(char.image);
        $('#player-name').append(char.name);
        $('#player-health').append(char.health);
        $('#player-attack').append(char.attack);
        $('#player-attack-back').append(char.AttackBack);
		for (let i = 0; i < characters.length; i++){
			let enemy = "enemy"+i;  
			if(characters[i].name != char.name){
				$('#enemies').append("<div id ="+enemy+">"+characters[i].image+"</div>");
            }
        }

}


//Chooses your enemy
function chooseOpp(char)   {
    if (chosenEnemy == false)  {
        opponent = char; 
        enemyChosen = true; 
        // $('#defenders-line', '#emeny-name', '#emeny-health','#emeny-attack','#emeny-attack-back').empty(); 
        $('#defenders-line').append(char.defendImage)
        $('#emeny-name').append(char.name);
        $('#emeny-health').append(char.health);
        $('#emeny-attack').append(char.attack);
        $('#emeny-attack-back').append(char.AttackBack);
    }
}

// Use click to lower HP for emeny and player 
$("attack-button").on("click", function() {
    emenyHealth--;
    $("#emeny").text(emenyHealth);
    console.log(emenyHealth)
});

// restart game function
$('#play-again-button').on('click', function () {
    $("#defenders-line, #player-area, #player-name, #player-health, #player-attack, #player-attack-back, #emeny-area, #emeny-name, #emeny-health, #emeny-attack, #emeny-attack-back").empty();
    $('#heros-area').show();
    $('#fighters-area').show();
})
