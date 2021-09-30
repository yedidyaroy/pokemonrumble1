class Game{
    constructor(){}
    start(){
        if (gameState===0){
            background(bgImg1); 
            player=new Player();
            form=new Form();
            form.display();
        }
        pikachu=createSprite(200,550,10,10);
        pikachu.addAnimation("running",pikachuImg);
        pikachu.scale=0.7;
        
       // drawSprites();
    }

    play(){
        background(bgImg2); 
        drawSprites();
    }
}