////////////Q1//////////////

///////////For/////////////
const inputArray1 = [1, 2, 3];
function powerFor(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        arrPower = Math.pow(2, array[i])
        result.push(arrPower);
    }
    return result;
}
console.log("input array:",inputArray1);
const outputFor = powerFor(inputArray1);
console.log("output using for:",outputFor);

//////////////forEach//////////
function powerForEach(array) {
    const result = [];
    array.forEach(element => {
        arrPower = Math.pow(2, element)
        result.push(arrPower); 
    });
    return result;
}
const outputForEach = powerForEach(inputArray1);
console.log("output using forEach:",outputForEach); 

///////////////map/////////////
function powerMap(array) {
    return array.map(element => Math.pow(2, element)); }

const outputMap = powerMap(inputArray1);
console.log("output using Map:",outputMap); 

////////////////////Q2//////////////
function EvenOdd(array) {
    return array.map(element => {
        if (element % 2 === 0) {
            return 'even';        }else if (element % 2 !== 0 && typeof element == 'number'){
            return 'odd';

        }else {
        return 'N/A';}    });
}

const inputArray2 = [1, 2, 3, "ala'"];
const outputArray2 = EvenOdd(inputArray2);
console.log("input array:",inputArray2);
console.log(outputArray2);

////////////////////Q3///////////////
function Names(array) {
    const names = [];
    array.forEach(name => {
        names.push(name);    });
    return names;
}

const inputArray3 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
const outputArray3 = Names(inputArray3);
console.log("Array Names:",outputArray3); 

////////////////////Q4//////////////
function fizzbuzz(array) {
    return array.map(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";} 
            else if (number % 3 === 0) {
            return "Fizz";} 
            else if (number % 5 === 0) {
            return "Buzz";} 
            else {return number;}
    });
}
const inputArray4 = [3, 5, 15, 2, 6, 10, 18, 30];
const outputArray4 = fizzbuzz(inputArray4);
console.log(outputArray4); 