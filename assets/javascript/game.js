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
var chosenEnemy2 = []
var chosenEnemy3 = []
var chosenPlayer = []
let isChosenPlayer = false;
let isChosenEmeny = false;
let character
let opponent 
let opponent2 
let opponent3 
let lightSaber = new Audio('assets/audio/light-saber-on.mp3');
let attackSound = new Audio('assets/audio/blaster-firing.mp3');
let R2D2 = new Audio('assets/audio/R2D2.mp3');
let imperialMarch = new Audio('assets/audio/imperial_march.mp3');
let force = new Audio('assets/audio/force.mp3');

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
];

//"The Choosing The Chosen One & Dark Lord" Function
function startGame () {

    isChosenPlayer = false;
    isChosenEmeny = false;
    $('#attack-button').hide()
    $('#attack-button2').hide()
    $('#attack-button3').hide()


    $('#fighters-area').append(luke.image, rey.image, leia.image, yoda.image);
    $('#chose-hero').text('Choose Your Hero');
    

    $('#fighters-area').on('click', "img[id = luke]", function(){
        chooseChar(luke);
        console.log(chooseChar);
        $('#heros-area').append(rey.image, leia.image, yoda.image);
        $('#chose-enemy').text('Choose Your First Challenge');
        $('#attack-button').show()
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
        $('#heros-area').append(luke.image, leia.image, yoda.image);
        $('#chose-enemy').text('Choose Your First Challenge');
        $('#attack-button').show()
        $('#chose-hero').hide();
        $('#fighters-area').hide();
            if (chooseOpp === false) {
            chooseOpp(rey);
            console.log(chooseOpp);
        }
    });
    $('#fighters-area').on('click', "img[id = leia]", function(){
        chooseChar(leia);
        console.log(chooseChar);
        $('#heros-area').append(rey.image, luke.image, yoda.image);
        $('#chose-enemy').text('Choose Your First Challenge');
        $('#attack-button').show()
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
        $('#heros-area').append(rey.image, luke.image, leia.image);
        $('#chose-enemy').text('Choose Your First Challenge');
        $('#attack-button').show()
        $('#chose-hero').hide();
        $('#fighters-area').hide();
            if (chooseOpp === false) {
            chooseOpp(yoda);
            console.log(chooseOpp);
        }
    });
    // Choose Your Enemy
    $('#heros-area').on('click', "img[id = leia]", function(){
        // if (opp2.defendImage === 'assets/images/leia.jpg' || char.image === 'assets/images/leia.jpg') {
        //     $('#heros-area2').append(rey.image, luke.image);
        // } else {
        //     $('#heros-area2').append(rey.image, yoda.image);
        // }
        $('#heros-area').hide();
        $('#chose-enemy').hide();
        $('#chose-enemy2').text('Choose Your Next Challenge');
        chooseOpp(leia);
        console.log(chooseOpp);
            if (chooseChar == false) {
            chooseOpp(leia);
            console.log(chooseOpp);
        }
    });
    $('#heros-area').on('click', "img[id = yoda]", function(){
        $('#heros-area2').append(rey.image, leia.image);
        $('#heros-area').hide();
        $('#chose-enemy').hide();
        $('#chose-enemy2').text('Choose Your Next Challenge');
        chooseOpp(yoda);
        console.log(chooseOpp);
            if (chooseChar == false) {
            chooseOpp(yoda);
            console.log(chooseOpp);
        }
    });

    $('#heros-area').on('click', "img[id = rey]", function(){
        $('#heros-area2').append(yoda.image, leia.image);
        $('#heros-area').hide();
        $('#chose-enemy').hide();
        $('#chose-enemy2').text('Choose Your Next Challenge');
        chooseOpp(rey);
        console.log(chooseOpp);
            if (chooseChar == false) {
            chooseOpp(rey);
            console.log(chooseOpp);
        }
    });
    $('#heros-area').on('click', "img[id = luke]", function(){
        $('#heros-area2').append(yoda.image, leia.image);
        $('#heros-area').hide();
        $('#chose-enemy').hide();
        $('#chose-enemy2').text('Choose Your Next Challenge');
        chooseOpp(luke);
        console.log(chooseOpp);
            if (chooseChar == false) {
            chooseOpp(luke);
            console.log(chooseOpp);
        }
    });


        // Choose Your Enemy 2
        $('#heros-area2').on('click', "img[id = leia]", function(){
            $('#heros-area3').append(rey.image, luke.image);
            $('#heros-area2').hide();
            $('#chose-enemy2').hide();
            $('#chose-enemy3').text('Choose Your Final Challenge');
            $('#attack-button').hide()
            $('#attack-button2').show()
            chooseOpp2(leia);
            console.log(chooseOpp2);
                if (chooseChar == false) {
                chooseOpp2(leia);
                console.log(chooseOpp2);
            }
        });
        $('#heros-area2').on('click', "img[id = yoda]", function(){
            $('#heros-area3').append(rey.image, leia.image);
            $('#heros-area2').hide();
            $('#chose-enemy2').hide();
            $('#chose-enemy3').text('Choose Your Final Challenge');
            $('#attack-button').hide()
            $('#attack-button2').show()
            chooseOpp2(yoda);
            console.log(chooseOpp2);
                if (chooseChar == false) {
                chooseOpp2(yoda);
                console.log(chooseOpp2);
            }
        });
    
        $('#heros-area2').on('click', "img[id = rey]", function(){
            $('#heros-area3').append(yoda.image, leia.image);
            $('#heros-area2').hide();
            $('#chose-enemy2').hide();
            $('#chose-enemy3').text('Choose Your Final Challenge');
            $('#attack-button').hide()
            $('#attack-button2').show()
            chooseOpp2(rey);
            console.log(chooseOpp2);
                if (chooseChar == false) {
                chooseOpp2(rey);
                console.log(chooseOpp2);
            }
        });
        $('#heros-area2').on('click', "img[id = luke]", function(){
            $('#heros-area3').append(yoda.image, leia.image);
            $('#heros-area2').hide();
            $('#chose-enemy2').hide();
            $('#chose-enemy3').text('Choose Your Final Challenge');
            $('#attack-button').hide()
            $('#attack-button2').show()
            chooseOpp2(luke);
            console.log(chooseOpp2);
                if (chooseChar == false) {
                chooseOpp2(luke);
                console.log(chooseOpp2);
            }
        });


        // Choose Your Enemy 3
        $('#heros-area3').on('click', "img[id = leia]", function(){
            $('#heros-area3').hide();
            $('#chose-enemy3').hide();
            $('#attack-button2').hide()
            $('#attack-button3').show()
            chooseOpp3(leia);
            console.log(chooseOpp3);
                if (chooseChar == false) {
                chooseOpp3(leia);
                console.log(chooseOpp3);
            }
        });
        $('#heros-area3').on('click', "img[id = yoda]", function(){
            $('#heros-area3').hide();
            $('#chose-enemy3').hide();
            $('#attack-button2').hide()
            $('#attack-button3').show()
            chooseOpp3(yoda);
            console.log(chooseOpp3);
                if (chooseChar == false) {
                chooseOpp3(yoda);
                console.log(chooseOpp3);
            }
        });
    
        $('#heros-area3').on('click', "img[id = rey]", function(){
            $('#heros-area3').hide();
            $('#chose-enemy3').hide();
            $('#attack-button2').hide()
            $('#attack-button3').show()
            chooseOpp3(rey);
            console.log(chooseOpp3);
                if (chooseChar == false) {
                chooseOpp3(rey);
                console.log(chooseOpp3);
            }
        });
        $('#heros-area3').on('click', "img[id = luke]", function(){
            $('#heros-area3').hide();
            $('#chose-enemy3').hide();
            $('#attack-button2').hide()
            $('#attack-button3').show()
            chooseOpp3(luke);
            console.log(chooseOpp3);
                if (chooseChar == false) {
                chooseOpp3(luke);
                console.log(chooseOpp3);
            }
        });
};

startGame()

//"The Chosen One Who Will Bring Balance To The Force" Function
function chooseChar(char){
    R2D2.play()
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

function chooseOpp2(opp2)   {
    if (chosenEnemy2 == false)  {
        opponent2 = opp2;
        chosenEnemy2 = true; 
        $('#results').text("YOU'VE BEEN ATTACKED! STRIKE BACK PADAWAN!")
        $('#defenders-line').hide()
        $('#emeny-name').empty();
        $('#emeny-health').empty();
        $('#emeny-attack').empty();
        $('#emeny-attack-back').empty();
        $('#defenders-line2').append(opp2.defendImage)
        $('#emeny-name').append(opp2.name);
        $('#emeny-health').append(parseInt(opp2.health));
        console.log(parseInt(opp2.health));
        $('#emeny-attack').append(parseInt(opp2.attack));
        console.log(parseInt(opp2.attack));
        $('#emeny-attack-back').append(parseInt(opp2.AttackBack));
        console.log(parseInt(opp2.AttackBack));
        $('#player-health').empty();
        $('#player-health').append(parseInt(character.health = parseInt(character.health) - parseInt(opponent2.AttackBack)));
        console.log(parseInt(character.health = parseInt(character.health) - parseInt(opponent2.AttackBack)))
        attackSound.play();
    }
}

function chooseOpp3(opp3)   {
    if (chosenEnemy3 == false)  {
        opponent3 = opp3;
        chosenEnemy3 = true; 
        $('#results').text("YOU'VE BEEN ATTACKED! STRIKE BACK PADAWAN!")
        $('#defenders-line2').hide()
        $('#emeny-name').empty();
        $('#emeny-health').empty();
        $('#emeny-attack').empty();
        $('#emeny-attack-back').empty();
        $('#defenders-line3').append(opp3.defendImage)
        $('#emeny-name').append(opp3.name);
        $('#emeny-health').append(parseInt(opp3.health));
        console.log(parseInt(opp3.health));
        $('#emeny-attack').append(parseInt(opp3.attack));
        console.log(parseInt(opp3.attack));
        $('#emeny-attack-back').append(parseInt(opp3.AttackBack));
        console.log(parseInt(opp3.AttackBack));
        $('#player-health').empty();
        $('#player-health').append(parseInt(character.health = parseInt(character.health) - parseInt(opponent3.AttackBack)));
        console.log(parseInt(character.health = parseInt(character.health) - parseInt(opponent3.AttackBack)))
        attackSound.play();
    }
}

//"Take Ass Kick Names" Function (I know it's an Avengers: Infinity War reference but who cares since we're like Peter Pan role playing here)
$('#attack-button').on("click", function(){
    lightSaber.play();
    if(opponent.health <= 0 && character.health >= 0) {
        $('#results').text('You have WON the battle. Next Opponent')
        force.play();
        chooseOpp()
    } else if (opponent.health >= 0 && character.health <= 0) {
        $('#results').text('You have LOSS the battle. Next')
        imperialMarch.play();
    } else {
    $('#emeny-health').empty()
    $('#emeny-health').append(parseInt(opponent.health = parseInt(opponent.health) - parseInt(character.attack)));
    }
});

$('#attack-button2').on("click", function(){
    lightSaber.play();
    if(opponent2.health <= 0 && character.health >= 0) {
        $('#results').text('You have WON the battle. Next Opponent')
        force.play();
        chooseOpp()
    } else if (opponent2.health >= 0 && character.health <= 0) {
        $('#results').text('You have LOSS the battle. Next')
        imperialMarch.play();
    } else {
    $('#emeny-health').empty()
    $('#emeny-health').append(parseInt(opponent2.health = parseInt(opponent2.health) - parseInt(character.attack)));
    }
});

$('#attack-button3').on("click", function(){
    lightSaber.play();
    if(opponent3.health <= 0 && character.health >= 0) {
        $('#results').text('You have WON the battle. Next Opponent')
        force.play();
        chooseOpp()
    } else if (opponent3.health >= 0 && character.health <= 0) {
        $('#results').text('You have LOSS the battle. Next')
        imperialMarch.play();
    } else {
    $('#emeny-health').empty()
    $('#emeny-health').append(parseInt(opponent3.health = parseInt(opponent3.health) - parseInt(character.attack)));
    }
});

//"Back To Jedi Training..Suck. You Do." Function
$('#play-again-button').on('click', function () {
    location.reload();
})
