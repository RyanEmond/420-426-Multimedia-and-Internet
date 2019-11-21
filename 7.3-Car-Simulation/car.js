class Car{
    

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 25;
        this.maxSpeed = 5;
        this.rotation = 0;
        this.friction = 0.95;
    }
    draw(){
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation * Math.PI / 180);
        context.fillStyle = "MediumPurple";
        context.fillRect(0, 0, this.width, this.height);
        context.restore();
    }
    update(){

        this.draw();
    }
    accelerate(){

    }
    decelerate(){

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