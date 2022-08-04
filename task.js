// const num = 321;

// let arrs;
// let arrsPow = "";
// arrs = num.toString().split("")

//     for (let arr of arrs) {
//       arrsPow += (arr * arr).toString();
//       console.log(arrsPow)
//       return arrsPow;
//     }

// function squareDigits(num){
//     let arrs;
//     let arrsPow = "";
//     arrs = num.toString().split("")

//         for (let arr of arrs) {
//           arrsPow += (arr * arr).toString();
//         }
//         return Number(arrsPow);
//   }

//   console.log(typeof(squareDigits(3212)))

//   function makeNegative(num) {
//     if (num > 0) {
//       return -num;
//     } else {
//       return num
//     }
//   }

// str = "aagfdgnhjyukiu"
// // function getCount(str) {
//     let cnt =  [];
//     let arrs = "";

//     arrs = str.split("");
//     console.log(arrs)
//     for (let arr of arrs) {
//         if (arr === "a" || arr === "e" || arr === "i" || arr === "o" || arr === "u") {
//         cnt.push(arr)
//         }

//         return cnt
//     }

// // //   }

// // //   console.log(getCount(asdfkjhgi));

// // function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// //     let message;
// //     // Change code below this line
// //     let totalPrice = (pricePerDroid * orderedQuantity);
// //   if (totalPrice > customerCredits) {
// //     message = "Insufficient funds!"
// //   } else {
// //     message = `You ordered ${orderedQuantity} droids, you   have ${customerCredits - totalPrice} credits left`
// //   }
// //     // Change code above this line
// //     return message;
// //   }

// //   console.log(makeTransaction(3000, 5, 23000))

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//     return discount;
//   } else if (totalSpent < 50000 && totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//     return discount;
//   } else if (totalSpent < 20000 && totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//     return discount;
//   } else {
//     discount = BASE_DISCOUNT;
//     return discount;
//   }
//   // Change code above this line
// }

// console.log(getDiscount(7000));


// function getShippingCost(country) {
//     let message;
//     let price;
//     // Change code below this line
//   switch (country) {
//   case "China":
//   price = 100
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
  
//   case Chile:
//   price = 250
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
  
//   case Australia:
//   price = 170
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
  
//   case Jamaica:
//   price = 120
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
  
//   defualt
//   message = "Sorry, there is no delivery to your country"
//     }
  
  
//     // Change code above this line
//     return message;
//   }
  

//   console.log(getShippingCost("China"))

// str = "xoffnkxoxoo";
// arrs = str.split("")
// countX = 0;
// countO = 0;
// for (let arr of arrs) {
//     console.log(arr)
//     if (arr === "x") {
//         countX += 1;
//     } else if (arr === "o") {
//         countO += 1;
//     }
// }
// // return countX !== countO

// let text = "How are you doing today?";
// console.log(text.split(" "));


// let name = "Artemenko kirill";
// let upNames = name.toUpperCase().split(" ");
// let firstLetter = "";
// let init = [];
// console.log(upNames);
// for (let upName of upNames) {
//     firstLetter = upName.slice(0, 1);

//     init.push(firstLetter)
// }
// init.join(".")
// const numbers = [2,3,1,5,4,1];

// return numbers.splice(numbers.findIndex(item => item === Math.min(...numbers)), 1);

// let s1 = "aretheyhere";
// let s2 = "yestheyarehere";
// let sArr = ([...s1.split(""), ...s2.split("")]).sort().filter((letter, index, array) => array.indexOf(letter) === index);
// let str = "";
// sArr.forEach((letter) => str += letter)

// console.log("A" > "a")

// let str = "This website is for losers LOL!";
// console.log(str.indexOf("i"))
// let vowels = ["a", "A", "e", "E", "u", "U", "i", "I", "o", "O"];
// let newStr = "";
// for (let vowel of vowels) {
//  while (str.indexOf(vowel) !== -1) {
//     str = str.replace(vowel, "")
//  }
    


  
// }

// // console.log(str)
// let firstArray = ["Earth", "Jupiter"]
// let secondArray = ["Neptune", "Uranus"]
// let maxLength = 4;
// let newArray = firstArray.concat(secondArray).slice(0, maxLength)
// console.log(newArray)
// newArray.slice(0, maxLength);
// console.log(newArray)

// let numbers = [3, 87, 45, 12, 7];
// let filteredNumbers = numbers.sort((a, b) => a - b ) 

// let str = "abcd";


// let doubleArray = [...str].map(letter => letter.repeat(2)).join("")
// console.log(doubleArray)


// let array = [5];
// array.sort((a, b) => a - b).filter((, index) => index !== 0 || index !== (array.length - 1))


// let str = "ZpglnRxqenU"
// let arr = str.toLowerCase().split("")
// console.log(arr)
// let newArr = arr.map((letter, index) =>
// (letter.toUpperCase() + letter.repeat(index)))
// console.log(newArr)
// newArr.join("-")
// console.log(newArr.join("-"))
// let s = "teste";
// if ((s.length) % 2 === 0) {
//     s[(s.length) / 2 - 1] + s[((s.length) / 2)]
//     }
// if ((s.length) % 2 !== 0) {
//     s[(s.length + 1) / 2 - 1]
// }
// console.log(s[(s.length + 1) / 2 - 1])

// for (i = 1; i < 10; i++) {
//     let str = "";
//     for (count = 0; count < i; count++)
//     str = str.concat("*")
//     console.log(str)
// }


// for (i = 1; i <= 10; i++) {
//     let str = "";
//     for (leftspace = (10 - i) / 2; leftspace >= 1; leftspace -= 1) {
//         str = str.concat(" ");
//     }
//     for (stars = 0; stars < i; stars++){
//         str = str.concat("*");
//     }
//     for (rightspace = (10 - i) / 2; rightspace >= 1; rightspace -=1) {
//         str = str.concat(" ");
//     }
//     console.log(str)
// }

// let str = "123 * 67";
// let firstIndex = str.indexOf(" ");
// let firstNum = +str.slice(0, firstIndex);
// console.log(firstNum)
// let operator = str[firstIndex + 1];
// console.log (operator);
// let secondIndex = str.indexOf(" ", firstIndex + 1)
// let secondNum = +str.slice(secondIndex + 1)
// console.log(secondNum);
// let expression

// switch (operator) {
// case "+" :
// expression = firstNum + secondNum
// break;
// case "-" :
// expression = firstNum - secondNum
// break;
// case "*" :
// expression = firstNum * secondNum
// break;
// case "/" :
// expression = firstNum / secondNum
// break;


// }
// console.log(expression)

// let beast = "great blue heron";
// let dish = "garlic naan";
// (beast[0] = dish[0]) && (beast[beast.length - 1] = dish[dish.length - 1]) ? true : false

// console.log((beast[0] === dish[0]) && (beast[beast.length - 1] === dish[dish.length - 1]))


// let object = { };
// console.log(object)

//     let propCount = 0;
//     console.log(propCount)
//     let keys = Object.keys(object);
//     for (let key of keys) {
//         console.log(key)
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//         console.log(propCount)
//       }
//     //   console.log(propCount)
//     }
//     console.log(propCount)

    // Change code above this line


    // const products = [
    //     { name: "Radar", price: 1300, quantity: 4 },
    //     { name: "Scanner", price: 2700, quantity: 3 },
    //     { name: "Droid", price: 400, quantity: 7 },
    //     { name: "Grip", price: 1200, quantity: 9 },
    //   ];
    //   let propName = "category";
      
    //   let AllPropValues = [];
    //   console.log(AllPropValues)
    //   for (let product of products) {
    //     console.log(product)
    //     AllPropValues.push(product[propName]);
    //     console.log(AllPropValues)
    //   }

// const bookInLibriry = ["Worn", 'Velorio by Xavier', "Dreaming by Xochitl", "Verifiers by Jane Pek", "Hello world"]
// const orderedBook = ["Spiderman", "50 shades"]

// function libraryCheck (title) {
//         return bookInLibriry.includes(title)
//     }
// function orderedCheck (title) {
//         return orderedBook.includes(title)
//     }

// function takeBook (nameBook) { 
//         libraryCheck(nameBook) ? (orderedBook
//         .push(...bookInLibriry
//         .splice(bookInLibriry
//         .indexOf(nameBook), 1)))
//         : message(b, nameBook)}
        

//     takeBook ("Spiderma") 

// const b = `Book ${nameBook} is missing in library`;
// const c = `Book is returned in library. Сome back soon`;
// const v = `That book is returned in library at last week.`;
  
// message = function (action, nameBook) {
//     const b = `Book ${nameBook} is missing in library`;
//     const c = `Book ${nameBook} is returned in library. Сome back soon`;
//     const v = `That book is returned in library at last week.`;
//         console.log(action)  }
    
// takeBook ("Spiderma") 

// let str = "Dermatoglyphics";
// let strNormalized = str.toLowerCase();
// console.log(strNormalized)
// let uniqLetter = "";
//   for (let letter of strNormalized) {
//     console.log(letter)
//     if (strNormalized.indexOf(letter) === strNormalized[letter]) {
//         uniqLetter + letter
//         console.log(uniqLetter)
//     }
//     console.log(uniqLetter)
//   }
//   console.log(uniqLetter)

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line

//     getPotions() {
//         let allPotions = [];
//       for (let potion of this.potions) {
//         allPotions.push(potion.name)
//       }
//       return allPotions
//     },
//     addPotion(newPotion) {
//         for (let potion of this.potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion "${newPotion.name}" is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
  
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
    
      // Change code above this line
    // };
    // Change code above this line

// const oldName = "Stone skin";
// const newName = "Invulnerability potion";
// //   console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
 
// let potionName = [];
// console.log(potionName)
//     for (let {name} of atTheOldToad.potions){
//         console.log(name)
//       potionName.push(name);
//       console.log(potionName)
    
//     //   if (name === oldName) {
//     //     atTheOldToad.potions.name = newName;
//     //     console.log(atTheOldToad.potions.name)
//     //   }
      
//   }
//   atTheOldToad.potions[potionName.indexOf(oldName)].name = newName
//   console.log(atTheOldToad.potions[potionName.indexOf(oldName)].name)
    
    // if (potionName.indexOf(oldName) === -1) {
    //   return `Potion ${oldName} is not in inventory!`;}

    // function comparisonObject(obj1, obj2) {
    //     let keys1 = Object.keys(obj1);
    //     let values1 = Object.values(obj1);
    //     let keys2 = Object.keys(obj2);
    //     let values2 = Object.values(obj2);
    //     for (i = 0; i < obj1.length; i += 1) {
    //         if (keys1[i] !== keys2[i]) {
    //         return false
    //         } else if (values1[i] !== values2[i]) {
    //         return false
    //         }
    //     }
    //     return true
      
    //   }
      
    //   let a = {
    //     s: 4,
    //     y: 7,
    //     o: 9,
    //   };
      
    //   let b = {
    //     s: 4,
    //     y: 79,
    //     o: 9,
    //   }
      
    //   console.log(comparisonObject(a, b))

    // function changeEven(numbers, value) {
    //     // Change code below this line
    //     let newNumbers = [];
    //     for (let i = 0; i < numbers.length; i += 1) {
    //       if (numbers[i] % 2 === 0) {
    //         newNumbers.push(numbers[i] + value);
    //       }
    //     }
    //     return newNumbers
    //     // Change code above this line
    //   }

    //   console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
      
    // function alphabetPosition(text) {
        

    //     let cleanChars = [];
        
    //     // for (let char of [...text.toLowerCase()]) {
    //     //     if ((char.charCodeAt() - 96) > 0) {
    //     //         cleanChars.push((char.charCodeAt() - 96))
    //     //     }
    //     // }
    //     // return cleanChars.join(" ")

    //     return [...text.toLowerCase()].map(a => a.charCodeAt() - 96).filter(a => a > 0).join(" ")
    //   }

    //   console.log(alphabetPosition(":bu}kgq+"))

    // function makeSheff (name) {
    //     const makeDish = function (dish) {
    //         console.log(`${name} готує ${dish}`)
    //     }
    //     return makeDish
    // }

    // const mango = makeSheff ("Zina");
    // const poly = makeSheff ("Polly");
      
    // mango("котлети")
    // poly("tea")

// function longestConsec(strarr, k) {
//     let maxLength = 0;
//     let longest = "";
//    for (let i = 0; i < strarr.length - k + 1; i +=1) {
//     let longestLength = "";
//     for(let x = i; x < i + k; x +=1) {
//         longestLength += strarr[x]
//     }
//     if (maxLength < longestLength.length) {
//         maxLength = longestLength.length;
//         longest = longestLength;

//     }
//    }  
//     return longest
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

// function towerBuilder(nFloors) {
//         // build here
//         let space;
//         let star;
//         pine = [];
//         for(let i = 1; i <= nFloors; i += 1){
// console.log(i)
//           space = " ".repeat(nFloors - i);
//           console.log(space)
//           star  = "*".repeat((2 * i) - 1);
//           console.log(star)
//           pine.push(space + star + space);
//           console.log(pine)
//         }
//         return pine
//       }

//   towerBuilder(9)

// let num = 45;
// arr = num.toString().split("")

// console.log(arr.reduce((multy, a) => multy*a))
// console.log(arr)

// let num = 999999999999;

// let str = num.toString().split("");
// console.log(str)
// let period = 0;
// while (str.length > 1) {
//   period += 1;
//   str = str.reduce((multy, number) => multy * number).toString().split("")
//   console.log(str)
// }
// console.log(period);
// let arr = ["I", "wish", "I", "hadn't", "come"];
// let arrlist = [];
// for (let i = 1; i < arr.length; i += 1) {
//   let list = [];
//     let firstPart = arr.slice(0, i).join(" ")
//     console.log(firstPart)
  
//     let secondPart = arr.slice(i).join(" ")
//     console.log(secondPart)
//   list.push(firstPart, secondPart)
//   arrlist.push(list)
//   console.log(arrlist)

// }

// class Car {
//     // Change code below this line
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     getBrand() {
//       return this.#brand
//     }
//     changeBrand(newBrand) {
//       this.#brand = newBrand
//     }
  
//     // Change code above this line
//   }

//  let str = "hello";
// let arr = [];
// for (let i = 0; i < str.length; i += 1) {
//   let word = [];
// word = [...str]
// word.splice(i, 1, str[i].toUpperCase())
//   arr.push(word.join(""))

// }

// let dna = "GCAT"

// let arr = [...dna];

//   arr.forEach((el, index, array) => {
//     if (el === "T") {

//     array[index] = "U" }});
// arr.join("")
             
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }

// let array = [5, 3, 2, 8, 1, 4];

// let a, b;
//  for (let i = 0; i < array.length; i += 1){
//    if (array[i] % 2 === 0) continue
//    for (let j = i; j < array.length; j += 1){
//      if (array[j] % 2 === 0) continue;
//      a = array[i]
//      b = array[j];
//      if (array[i] > array[j]) {
//        array[i] = b;
//        array[j] = a;
//      } 
//     }
// }

// array.sort((a, b) => a*a[index] - b*b[index])
// console.log(array)


// let word = "recede"

//     let arr = [...word.toLowerCase()];


//     let encode = arr.map((item, index, array) => array.filter(item1 => item1 === array[index]).length === 1 ? "(" : ")")
  
//     encode.join("")

// let x = 1;
// let n = 10;
// let z = [];
// console.log(z);
// for (let i = 1; i <= n; i += 1) {
//   z.push(x * i)
  
// }

// let str = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
// console.log(...str)

// let numbers = [1,2,3];
// let target = 4;
// let sum = [];
// for (let i = 0; i < numbers.length; i += 1){
//     for (let j = i + 1; j < numbers.length; j += 1){
//         console.log(i, j)
//         if (target - numbers[j] === numbers[j] && numbers.lastIndexOf(numbers[j]) !== j) continue
//         if (numbers[i] + numbers[j] === target) {

//            sum.push(i, j)
//            console.log(sum)
//         }
//     }
// }
// let string = 'IF-RUDYARDOKIPLING';
// console.log([...string])
// let arr = [...string].map(item => {
//     console.log(item)
    
//     if (item === "O") item = ' ';
//     if (item === 0) item = "O";
//     if (item == 5) item = "S";
//     if (item == 1) item = "I";
    
//     console.log(item)
//   return item
//   })

// console.log(arr.join(""))

// 'IF-RUDYARD KIPLING'
// pin = "123";
// let arrPin = pin.split("");
// console.log(arrPin.length)
// console.log(!isNaN(arrPin.reduce((multy, item) => multy * item) ))
// if (arrPin.length === 4 || arrPin.length === 6) {
//     console.log(isNaN(arrPin.reduce((multy, item) => multy * item) ))
//     }

// console.log((arrPin.length === 4 || arrPin.length === 6) && (!isNaN(arrPin.reduce((multy, item) => multy * item))))
let num = 5;
let sheep = "";
for(let i = 1; i <= num; i += 1) {
  sheep += `${i}...sheep` 
}
console.log(sheep)