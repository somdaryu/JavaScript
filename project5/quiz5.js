//Q21
let book = {
  title: "위대한 개츠비",
  author: "스콧 피츠제럴드",
  publishedYear: 1925,
};
console.log("원본객체: " + JSON.stringify(book));

let copyBook = { ...book };
console.log("복사된객체: " + JSON.stringify(copyBook));


copyBook.publishedYear = 2023;
console.log("원본객체의 출판년도: " + book.publishedYear); 
console.log("복사된객체의 출판년도: " + copyBook.publishedYear); 

//Q22
let book2 = {
  title: "자바 프로그래밍 입문",
  author: {
    firstName: "은종",
    lastName: "박",
  },
};
console.log("원본객체: " + JSON.stringify(book2));

let deepCopyBook = JSON.parse(JSON.stringify(book2));
console.log("복사된객체: " + JSON.stringify(deepCopyBook));


deepCopyBook.author.lastName = "김";

console.log("원본객체의 성: " + book2.author.lastName); 
console.log("복사된객체의 성: " + deepCopyBook.author.lastName); 


//Q23
let obj = {
  brand: "Apple",
  price: 990000,
  model: "IPhone 13"
};

let {brand, price} = obj;
console.log("브랜드:"+brand);
console.log("가격:"+price);

//Q24
let movie = {
  title: "인셉션",
  director: "크리스토퍼 놀란",
  year : 2010
};

let {title, year} = movie;
console.log("제목:"+title);
console.log("출시연도:"+year);

//Q25
function func({brand, model}) {
  console.log("브랜드:"+brand+ ", " + "모델명:"+model);
}

func(obj);

//Q26

let arr = ["red", "green", "blue"];
let [a, b, c] = arr;

console.log(a+" "+b+" "+c);

//Q27
let arr2 = ["사과", "바나나", "오렌지", "키위"];
let [n1, , ,n4] = arr2;
console.log(n1+"와 "+n4);

//Q28
let [a1, , a3,] = arr2;
console.log(a1+"와 "+a3);