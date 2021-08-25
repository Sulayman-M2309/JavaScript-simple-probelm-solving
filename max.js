const x=140;
const y=100;
const z=200;


// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else {
//         return second;
//     }
// }

// const largest = findLargest(154, 241);
// console.log('largest is', largest);


// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three
function findLargest(first, second, thread){
    if(first> second && first>thread){
        return first;
    }
    else if(second>first && second>thread){
        return second;
    }
    else{
        return thread;
    }
}
const largest= findLargest(56,78,90);
console.log("This is the leargest number", largest);
// if(x>y){
//     console.log("this number is biggest x");
// }
// else{
//     console.log("this number is biggest y");
// }





// if(x>y && x>z){
//     console.log("This is biggest number x");
// }
// else if(y>z && y>x){
//     console.log("This is biggest number y");
// }
// else{
//     console.log("This is number biggest z");
// }



var max = Math.max(business, minister, army);
// console.log('largest is', max);