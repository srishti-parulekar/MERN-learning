const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombined = [...numbersOne,...numbersTwo];
console.log(numbersCombined)

const [one,two, ...rest] = numbersCombined;
console.log(one)
console.log(two)
console.log(rest)
//the remaining elements of the array are stored in rest as a new array. 

const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
  };
  
  const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
  };
  
  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
  console.log(myUpdatedVehicle);
  
//destructing: 
const vehicles = ['mustang','f-150','expedition'];
const[car,truck,suv] = vehicles
console.log(car);

//returning multiple values when returning an array: 
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add);
  console.log(divide);