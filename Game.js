class Game{
    constructor(){
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.display();
        }
    }

    play(){
        player.hide();
        if(mousePressedOver(button2)){
           background("green");
           Image(bg_img, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
        }
    }
}