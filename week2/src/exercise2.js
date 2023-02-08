// Class exercise 2

function calculate (x, y, operation) {
    return new Promise(function(resolve, reject) {
        result = operation(x, y);
        if(isFinite(result)) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}

function add (x, y) {
    return(x + y);
}

function subtraction (x, y) {
    return(x - y);
}

function multiplication (x, y) {
    return(x * y);
}

function division (x, y) {
    return(x / y);
}

calculate(4, 2, add).then(function(result) {
    console.log("success:" + result);
  }, function(reason){
    console.log("error: " + reason);
})

calculate(4, 2, subtraction).then(function(result) {
    console.log("success:" + result);
  }, function(reason){
    console.log("error: " + reason);
})

calculate(4, 2, multiplication).then(function(result) {
    console.log("success:" + result);
  }, function(reason){
    console.log("error: " + reason);
})

calculate(4, 2, division).then(function(result) {
    console.log("success:" + result);
  }, function(reason){
    console.log("error: " + reason);
})