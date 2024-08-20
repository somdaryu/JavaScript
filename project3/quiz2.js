// Q4-1

let x= 15;
if(x>10 && x<20) {
  console.log(x)
}

// Q4-2
let str = "안녕하세요.."
if(str.length > 5) {
  console.log(str);
}

// Q4-3
const person = {
  age : 15,
  gender: "M",
  name: "둘리",
  address: "서울"
}

if(person.age < 20 && person.gender == "M"){
  console.log("남학생입니다");
}

// Q4-4
const arr = [5, 12, 8, 130, 44];

if(arr.includes(10)){
  console.log("배열에 10이 있습니다");
}else{
  console.log("배열에 10이 없습니다");
}

// Q5-1
let i=1;
while(i<=10){
  i++
  if(i%2 == 0){
    console.log(i)
  }
}

// Q5-2
for(let j=10; j>=1; j--){
  if(j%2 == 1){
    console.log(j)
  }
}

//Q5-3
let sum = 0;
for(let i=1; i<=10; i++){
  sum = sum + i;
}
console.log(sum);

//Q5-4
let sum2 = 0;
for(let i=1; i<=20; i++){
  if(i%3 == 0 || i%5 == 0){
    sum2 = sum2 + i
  }
}

console.log(sum2);

//Q6
const arr2 = [1, 'aa', true, 5, 10];

let sum3 = 0;

for(let i=0; i<arr2.length; i++){
  if(typeof arr2[i] === 'number'){
    sum3 = sum3 + arr2[i]
  }
}
console.log(sum3);
