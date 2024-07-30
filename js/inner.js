function outer(){
    console.log("I am in the outer function")
    function inner(){
        console.log("I am in the inner function")
    }
}

outer()
//only calling the outer function will never invoke the inner function. 

//to invoke the inner function there are multiple ways 
//first way: 
function outer1(){
    console.log("I am in the outer1 function")
    function inner1(){
        console.log("I am in the inner1 function")
    }
    return inner1
}

var ir = outer1()
ir()

//in this method: the outer function and the inner function both are somewhere in the memory. 
//if the address of the inner function is 202 and the outer is 890
//the outer function is executed and the return inner is encountered after which execution accesses 
//202 and ir is created which contains the reference (ir contains the address) of the inner1 function

//ir() then executes the function it contains the reference of 


//second method: 
function outer2(){
    console.log("I am in the outer2 function")
    function inner2(){
        console.log("I am in the inner2 function")
    }
    return inner2() //here we invoke the inner2 function directly inside the function. 
}
//no variable needs to store the reference here. 
outer2()

//third method: 
function outer3(){
    console.log("I am in the outer3 function")
    function inner3(){
        console.log("I am in the inner3 function")
    }
    return inner3
}
//outer3()()

//function should be invoked on creation only; do not want to call it in code 
(function haste(){
    console.log("god give me patience please");
})()
//this is called immediately invoked function expression IIFE. 

const add = (function () {
    let counter = 0;
    return function() { 
        counter += 1; 
        return counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());