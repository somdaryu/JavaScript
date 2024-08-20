//대입연산자
let x = 1; // x에 1을 저장

//비교연산자
console.log(1 == 2); //값이 같으면 참
console.log(1 != 2); //값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1"); //값만 비교
console.log(1 === "1"); //값과 자료형 모두 비교


//산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

//문자열결합연산자
console.log("좋은 " + "하루 되세요!");

//부호 연산자
console.log(-x); //부호를 반대로 변경하여 음수를 출력
console.log(x); //원본데이터에는 영향이 없음

//증감 연산자
console.log(++x); //2 1 증가 1 => 2
console.log(x++); //2 2 > 3
console.log(--x); //2 3 > 2
console.log(x--); //2 2

//논리 연산자
// && 논리곱. 두항이 모두 참이면 참
// || 논리합. 두항 중 하나라도 참이면 참
console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(!true); // false

//삼항 연산자
let point = 85;
//점수가 90이상이면 pass 아니면 fail
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);


//typeof 연산자
console.log(typeof "42"); //string
console.log(typeof 42); // number
console.log(typeof 1.123); // number
console.log(typeof true); // boolean
console.log(typeof function(){}); // function
console.log(typeof undefined); // undefined
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof []); //object
