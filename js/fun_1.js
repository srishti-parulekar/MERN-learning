//three ways of using functions in js 

//normal function
function solid(){
    console.log("Inside solid function")
}

solid()

//function with a reference

var fr1 = function solid(){
    console.log("Inside solid function")
}

fr1() //calls the function to which the variable fr2 refers in memory. 

//function without a name is called anonymous function

var fr2 = function (){
    console.log("Inside solid function")
}

fr2()

// function is stored in memory in c: code SVGElement; java: method area; python: code segment or method area


var fr3 = function (){
    console.log("Inside fr3")
}

var fr4 = function (){
    console.log("Inside fr4")
    fr3()
}

fr4()

function witharguments(p1,p2,p3){ //p1 p2 p3 are parameters 
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

witharguments(100,200,300) //whatever is passed is called arguments 
