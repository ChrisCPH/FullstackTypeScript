function createMultiplier(y) {
    return x => x * y;
}

const timesTwo = createMultiplier(2)
const timesThree = createMultiplier(3)
const timesFour = createMultiplier(4)

console.log(timesThree(6))
console.log(timesFour(2))

// Callbacks

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const square = numbers.map(x => x**2)
//console.log(square)

// 1. Create function
// 2. Create a new array that will be returned
// 3. Loop through the array
// 4. For each element call the function

function map(array, mapFunc) {
    const mapArr = []

    for (let i = 0; i < array.length; i++) {
        const result = mapFunc(array[i], i)
        mapArr.push(result)
    }
    return mapArr
}

const square = map(numbers, (num) => num **2)
console.log(square)

const evenNumbers = numbers.filter( x => x % 2 === 0)
console.log(evenNumbers)

function myFilter(array, filterFunc) {    
    const filterArr = []
    for(let i = 0 ; i < array.length; i++) {        
        const result = filterFunc(array[i], i)         
        if(result)             
            filterArr.push(array[i])  
    }   
    return filterArr
}

const filterNumbers = myFilter(numbers, (num) => num % 2 === 0)
console.log(filterNumbers)


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

const myReduce = (array, reduceFunc, initValue) => {
    let sum = initValue;
    for (let i = 0; i < array.length; i++) {
        sum = reduceFunc(sum, array[i])
    }
    return sum
}

const sum = myReduce(numbers, (sum, num) => sum + num, 0)
const multiply = myReduce(numbers, (sum, num) => sum * num, 1)
console.log(sum)
console.log(multiply)