class Circle{
    constructor(radius, colour){
        this.radius = radius;
        this.colour = colour;
    }
}
class Rectangle{
    constructor(height, width, colour){
        this.height = height;
        this.width = width;
        this.colour = colour;
    }
}
class Triangle{
    constructor(height, width, colour){
        this.height = height;
        this.width = width;
        this.colour = colour;
    }
}

const circle = new Circle(3, "red");
const rectangle = new Rectangle(3,4, "blue");
const triangle = new Triangle(2,4, "green");
let shapes = [circle, rectangle, triangle];
for(i of shapes){
    let area;
    if(i instanceof Circle){
        area = (3.14*i.radius*i.radius);
    }
    else if(i instanceof Rectangle){
        area = (i.height * i.width);
    }
    else if(i instanceof Triangle){
        area = (i.height * i.width / 2);
    }
    console.log("The area of the "+ i +" is " + area);
}

