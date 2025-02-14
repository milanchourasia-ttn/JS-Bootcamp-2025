// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
const arr = [1, 2, 3, 4, 5];
//method 1
arr.forEach((item, index) => {
    setTimeout(() => {
        console.log(item);
    }, index * 3000);
});
// //method 2
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, i * 3000);
// }