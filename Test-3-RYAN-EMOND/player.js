class Player{
    constructor(){
        this.x = getRand(canvas.height);
        this.y = getRand(canvas.width);
        this.size = 50;
        this.boundaries = {"top": this.y, "bottom": this.y + this.size, "left": this.x, "right": this.x + this.size};
        this.speed = (Math.random() * ((5 - (-5)) -5)); //https://dzone.com/articles/random-number-generation-in-java
        this.direction = getRand(360);
        this.colour = getColour(); 
    }

    draw(){     //code taken from exercise 7.3
        context.save();
        context.translate(this.x, this.y);
        context.fillStyle = "#" + this.colour;
        context.fillRect(0, 0, this.size, this.size);
        this.boundaries = {"top": this.y, "bottom": this.y + this.size, "left": this.x, "right": this.x + this.size};
        context.restore();
    }
    update(){
        this.x += Math.cos((this.direction * Math.PI / 180) % 360) * this.speed;
        this.y += Math.sin((this.direction * Math.PI / 180) % 360) * this.speed;
        this.draw();
    }
    newStats(){
        console.log("test");
        this.speed = (Math.random() * ((5 - (-5)) -5));
        this.direction = getRand(360);
    }
}
function getRand(max){
    return (Math.floor(Math.random() * Math.floor(max)));   //taken from my game
}
function getColour(){
    let c = getRand(999999);
    return (c);
}