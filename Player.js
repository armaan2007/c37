class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;



    }
    getCount(){
        var count=db.ref("playerCount");
          count.on("value",function(data){
            playerCount=data.val(); 
            
    });

    }
    updateCount(count){
        db.ref('/').update({
            playerCount:count
        })
      
        
    }
    update(){
        var playerIndex='players/player'+this.index;
        db.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        })
    
    }
    static getPlayerInfo(){
        var playerInfoRef=db.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val()
        })

    }
}
