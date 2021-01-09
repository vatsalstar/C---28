class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image1 = loadImage("Images/mango.png");
      this.image2 = loadImage("Images/mango.png");
      this.image3 = loadImage("Images/mango.png");
      this.image4 = loadImage("Images/mango.png");
      this.image5 = loadImage("Images/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
