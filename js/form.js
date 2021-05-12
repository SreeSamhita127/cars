class Form{
    constructor(){
this.input = createInput('Enter Your Name');
this.button = createButton('Click To Play');
this.title = createElement('H1');
this.greeting = createElement('H3');
this.reset = createButton('Reset'); 
    }

  display(){
      
      this.input.position(innerWidth-1100,250);
      this.button.position(innerWidth-1250,250);
      this.title.position((innerWidth-500)/2,100);  
      this.reset.position(innerWidth-250,20)
      this.title.html("Racecar Racing");
// arrow function
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount
          this.greeting.html("Welcome " + player.name);
          this.greeting.position((innerWidth-500)/2,250);
          player.Update();
          player.updateCount(playerCount);
     })

     this.reset.mousePressed(()=>{
         game.updateState(0);
         player.updateCount(0);
         database.ref('players').set('');
         game.Start();
         this.greeting.hide();
         
     })
  }  
        

  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
  }
}
