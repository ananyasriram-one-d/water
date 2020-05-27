class Player{
    constructor(){
    this.button = createButton('Girl');
    this.button.loadImage("assets/girl.png");
    
    this.button1 =createButton('Boy');
    this.button1.loadImage("assets/boy.png")

    this.button2 = createButton('Play')
    
    this.title = createElement('h2');
    this.title.html("Water")
    }

    hide(){
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
        this.title.hide();
    }
    
display(){
   
       this.button.position(displayWidth/2 - 30, 500);

       this.button1.position(displayWidth/2 + 30, 500);
      

       this.button2.position(displayWidth/2, 800);
      
       this.title.position(displayWidth/4, 50);
   
    this.button2.mousePressed(function(){
      gameState = 1;
      Player.hide();
   })
}
}
