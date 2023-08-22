function add(a,b){
    return a + b;
}

function times(a,b){
    return a * b;
}

function sub(a,b){
    if (a <= b){
        console.log('a is < then b')
        return
    }
    return a - b;
}

function div(a,b){
    return a / b;
}

module.exports = {add, times, sub, div};

let result = add(10, 20)

console.log(result)

result = times(10, 20)

console.log(result)

result = sub(20, 10)

console.log(result)

result = div(20, 10)

console.log(result)