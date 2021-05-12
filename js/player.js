class Player{
    constructor(){
        this.distance = 0,
        this.index = null,
        this.name = null
    }

getCount(){
    var playerRef = database.ref('playerCount');
    playerRef.on("value",function(data){
        playerCount = data.val();
    });    
}

updateCount(count){  // 1 
    database.ref('/').update({
        playerCount: count
      
    })
}

Update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance
    })
}

static GetPlayedInfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value",function(data){
        allPlayers = data.val();
    })
}

}