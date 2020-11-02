class Game {

    constructor(){
        this.x = 30;
        this.y = 20;
        this.circleX = 300; 
        this.circleY = 300; 
    }

    preloadGame() 
    {   console.log("preload this game"); 
        this.playerImage = loadImage("cat.jpg"); 
    }

    setupGame(){
         
         console.log("set up game"); 
         this.player = new Player(); 
         this.player.image = this.playerImage; 
    }

    drawGame() {
        clear(); 


        // this.x++;
        // this.y += 6;                            // oder framecount für Geschwindigkeit, bei Gameover zB Framecount = 0 to stop the game
        fill("pink")                            // füllt alles darunter bis neues Fill komm
        // rect(30,20,55,55)                       // erstellt ein Rectangle at LOcation 30,20 mit den Maßen 55,55
        rect(this.x, this.y, 55,55); 
        fill("lightblue");
        circle(this.circleX, this.circleY, 50);
        this.player.drawPlayer(); 
    }

}


