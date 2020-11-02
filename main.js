console.log("This is working"); 

let game = new Game(); 


function preload() 
{
    game.preloadGame();
}

function setup() 
{
    createCanvas(500,500);            // erstellt ein Canvas aus p5, drawing from the top down, Maße 500x500
    game.setupGame();
}

function draw()                 // reloads die ganze Zeit 
{
    game.drawGame();
    if (keyIsDown(LEFT_ARROW)) {            // Key gedrückt
      game.x -= 5;
      game.player.x -=10; 
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      game.x += 5;
      game.player.x +=10; 
    }
    if (keyIsDown(UP_ARROW)) {
        game.y -= 5;
        game.player.y-=10; 
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        game.y += 5;
        game.player.y+=10; 
      }
}


// The p5 always checks for these 3 functions and executes them direcly without being called


function keyPressed() {
    if (keyCode === 40) {
        console.log("this is the down key");        // Key muss einzeln gedrückt werden
        game.y+=10; 
      }
    
      if (keyCode === 38) {
        console.log("this is the up key");
        game.y-=10; 
      }

      if (keyCode === 37) {
        console.log("this is the left key");
        game.x-=10; 
      }
      if (keyCode === 39) {
        console.log("this is the right key");
        game.x+=10; 
      }

    }

    function mouseClicked() {               // mouseDragged ist auch gut!
        console.log("this is the mouse", mouseX, mouseY );
        game.circleX = mouseX; 
        game.circleY = mouseY;
      }
      