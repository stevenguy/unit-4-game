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

//Declaring Who Gets The Variables For Force
var chosenEnemy = []
var chosenPlayer = []
let isChosenPlayer = false;
let isChosenEmeny = false;
let character
let opponent 
let lightSaber = new Audio('assets/audio/light-saber-on.mp3');
let attackSound = new Audio('assets/audio/blaster-firing.mp3');

//The Jedi & Sith Universe Array Object
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

//"The Choosing The Chosen One & Dark Lord" Function
function startGame () {

    isChosenPlayer = false;
    isChosenEmeny = false;

    $('#fighters-area').append(luke.image, rey.image, obiwan.image, leia.image, yoda.image);
    $('#chose-hero').text('Choose Your Hero');

        $('#fighters-area').on('click', "img[id = luke]", function(){
            chooseChar(luke);
            console.log(chooseChar);
            $('#heros-area').append(rey.image, obiwan.image, leia.image, yoda.image);
            $('#chose-enemy').text('Choose Your Enemy');
            $('#chose-hero').hide();
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(luke);
                console.log(chooseOpp);
            }
        });
        $('#fighters-area').on('click', "img[id = rey]", function(){
            chooseChar(rey);
            console.log(chooseChar);
            $('#heros-area').append(luke.image, obiwan.image, leia.image, yoda.image);
            $('#chose-enemy').text('Choose Your Enemy');
            $('#chose-hero').hide();
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(rey);
                console.log(chooseOpp);
            }
        });
        $('#fighters-area').on('click', "img[id = obiwan]", function(){
            chooseChar(obiwan);
            console.log(chooseChar);
            $('#heros-area').append(rey.image, luke.image, leia.image, yoda.image);
            $('#chose-enemy').text('Choose Your Enemy');
            $('#chose-hero').hide();
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(obiwan);
                console.log(chooseOpp);
            }
        });
        $('#fighters-area').on('click', "img[id = leia]", function(){
            chooseChar(leia);
            console.log(chooseChar);
            $('#heros-area').append(rey.image, obiwan.image, luke.image, yoda.image);
            $('#chose-enemy').text('Choose Your Enemy');
            $('#chose-hero').hide();
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(leia);
                console.log(chooseOpp);
            }
        });
        $('#fighters-area').on('click', "img[id = yoda]", function(){
            chooseChar(yoda);
            console.log(chooseChar);
            $('#heros-area').append(rey.image, obiwan.image, luke.image, leia.image);
            $('#chose-enemy').text('Choose Your Enemy');
            $('#chose-hero').hide();
            $('#fighters-area').hide();
                if (chooseOpp === false) {
                chooseOpp(yoda);
                console.log(chooseOpp);
            }
        });
        // Choose Your Enemy
        $('#heros-area').on('click', "img[id = obiwan]", function(){
            chooseOpp(obiwan);
            $('img[id = obiwan]').hide();
            console.log(chooseOpp);
                if (chooseChar === false) {
                chooseOpp(obiwan);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = leia]", function(){
            chooseOpp(leia);
            $('img[id = leia]').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(leia);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = yoda]", function(){
            chooseOpp(yoda);
            $('img[id = yoda]').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(yoda);
                console.log(chooseOpp);
            }
        });

        $('#heros-area').on('click', "img[id = rey]", function(){
            chooseOpp(rey);
            $('img[id = rey]').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(rey);
                console.log(chooseOpp);
            }
        });
        $('#heros-area').on('click', "img[id = luke]", function(){
            chooseOpp(luke);
            $('img[id = luke]').hide();
            console.log(chooseOpp);
                if (chooseChar == false) {
                chooseOpp(luke);
                console.log(chooseOpp);
            }
        });
    
};

startGame()

//"The Chosen One Who Will Bring Balance To The Force" Function
function chooseChar(char){

        chosenPlayer = true; 
        character = char;
        console.log(character);
        $('#player-area').append(char.image);
        $('#player-name').append(char.name);
        $('#player-health').append(parseInt(char.health));
        console.log(parseInt(char.health));
        $('#player-attack').append(parseInt(char.attack));
        console.log(parseInt(char.attack));
        $('#player-attack-back').append(parseInt(char.AttackBack));
        console.log(parseInt(char.AttackBack));

}

//"The Dark Lord Who Will Try To Lure The Chosen One To The Dark Side" Function
function chooseOpp(opp)   {
    if (chosenEnemy == false)  {
        opponent = opp;
        chosenEnemy = true; 
        $('#defenders-line', '#emeny-name', '#emeny-health','#emeny-attack','#emeny-attack-back').empty(); 
        $('#results').text("YOU'VE BEEN ATTACKED! STRIKE BACK PADAWAN!")
        $('#defenders-line').append(opp.defendImage)
        $('#emeny-name').append(opp.name);
        $('#emeny-health').append(parseInt(opp.health));
        console.log(parseInt(opp.health));
        $('#emeny-attack').append(parseInt(opp.attack));
        console.log(parseInt(opp.attack));
        $('#emeny-attack-back').append(parseInt(opp.AttackBack));
        console.log(parseInt(opp.AttackBack));
        $('#player-health').empty();
        $('#player-health').append(parseInt(character.health = parseInt(character.health) - parseInt(opponent.AttackBack)));
        console.log(parseInt(character.health = parseInt(character.health) - parseInt(opponent.AttackBack)))
        attackSound.play();
    }
}

//"Take Ass Kick Names" Function

$('#attack-button').on("click", function(){
    lightSaber.play();
    if(opponent.health < 0 && character.health > 0) {
        $('#results').text('You have won the battle. Next Opponent')
        $('#defenders-line', '#emeny-name', '#emeny-health','#emeny-attack','#emeny-attack-back').empty(); 
        chooseOpp()
    } else if (opponent.health > 0 && character.health < 0) {
        $('#results').text('You have loss the battle. Next')
    } else {
    $('#emeny-health').empty()
    $('#emeny-health').append(parseInt(opponent.health = parseInt(opponent.health) - parseInt(character.attack)));
    }
});


//"Back To Jedi Training..Suck. You Do." Function
$('#play-again-button').on('click', function () {
    location.reload();
    $('#heros-area').hide();
})
