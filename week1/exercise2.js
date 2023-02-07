// Class exercise 2

function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }

  function twoFuncArray (func1, func2, array) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        const result = func1(array[i]) + func2(array[i])
        newArray.push(result)
    }
    return newArray
  }

  function powerOfTwo(x) {
    return x**2
  }

  function divisionByTen(x) {
    return x / 5
  }

  const numArray = [1, 2, 5, 6, 3]
  
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));   // 12
  console.log(operateOnNumbers((x, y) => x - y, 3, 4)) //-1
  
  console.log(twoFuncArray(powerOfTwo, divisionByTen, numArray))