function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);










// Task: find the lowest or smallest element of an array

function lowestElements(numbers){
    let lowest=numbers[0];
    for(let i=1; i<numbers.length; i++){
        const elements=numbers[i];
        if(elements<lowest){
            lowest=elements;
        };
    };
    return lowest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const smallest = lowestElement(ages);
console.log(smallest);
const smallest2 = lowestElement([-12, -6, -17]);
console.log('oldest2', smallest2);




function lowestElement(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < lowest) {
    lowest = element;
    };
    };
    return lowest;
    };
    
    const myArray = [10, 15, 9, 7, 12, 18, 75, 35, 88];
    const lowestNumber=lowestElement(myArray);
    console.log(lowestNumber);