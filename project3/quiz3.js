// Q7-1
for(let i=0; i<3; i++){
  let star = '';
  for (let j=0; j<5; j++){
    star += '*';
  }
  console.log(star)
}

// Q7-2
//외부포문 : 높이
for(let i=1; i<=5; i++){
  let star = '';
  //내부포문:너비, 가로
  for (let j=1; j<=i; j++){
    star += '*';
  }
  console.log(star)
}

// Q8
function subtraction(n, m){
  console.log(n - m);
}

subtraction(5, 3);


// Q9
function betweenSum(n, m){
  let sum = 0;
  for(let i=n; i<=m; i++){
    sum += i;
  }
  console.log(sum);
}

betweenSum(3,5);


//Q10 
let arr2 = [];

function searchBig(a,b,c,d){
  arr2.push(a);
  arr2.push(b);
  arr2.push(c)
  arr2.push(d);
  let num = 0;
  for(let i=0; i<arr2.length; i++){
    if(num < arr2[i]){
      num = arr2[i];
    }
  }
  console.log(num);

}

searchBig(-1, 5, 10, -3);

// Q11

// function sameType(arr){
//   let isTrue = true;

//   for(let i=0; i<arr.length -1; i++){
//     if(typeof arr[i] === typeof arr[i+1]) {
//       isTrue = true;
//     }else{
//       isTrue = false;
//     }
//   }
//   console.log(isTrue);
// }


function sameType(arr){
  let firstType = typeof arr[0];

  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] !== firstType) {
      return false;
    }
  }
  return true;
}

console.log(sameType(["a", "b", "c"]));


// Q-12
// function isString(arr, str){
//   let isTrue = true;
//   if(arr.includes(str)){
//     isTrue = true;
//   }else {
//     isTrue = false;
//   }

//   console.log(isTrue);
// }
function isString(arr, str) {
  return arr.includes(str);
}

console.log(isString(["apple", "banana", "cherry"], "banana"));


//Q13

function multiplication(n){
  for(let i=n; i<=n; i++){
    for(let j=1; j<=9; j++ ){
      console.log(i + "*" + j+ "=" + i*j);
    }
  }
}

multiplication(2);

//Q14
function isString2(arr){
  let array = [];
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === 'string')
      array.push(arr[i]);
  }
  console.log(array);
}

isString2([1, "apple", true, "banana", 42, "cherry"]);

//Q15

function factorial(num){
  if(num == 1){
    return 1;
  }else {
    return num * factorial(num -1);
  }
}

console.log(factorial(5));


//5!
let result = factorial(5);
console.log(result);

//함수 호출 순서
//factorial(5)
//5*factorial(4)
//5*factorial(3)
//5*factorial(2)
//5*factorial(1)

//함수 완료 순서
//factorial(1)
//factorial(2)
//factorial(3)
//factorial(4)
//factorial(5)

//Q16

const students = [
  {name: "둘리", math: 90, english: 85},
  {name: "또치", math: 80, english: 95},
  {name: "도우너", math: 70, english: 75}
]

function avgSubject(obj, sbj){
  let sum = 0;
  for(let i=0; i<obj.length; i++){
    sum = sum + obj[i][sbj];
  }

  let avg = sum / obj.length;
  console.log(avg);
}

avgSubject(students, 'math');

//Q17
const employees = [
  {name: "짱구", position: "부장", salary: 500},
  {name: "철수", position: "차장", salary: 380},
  {name: "훈이", position: "사원", salary: 260},
  {name: "맹구", position: "차장", salary: 420},
  {name: "유리", position: "사원", salary: 220}
]
function avgSalary(obj, pos){
  let sum = 0;
  let cont = 0;
  for(let i=0; i<obj.length; i++){
    if(obj[i].position == pos){
      sum = sum + obj[i].salary
      cont++
    }
  }
  let avg = sum / cont;
  console.log(avg);
}

avgSalary(employees, '사원');