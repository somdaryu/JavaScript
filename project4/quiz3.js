//Q10
const products = [
  { name: "스마트폰", price: 799000, category: "전자제품" },
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "헤드폰", price: 150000, category: "전자제품" },
  { name: "키보드", price: 100000, category: "액세서리" },
  { name: "마우스", price: 50000, category: "액세서리" },
  { name: "충전기", price: 30000, category: "액세서리" },
  { name: "블루투스 스피커", price: 90000, category: "전자제품" },
];

let sortArr =products.sort(function(a, b){
  return a.price - b.price;
});

console.log("정렬된 상품 목록 :");
console.log(sortArr);

let arr = products.filter(
  function(value){
    if(value.price >= 50000 && value.price <= 500000 && value.category == "전자제품"){
      return value
    }
  }
)
console.log("필터링된 상품 목록 :");
console.log(arr);

let arr2 = arr.map(
  function(value){
    return {
      name : value.name,
      formattedPrice : `₩${value.price}`,
      category: value.category
    }
  }
)
console.log("포맷된 상품 목록 :");
console.log(arr2)