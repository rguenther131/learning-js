// say hello
var a = 10;
document.write("<p>The value of variable a is " + a + "</p>");

function noArg() {
	// let's try to change global a variable
	a = 666;
	document.write("<p>Inside the function a is now " + a + "</p>");
}
noArg();
document.write("<p>After the function, a equals " + a + "</p>");



