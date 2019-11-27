class Car{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.width = 100;
        this.height = 40;
        this.maxSpeed = 5;
        this.rotation = 0;
        this.friction = 0.95;
    }
    draw(){
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.rotation * Math.PI / 180) % 360);
        context.fillStyle = "Black";
        context.fillRect(0, 0, this.width, this.height);
        context.restore();
    }
    update(){
        this.x += Math.cos((this.rotation * Math.PI / 180) % 360) * this.speed;
        this.y += Math.sin((this.rotation * Math.PI / 180) % 360) * this.speed;
        if(this.x > canvas.width){
            this.speed = 0;
            this.x = canvas.width;
        }
        if(this.x < 0){
            this.speed = 0;
            this.x = 1;
        }
        if(this.y > canvas.height){
            this.speed = 0;
            this.y = canvas.height;
        }
        if(this.y < 0){
            this.speed = 0;
            this.y = 1;
        }
        this.draw();
    }
    accelerate(){
        if(this.speed < this.maxSpeed){
            this.speed += 0.01
        }
        this.update();
    }
    reverse(){
        if(this.speed > -this.maxSpeed){
            this.speed -= 0.01;
        }
        this.update();
    }
    decelerate(){
        //this.speed *= this.friction;
    }
    turnRight(){
        this.rotation += 3;
    }
    turnLeft(){
        this.rotation -= 3;
    }
    displayStatus(){
        context.save();
        context.font = "12px Arial";
        context.fillText(`Position: (${this.x.toFixed(0)},${this.y.toFixed(0)})`, 10, 20);
        context.fillText(`Rotation: ${this.rotation.toFixed(2) % 360}`, 10, 40);
        context.fillText(`Speed: ${this.speed.toFixed(2)}`, 10, 60);
        context.restore();
    }
}