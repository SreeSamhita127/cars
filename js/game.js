class Game{
    constructor(){
        
    }

getState(){
 var getstateref = database.ref('gameState');
 getstateref.on("value",function(data){
     gameState = data.val();
 })
}   

updateState(state){
    database.ref('/').update({
        gameState: state
    })
}

Start(){
  if(gameState === 0){
      player = new Player();
      player.getCount();

      form = new Form();
      form.display();
  }
  car1 = createSprite(400,500,100,100);
  car1.addImage(carimg1);
  car2 = createSprite(700,500,100,100);
  car2.addImage(carimg2);
  car3 = createSprite(1000,500,100,100);
  car3.addImage(carimg3);
  car4 = createSprite(1300,500,100,100);
  car4.addImage(carimg4);
  cars = [car1,car2,car3,car4];
}

play(){
    form.hide();

    textSize(20);
    text("game has begun",150,50);

    Player.GetPlayedInfo();
    
    image(track1,0,-windowHeight*4,windowWidth,windowHeight*5);
    image(ground,0,windowHeight,windowWidth,600);

    if(allPlayers !== undefined){
        var x = 240;
        var y;
        var index = 0;
        for(var plr in allPlayers){
            index = index + 1;  
            x = x+300
            y = displayHeight - allPlayers[plr].distance
            cars[index-1].x = x;
            cars[index-1].y = y;
          
            //ball.x = x; 
            if(index === player.index){
                cars[index-1].shapeColor= "yellow"
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y; 
            }
            

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
            player.Update();
        }        
        if(keyIsDown(LEFT_ARROW)){
            cars[index-1].x -= 10
            player.Update();
        }
        if(keyIsDown(RIGHT_ARROW)){
            cars[index-1].x += 10
            player.Update();
        }
    }
    drawSprites();
    if(player.distance > 4500){
        gameState = 2;
    }
} // end of play

end(){
    console.log("game ended")
}

}// end of class