// Class exercise 1

function calculate (x, y, operation) {
    operation(x, y);
}

function add (x, y) {
    console.log(x + y);
}

function subtraction (x, y) {
    console.log(x - y);
}

function multiplication (x, y) {
    console.log(x * y);
}

function division (x, y) {
    console.log(x / y);
}

calculate(2, 2, add)
calculate(3, 2, subtraction)
calculate(3, 2, multiplication)
calculate(4, 2, division)