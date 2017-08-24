var a,h;
a=window.prompt("Enter length of the side of the triangle: ");
h=window.prompt("Enter length of the height of the triangle: ");
var triangleArea=function(){
	return a*h/2;
}
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea());