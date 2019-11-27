class Circle{
    constructor(radius, colour){
        this.radius = radius;
        this.colour = colour;
    }
    calculateCircleArea(){
        return (3.14*this.radius*this.radius)
    }
}
class Rectangle{
    constructor(height, width, colour){
        this.height = height;
        this.width = width;
        this.colour = colour;
    }
    calculateRectangleArea(){
        return (this.height * this.width)
    }
}
class Triangle{
    constructor(height, width, colour){
        this.height = height;
        this.width = width;
        this.colour = colour;
    }
    calculateTriangleArea(){
        return (this.height * this.width / 2)
    }
}

const circle = new Circle(3, "red");
const rectangle = new Rectangle(3,4, "blue");
const triangle = new Triangle(2,4, "green");
let shapes = [circle, rectangle, triangle];
for(i of shapes){
    let area;
    if(i instanceof Circle){
        area = i.calculateCircleArea();
    }
    else if(i instanceof Rectangle){
        area = i.calculateRectangleArea();
    }
    else if(i instanceof Triangle){
        area = i.calculateTriangleArea();
    }
    console.log("The area of the "+ i +" is " + area);
}



