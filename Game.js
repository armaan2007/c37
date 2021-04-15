class Game{
constructor(){

}
getState(){
    var gameStateRef=db.ref("gameState");
     gameStateRef.on("value",function(data){
            gameState=data.val(); 
    });
}
update(state){
    db.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState===0){
        player=new Player();
        var playerCountRef=await db.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val()
            player.getCount();

        }
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var display_position=130;
        for(var plr in allPlayers){
            if(plr==="player"+player.index){
                fill("red")
            }
            else{
                fill("black")
            }
            display_position+=20;
        textSize(20);
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)

        }
        

    }
}

}