class Form{
constructor(){
    this.title=createElement('h2');
    this.input=createInput('name');
    this.button=createButton('play');
     this.greeting=createElement('h2');
}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
display(){
    
   this. title.html('car race');
   this.title.position(130,0);
   this.input.position(130,160);
    

   this.button.position(250,200)

   this.button.mousePressed(function(){
    
   // this.input.hide();
    //this.button.hide();
    player.name=this.input.value();
        playerCount++;
        player.index=playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html('sup noob '+player.name);
 this.greeting.position(130,160);

    


})
}
}