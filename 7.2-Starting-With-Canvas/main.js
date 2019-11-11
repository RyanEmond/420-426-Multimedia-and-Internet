const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

context.fillRect(20,20,100,100);
context.clearRect(40,40,60,60);
context.strokeRect(45,45,50,50);