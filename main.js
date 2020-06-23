//elements
let numbers = document.querySelectorAll('.button-number'), index, button;
let enter = document.querySelector('#enter');
let result = document.querySelector('#result');

let operationPlus = document.querySelector('#plus');
let operationMinus = document.querySelector('#minus');

// console.log(number);
// let getValue = function(number) {
//     this.number.value('#enter');
// }
// console.log(getValue(number)) ;


// for (i = 0; i < numbers.length; i++) {
//     number = numbers[i];
//     number.addEventListener('click', function() {
//         enter.value = number.value;
//     });
// }
// // 0 
// наверное потому что отображается сразу последняя иттерация цикла

// numbers.onclick = function(a) {
//     console.log(a.value);
// }

// number.onclick = function() {
//     console.log(number.value);
// }

// enter.addEventListener('change', function() {
//     console.log(enter.value);
// });

// let plus = function(a, b) {
//     result = a + b;

//     this.a + this.b;

//     console.log(result);
// };


// let operand =  function() {
//     operationPlus.addEventListener('click', function() {
//         // console.log(enter.value);
//         // console.log(typeof(firstValueNum));
//         // console.log(typeof(Number(firstValue)));
//         // console.log('Cумма:' + sum);
//         // console.log(firstValueNum);
    
//         let firstValue = enter.value;
//         let firstValueNum = Number(firstValue);
    
//         enter.value = null;
       
//         // let sum = 0;
//         // sum += firstValueNum;
//         return firstValueNum;
//     });
// } 


// console.log(result);
// sumResult = function() {
//     sum = 0;

//     result.addEventListener('click', function() {
        
//         sum += operand();
//         console.log("Summ:" + sum);
//     })
// }


// let memory = function() {
//     enter.addEventListener('change', function() {
//         console.log(enter.value);
//     })
// }
// console.log(enter.value); 
// memory();

// let sum = 0;



// result = function() {

//     let firstValue = function() {
//         enter.addEventListener('keyup', function() {
//             sum = enter.value;
//             console.log('Input value:' + enter.value);
//             console.log('Sum:' + sum)
//             return sum;
//         })
//     } 

//     firstValue()
//     console.log(firstValue);
// };

// let value = 0;

// let memory = function() {

// }



// addPlus = function() {
//     operationPlus.addEventListener('click', function() {
//         enter.value += '+';
//     })
// }

// addMinus = function() {
//     operationMinus.addEventListener('click', function() {
//         enter.value += '-';
//     })
// }

// addPlus();
// addMinus();
//   Не знаю как из строки внутри с плюсами и минусами сделать результат вычисления


// let sum = 0;
// enter.addEventListener('change', function() {
    

//     sum += enter.value;

// })

// console.log(sum);


// let sum = 0;
// let memory = function() {
//     enter.value.addEventListener('change', function() {
//         sum += enter.value;
//         console.log(sum);
//     })
// }


// memory();

// let inputValue = function() {
    
// }

// let value = function(sum) {
    

//     enter.addEventListener('change', (event) => {
//         sum += enter.value;
//         return sum;
//         console.log(sum);
//     });

    
// }

// value();
enter.addEventListener('change', (event) => {
    let sum = enter.value;

    result.textContent = event.target.value;
})

