class aBox{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.boundaries = {"top": this.y, "bottom": this.y + this.size, "left": this.x, "right": this.x + this.size};                                       
    }
    draw(){
        context.save();
        context.translate(this.x, this.y);
        context.fillStyle = this.colour;
        context.fillRect(0, 0, this.size, this.size);
        context.restore();
    }
    updateBounds(){
        this.boundaries = {"top": this.y, "bottom": this.y + this.size, "left": this.x, "right": this.x + this.size}; 
    }
}
class Character extends aBox{
    constructor(x, y, size){
        super(x, y, size)
        this.speed = 5;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.colour = "Black";
    }
    goLeft(){
        this.x -= this.speed;
        if(this.x < 0){
            this.x = canvas.width - this.size;
        }
    }
    goRight(){
        this.x += this.speed;
        if(this.x > canvas.width - this.size){
            this.x = 0;
        }
    }
    goUp(){
        this.y -= this.speed;
        if(this.y < 0){
            this.y = canvas.height - this.size;
        }
    }
    goDown(){
        this.y += this.speed;
        if(this.y + this.size > canvas.height){
            this.y = 0;
        }
    }
    displayStatus(){
        context.save();
        context.font = "12px Arial";
        context.fillText(`Position: (${this.x.toFixed(0)},${this.y.toFixed(0)})`, 10, 20);
        context.fillText(`Speed: ${this.speed.toFixed(2)}`, 10, 40);
        context.restore();
    }
}
class Collectable extends aBox{
    constructor(x, y, size){
        super(x,y,size)
        this.colours = ["Green", "Yellow", "Blue"];
        this.colour = this.colours[Math.floor(Math.random() * Math.floor(3))];
    }
}
class FallingObject{

}
class Rock extends FallingObject{

}
class PowerUp extends FallingObject{

}
class SizeChange extends PowerUp{

}
class OneColour extends PowerUp{

}
