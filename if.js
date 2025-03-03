// Question-1
function findLarger(num1, num2, callback){
    return callback(num1, num2)
}
var res = findLarger(12, 20, (num1, num2) => {
    if(num1 > num2){
        return num1 + 5
    }
    return num2 + 5
})
console.log(res)

// Question-2
function calculate(num1, num2, callback){
    return callback(num1,num2)
}
var result = calculate(10,5, (num1, num2) => {
    if(num1 > num2){
        return (num1 + num2) * 3
    }
    if(num2 > num1){
        return (num1 - num2) * 3
    }
    return 0
})
console.log(result)

// Question-3
function checkEvenOdd(num, callback){
    var result = callback(num)
    if(result == "Even"){
        return "Even Number"
    }
    return "Odd Number"
}
var res = checkEvenOdd(8, (num) =>{
    if(num % 2 == 0){
        return "Even"
    }
    return "Odd"
})
console.log(res)

// Question-4
function checkSign(num, callback){
    return callback(num) + " " +"value"
}
var res = checkSign(-10, (num) => {
    if(num > 0){
        return "Positive"
    }
    if(num < 0){
        return "Negative"
    }
    return "Zero"
})
console.log(res)

// Question-5
function multiplyConditionally(num1, num2, callback){
    return callback(num1,num2)
}
var result = multiplyConditionally(4, 6, (num1, num2) => {
    if(num1 > num2){
        return (num1 * num2)*4
    }
    if(num2 > num1){
        return (num1 + num2)*4
    }
    return num1*4
})
console.log(result)

















