class Truck{
    x = 0;
    y = 0;
    width = 50;
    height = 100;
    speed = 0;
    maxSpeed = 5;
    rotation = 0;
    friction = 0.95;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation * Math.PI / 180);
        context.fillStyle = "MediumPurple";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.restore();
    };
    update(){

    }
    accelerate(){

    }
    decelerate(){

    }
    reverse(){

    }
    turnRight(){

    }
    turnLeft(){

    }
    displayStatus(){
        context.save();
        context.font = "12px Arial";
        context.fillText(`Position: (${this.position.x.toFixed(0)},
        ${this.position.y.toFixed(0)})`, 10, 20);
        context.fillText(`Rotation: ${this.rotation.toFixed(2)}`, 10, 40);
        context.fillText(`Speed: ${this.speed.toFixed(2)}`, 10, 60);
        context.restore();
    }
    
}