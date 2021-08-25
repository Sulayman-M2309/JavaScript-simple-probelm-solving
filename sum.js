// const numbers=[22,34,55,66,777,86,78,53,34,11,123,888]
// var sum=0;
// for(var i=0; i<numbers.length; i++){
//     const elements=numbers[i];
   
//     sum=sum+elements;
// }
// // console.log(sum);



function arryTotal(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        const elements=numbers[i];
        sum=sum+elements;
    }
    return sum;
}
const total=arryTotal([2,4,7,8,9,80,40]);
console.log("This is Given below sum is", total);




