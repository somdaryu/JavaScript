//Q5

//매개변수 : 과목명과 학생들
//전달되는 학생수가 가변적이므로 나머지 파라미터를 사용한다.
function calculateAverageScore(subject, ...students){
  let filterStudents = students.filter(
    function(student){ 
      return typeof student[subject] != "undefined";
  }
)

  let sum = filterStudents.reduce(
    function(total, student){
      return total + student[subject];
    }, 0);

  let count = filterStudents.length;
  let avg = sum / count;

  return avg.toFixed(1);
}

function showStudents(...students) {
  console.log("학생 목록:");
  students.forEach((student) => console.log(student));
  console.log();
}

const student1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
const student2 = { name: "철수", eng: 90, math: 85, kor: 88 };
const student3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
const student4 = { name: "맹구", eng: 65 };
const student5 = { name: "유리", math: 80, kor: 90 };

showStudents(student1, student2, student3, student4, student5);

const engAvg = calculateAverageScore(
  "eng",
  student1,
  student2,
  student3,
  student4
);
const mathAvg = calculateAverageScore("math", student4, student5);
const korAvg = calculateAverageScore(
  "kor",
  student1,
  student2,
  student3,
  student4,
  student5
);
console.log(
  `짱구, 철수, 훈이, 맹구의 영어과목의 평균점수는 ${engAvg}점 입니다`
); //77.5
console.log(`맹구와 유리의 수학과목의 평균점수는 ${mathAvg}점 입니다`); //80.0
console.log(`국어과목의 전체 평균점수는 ${korAvg}점 입니다`); //85.0


//Q6
function showProduct(...products) {
  console.log("상품 목록:");
  products.forEach(product => console.log(product));
  console.log();
}

const product1 = { name : '새우깡', price: 1500, discount: 10}
const product2 = { name : '홈런볼', price: 2000, discount: 5}
const product3 = { name : '포카칩', price: 2500}
const product4 = { name : '칙촉', price: 3000, discount: 15}
const product5 = { name : '오잉', price: 1800}

showProduct(product1, product2, product3, product4, product5);

function calculateAveragePrice(...products){
  let sum = products.reduce((total, product) => {
    let finalPrice = 0;
    if (typeof product.discount == "undefined") {
      finalPrice = product.price;
    } else {
      finalPrice = product.price * (1 - product.discount / 100);
    }
    return total + finalPrice;
  }, 0);

  let count = products.length;

  return (sum / count).toFixed(2);
}

const avgFinalPrice1 = calculateAveragePrice(product1, product2, product3);

const avgFinalPrice2 = calculateAveragePrice(
  product1,
  product2,
  product3,
  product4,
  product5
);

console.log(`새우깡, 홈런볼, 포카칩의 평균 가격은 ${avgFinalPrice1}원 입니다.`);
console.log(`전체 평균 가격은 ${avgFinalPrice2}원 입니다.`);
