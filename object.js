// function isEmpty(a) {
//     for (let key in a) {
//     return false;
//     }
//    return true;
// }


// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// let food = {};

// // let get;
// // for (get in user)
// // alert (get);

// alert ( isEmpty(food));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum=0;
//   for (let key in salaries) {
//       sum += salaries[key];
//   }
//   alert (sum)

let calculator = {

read () {
    calculator.x = +prompt ("Введите первое число", " ");
    calculator.y = +prompt ("Введите второе число", " ")
},

sum () { let total
    for (let key in calculator) {
     total += calculator[key];
    } ;
},

mul () {
    return calculator.x * calculator.y;
}
}

// function sum (obj) {
//     let total
//     for (let key in obj) {
//         total +=key;
//     }
//     return total
// }

// function mul (obj) {
//     let multic
//     for (let key in obj) {
//         multic *=key;
//     }
//     return multic
// }
  
  calculator.read();
  alert( calculator.sum() );
//   alert( calculator.mul() );
