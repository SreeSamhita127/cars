var database;
var form;
var player;
var game;
var playerCount;
var gameState = 0;
var allPlayers = [];
var car1, car2, car3, car4;
var cars;
var carimg1, carimg2, carimg3, carimg4;
var ground;
var track1, track2;

function preload(){
    carimg1 = loadImage("images/car1.png");
    carimg2 = loadImage("images/car2.png");
    carimg3 = loadImage("images/car3.png");
    carimg4 = loadImage("images/car4.png");
    ground  = loadImage("images/ground.png");
    track1  = loadImage("images/track.jpg");
    track2  = loadImage("images/track.png");
}

function setup(){
    createCanvas(innerWidth - 200,innerHeight - 30);
    database = firebase.database(database);

    game = new Game();
    game.getState();
    game.Start();
}

function draw(){
    background(track2);


    if(playerCount === 4){
        game.updateState(1);
        console.log(gameState);
    }
    if(gameState === 1){
        game.play();
    }
    if(gameState === 2){
        game.end();
    }

}

