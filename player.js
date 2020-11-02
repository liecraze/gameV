class Player {
    constructor() {
      this.x = 100;
      this.y = 100;
      this.image;
    }
  
    drawPlayer() {
      fill("lightgrey");
      // rect(this.x, this.y, 100, 100);        // aber anstelle von Rectangle wollen wir unser Bild haben
        image(this.image,this.x, this.y, 100,100); 

        
    }
  }
  