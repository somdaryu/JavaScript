//연습문제
// Q1
const customer = {
  id : "ds",
  password : "1234",
  grade : "vip",
  name : "유다솜",
  phone : "010-9094-9646"
}

const pd = {
  pd_name : "노트북",
  price : 500000,
  guide : "성능굿",
  category : "전자제품"
}

const order = {
  od_name : "노트북",
  count : 1,
  sum_price : 500000,
  customer : "유다솜",
  od_date : "2024-08-20",
  address : "우리집"
}

console.log(customer);
console.log(pd);
console.log(order);

// Q2
const person = {
  age : 30,
  name : "둘리",
  address : "서울"
  }

person.age = 10
person.name = "또치"
person.address = "인천"
console.log(person);


const product = {
  name: "노트북",
  price: 1500000,
  brand: "삼성",
  }

product.price = 200000
product.brand = "LG"
console.log(product);

// Q3
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

const food2 = foodList[foodList.length - 1]; // 마지막 요소 'steak'
const hap = foodList[0] + " " + food2
console.log(hap);