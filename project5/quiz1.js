
//Q1
function greet(name, hello = "안녕하세요") {
  return `${hello}, ${name}님!`;
}

console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"));

//Q2
function calculateGrade(name, eng = 0, math =0, kor=0) {
  let sum = eng + math + kor;
  let avg = sum / 3;

  console.log(name + "님의 평균 성적은" + avg.toFixed(2) + "점입니다.");
}

calculateGrade("철수", 85, 90, 78);
calculateGrade("훈이", 80);

//Q3
function createSentence(firstword,...arr) {
  let sentence = arr.join(" ");
  return sentence;
}

console.log(createSentence("Hello", "this", "is", "JavaScript"));


//Q4
function printPerson(name, age, ...arr){
  console.log(`${name}의 나이는 ${age}이고, 취미는 ${arr.join(", ")}입니다.`);
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꼽놀이");
