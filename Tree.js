class Tree
{ constructor(x,y,width,height)
    { var options=
        { 
            isStatic:true 
        }
         this.body = Bodies.rectangle(x,y,width,height,options);
          this.width=width;
           this.height=height; 
           World.add(world,this.body) 
           this.image = loadImage("images/tree.png") 
        } 
        display()
        { 
            var pos = this.body.position; 
            imageMode(CENTER)
             fill("blue") 
             image(this.image,pos.x, pos.y, this.width, this.height); 
            } 
            }
