class Car{
    

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = 0;
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
        this.x += this.speed;
        this.draw();
    }
    accelerate(){
        if(this.speed < this.maxSpeed){
            this.speed += 0.01
        }
        this.update();
        console.log(this.speed.toFixed(2));
    }
    decelerate(){
        if(this.speed > -this.maxSpeed){
            this.speed -= 0.01;
        }
        
        this.update();
        console.log(this.speed.toFixed(2));
        
    }
    turnRight(){

    }
    turnLeft(){

    }
    displayStatus(){
        context.save();
        context.font = "12px Arial";
        context.fillText('Position: (${this.x}, ${this.y})', 10, 20);
        context.fillText('Rotation: ${this.rotation}', 10, 40);
        context.fillText('Speed: ${this.speed}', 10, 60);
        context.restore();
    }
}