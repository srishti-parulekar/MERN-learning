var s1 = "Pune is awesome"
var s2 = 'Pune is awesome'

var s3 = `Pune is awesome` //this type of string is used for interpolation 
//references and local variables are created in stack
//strings are immutable
//whenever we change the string, it creates a new object for the string 
var s4 = s1 + " CAP"
var s4 = s4 + " CAP"
console.log(s4)