//Q13
var name ="아리";
var age = 17;


console.log(`${name}의 나이는 ${age}입니다.`);

//Q14
var a = 10;
var b = 20;

console.log(`${a}와 ${b}를 곱한 결과는 ${a*b}입니다.`);

//Q15
var num1 = 10;
var num2 = 20;
console.log(`${num1}와 ${num2}의 평균은 ${num1 + num2 / 2}입니다`);

//Q16
var city ="서울";
var population = 9736000;
console.log(`${city}의 인구수는 ${population}명 입니다.`);

//Q17
let name2 = "소영";
let score = 75;


if(score>=60){
  console.log(
    `${name2}의 점수는 ${score}점으로 합격입니다`
  );
}else {
  console.log(
    "불합격 입니다"
  )
}

//Q18
let key1 = "make";
let key2 = "model";
let key3 = "year";

var person = {
  [key1]: "현대", //name: "John"
  [key2]: "쏘나타",
  [key3]: 2021
};

//Q19
let property = "address";
var person1 = {
  name: '철수',
  age: 21,
}

person1[property] = "인천 남동수 만수동";

console.log(person1);

//Q20
let product = {};
let key4 = "productName";
let key5 = "productPrice";

product[key4] = "필통";
product[key5] = 5000;

console.log(product);





