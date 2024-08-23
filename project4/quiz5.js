//Q12
const inventory = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 },
];


inventory.push(
  { product: "바나나킥", 
    quantity: 50,
    price: 1000
  }
)

console.log("새로운 제품 추가 :")
console.log(inventory);

inventory.forEach( 
  function(value){
    if(value.quantity > 0){
      value.product =  `(재고있음) ${value.product}`;
    }
  })

console.log("재고가 있는 제품의 이름 변경 :")
console.log(inventory);

inventory.forEach(
  function(value){
    if(value.quantity > 10){
      value.price = value.price - (value.price * 0.1);
    }
  }
)

console.log("재고가 10개가 넘는 제품의 가격 할인 :")
console.log(inventory);

let sum = inventory.reduce(
  function(total, item){
    return total = total + (item.quantity * item.price);
  }, 0
);
console.log("전체 재고의 총 가치:"+sum)
