// FOREACH

// 1-masala

// const array = [1, 2, 3, 4];

// function ikkigaKopaytir (array) {
//     let newArray = [];
//     array.forEach(element => {
//         newArray.push(element * 2);
//     });
//     return newArray;
// }

// console.log(ikkigaKopaytir(array));



// 2-masala

// const words = ['apple', 'banana', 'cherry'];

// function toUpperCase(array) {
//     let newArray = [];
//     array.forEach(element => {
//         newArray.push(element.toUpperCase());
//     });
//     return newArray;
// }

// console.log(toUpperCase(words));



// 3-masala

// const numbers = [10, 20, 30, 40];

// function plusFive(array) {
//     let newArray = [];
//     array.forEach(element => {
//         newArray.push(element + 5);
//     });
//     return newArray;
// }

// console.log(plusFive(numbers));



// 4-masala
// O'TILMAGAN



// MAP

// 1-masala

// const numbers = [1, 2, 3, 4];

// function ikkigaKopaytir(array) {
//     let newArray = [];
//     array.map(value => {
//         newArray.push(value * 2);
//     });
//     return newArray;
// }
// console.log(ikkigaKopaytir(numbers));



// 2-masala

// const words = ['apple', 'banana', 'cherry']; 

// function toUpperCase(array) {
//     let newArray = [];
//     array.map(element => {
//         newArray.push(element.toUpperCase());
//     })
//     return newArray;
// }

// console.log(toUpperCase(words));



// 3-masala

// const numbers = [10, 20, 30, 40];

// function plusFive(array) {
//     let res = [];
//     array.map(element => {
//         res.push(element + 5);
//     })
//     return res;
// }

// console.log(plusFive(numbers));



// 4-masala
// O'TILMAGAN



// FILTER

// 1-masala

// const numbers = [1, 2, 3, 4, 5, 6];

// function createArrayWithEvenNums(array) {
//     let evenArray = [];
//     array.filter(element => {
//         if (element % 2 == 0) {
//             evenArray.push(element);
//         }
//     })
//     return evenArray;
// }

// console.log(createArrayWithEvenNums(numbers));



// 2-masala

// const words = ['apple', 'banana', 'cherry', 'date'];

// function filterStringWithLengthMaxFive(array) {
//     let res = [];
//     array.filter(element => {
//         if (element.length > 5) {
//             res.push(element);
//         }
//     })
//     return res;
// }

// console.log(filterStringWithLengthMaxFive(words));



// 3-masala

// const ages = [12, 17, 18, 19, 21];

// function moreThanEighteenYear(array) {
//     let res = [];
//     array.filter(element => {
//         if (element > 18) {
//             res.push(element);
//         }
//     })
//     return res;
// }

// console.log(moreThanEighteenYear(ages));



// 4-masala
// O'TILMAGAN



// FIND

// 1-masala

// const numbers = [4, 11, 10, 2, 18, 9, 19];

// function findFirstNumberMaxTen(array) {
//     let res = [];
//     array.find(element => {
//         if (element > 10) {
//             res.push(element);
//         }
//     })
//     return res[0];
// }

// console.log(findFirstNumberMaxTen(numbers));



// 2-masala
// O'TILMAGAN



// SOME / EVERY

// 1-masala

// const numbers = [-1, -2, 6, -4];

// function musbatSonniIzlash(numbers) {
//     return numbers.some(number => number > 0);
// }

// console.log(musbatSonniIzlash(numbers));

// 2-masala

// const words = ['cat', 'dog', 'elephant'];

// function stringSomeMethod(array) {
//     return array.some(word => word.length > 5)
// }

// console.log(stringSomeMethod(words));



// 3-masala

const numbers = [1, 2, -3, 4];

function musbatEvery(array) {
    return array.every(num => num > 0);
}

console.log(musbatEvery(numbers));