//empty arrays: 

var a1 = []
console.log(a1)

var a2 = Array()
console.log(a2)

//arrays in java script are not homogeneous. 
var a3 = [11,22,3.9,"Bananas",true]
console.log(a3)

console.log(a3.length)

//first element
console.log(a3[0])
//undefined
console.log(a3[-1])

//arrays can be used as a stack used the methods push() and pop()
var stack = ["banana", "chocochip", "cuppycake"]
stack.push("dalchawal");
console.log(stack)
var element = stack.pop()
console.log(element)
//can be used as a queue using the method shift()

//arrays can be used as deques. 

