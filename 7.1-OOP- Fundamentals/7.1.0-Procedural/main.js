let shapes = [
    {type : "circle", colour : "red", size : 3},
    {type : "rectangle", colour : "blue", size : [3, 4]}, 
    {type : "triangle", colour : "green", size : [2, 4]}];
for(i of shapes){
    let area;
    if(i.type == "circle"){
        area = (3.14*i.size*i.size);
    }
    else if(i.type == "rectangle"){
        area = (i.size[0] * i.size[1]);
    }
    else if(i.type == "triangle"){
        area = (i.size[0] * i.size[1] / 2);
    }
    console.log("The area of the triangle is " + area);
}