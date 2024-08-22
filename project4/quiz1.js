
// Q1
let email = "user@naver.com"
let arr = email.split('@');
console.log(arr[1]);

// Q2
// let str = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";
// console.log(str.replace("나쁜", "XX").replace("더러운", "XXX"));

const forbiddenWords = ["나쁜", "더러운"];
let str = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";

for(let word of forbiddenWords){
  str = str.replace(word, "X".repeat(word.length));
}

console.log(str);

// Q3
// let file = "사과.txt";
// if(file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')){
//   console.log("지원되는 파일 형식입니다.");
// }else{
//   console.log("지원되지 않는 파일 형식입니다.");
// }

const allowedExtensions = [".jpg", ".png", ".gif"];
let file = "사과.txt";
// 파일의 확장자 추출
const index = file.slice(file.lastIndexOf("."));
const extension = file.slice(index);

// 확장자가 지원되지 않는 경우 메시지 출력
if (allowedExtensions.includes(extension)) {
  console.log("지원되는 파일 형식입니다");
} else {
  console.log("지원되지 않는 파일 형식입니다");
}


//Q4
let str3 = "0112233";
let sum1 = 0;
for(let i=0; i<str3.length; i++){
  sum1 = sum1 + parseInt(str3[i])
}
console.log(sum1);


//잘못된 코드
// let result = 0;
// for(let s of str){
//   result = result + s; //문자열 결합 연산
// }

// console.log(result);


//Q5
// let arr2 = [1, 'aa', true, '5', 10];
// let sum = 0;
// for(let i=0; i<arr2.length; i++){
//   if(parsInt(arr[i])){
//     sum = sum + parseInt(arr2[i]);
//    }
// }
// console.log(sum);

let arr2 = [1, 'aa', true, '5', 10];
let sum = 0;

for(let i=0; i<arr2.length; i++){
  if(!isNaN(arr2[i])){
    if(typeof arr2[i] == 'number' || typeof arr2[i] == 'boolean'){
      sum = sum + arr2[i];
    }else if (typeof arr2[i] == 'string'){
      sum = sum + parseInt(arr2[i]);
    }
}
}
console.log(sum);

//Q6
let str2 = "aaabbc";
let str4 = "";
let cnt = 1;
for(let i=0; i<str2.length; i++){
  //현재 문자가 다음문자와 같은지 비교
  if(str2[i] == str2[i+1]){
    cnt++;
  }else{
    //같지 않으면 카운트 종료. 압축된 문자 추가
    str4= str4 + str2[i] + cnt;
    cnt = 1;
  }
}
console.log(str4);


