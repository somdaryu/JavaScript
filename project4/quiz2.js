// Q7
let arr = [10, 15, 20, 25, 30];

let newArr = arr.filter(
  function(value){
    if(value > 20){
      return value
    }
  }
).map(
  function(value){
    return value* 2;
  }
);

console.log(newArr)

//Q8
let str = "hello world welcome to programming";

let split = str.split(" ")
let newArr3 = [];

for(let word of split) {
  newArr3.push(word.charAt(0).toUpperCase() + word.slice(1));
}

let newStr = newArr3.join(" ");
console.log(newStr);

//Q9
let arr2 = ["apple", "banana", "grape", "kiwi", "watermelon"]
let newArr2 = arr2.filter((value) => value.length > 5).map(function(value){
  return value.toUpperCase();
})

console.log(newArr2);