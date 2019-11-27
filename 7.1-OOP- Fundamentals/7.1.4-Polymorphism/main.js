class Shape{
    constructor(colour){
        this.colour = colour;
    }
    displayColour(){
        console.log(this.colour);
    }
}
class Circle extends Shape{
    constructor(radius, colour){
        super(colour);
        this.radius = radius;
    }
    calculateArea(){
        return (3.14*this.radius*this.radius)
    }
}
class Rectangle extends Shape{
    constructor(height, width, colour){
        super(colour);
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return (this.height * this.width)
    }
}
class Triangle extends Shape{
    constructor(height, width, colour){
        super(colour);
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return (this.height * this.width / 2)
    }
}

const circle = new Circle(3, "red");
const rectangle = new Rectangle(3,4, "blue");
const triangle = new Triangle(2,4, "green");
let shapes = [circle, rectangle, triangle];
for(i of shapes){
    area = i.calculateArea();
    console.log("The area of the "+ i +" is " + area);
    i.displayColour();
}


