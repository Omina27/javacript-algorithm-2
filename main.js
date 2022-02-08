
//matchsticks houses
function Matches(step) {
    if (step === 0) {
        return 0    
    } else {
        return (step * 6) - (step -1)
    }
}
console.log(Matches(4));



//add up the number from the single number
const SingleNum = (num) => {
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
}
console.log(SingleNum(4));



//Left shift by 2 numbers
const Shift = (x, y) => {
    return x << y
}
console.log(Shift(10,2));



//find max an min number 
function MaxMin(num){
    return [Math.min(...num), Math.max(...num)];
}
console.log(MaxMin([13,5,45,8]));



//christmas eve
const christmas = (year, month, day) => {
    
    if ((month == 11) || (month == 12)) {
        return true
    } else {
        return false
    }
}
console.log(christmas(2022, 11, 29));



//which function is larger
const whichIsLarger =(f,g) => f() === g() ? 'neither' : f() > g() ? 'f' : 'g';
console.log(whichIsLarger(() => 34, () => 34));



//check if one array can be nested in another
const canNest = (arr1, arr2) =>  Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) 
console.log(canNest([4,3,5], [0,9]));


//find time
const findTime = (text) => {   
    let sentence = text
    let REGEXP = /^(?:[01][0-9]|2[0-3])[-:h][0-5][0-9]$/
    let result = sentence.match(REGEXP)

    if (result) {
        return true
    } else {
        return false
    }
}
console.log(findTime("Breakfast at 09:00 in the room 123:456"));



//count true
function countTrue(arr) {
    return arr.filter(x => x === true).length
}
console.log(countTrue([true, false, true]))



//make a circle 
const circle = radius => {
    let getArea = Math.PI * radius * radius
    let getPerimeter = 2 * Math.PI * radius

    return console.log(`Area of circle is ${getArea.toFixed(2)} and perimeter of circle is ${getPerimeter.toFixed(2)}`);
}
console.log(circle (10));



//Burglary Series (04): Add its Name
const addName = (obj, key, value) => {
    const secondObj = new Object()
    secondObj[key] = value
    const newObj = Object.assign(obj, secondObj)
    return console.log(newObj);
}
console.log(addName({"name":"Ali"}, "age", 12));

