//Date: 날짜와 시간을 다루는 객체

//현재 날짜와 시간을 기준으로 Date 객체 생성
let now = new Date();
console.log(now);

//특정 날짜와 시간을 지정해서 Date 객체 생성 (연도, 월, 일, 시, 분, 초, 밀리초)
let d = new Date(2024, 1, 1, 10, 10, 10, 0);
console.log(d);
//2024년 2월 1일 10:10:10 (월은 0부터 시작하므로 1은 2월)

//시간대가 안맞음...
console.log(d.toLocaleString()); //로컬시간대로 변경

//문자열을 사용하여 Date객체 생성
let d2 = new Date("October 13, 2024 11:11:11");
console.log(d2.toLocaleString()); //2024년 10월 13일 11:11:11

let d3 = new Date("2024-10-13T11:11:11");
console.log(d3.toLocaleString());

//정적 메소드로 현재 시간(밀리초 단위) 출력
console.log(Date.now());

let d4 = new Date();

let year = d4.getFullYear(); //연도
console.log("year", year);

let month = d4.getMonth();
console.log("month", month); //월 ( 0부터 시작 )

let date = d4.getDate();
console.log("date", date); //일

let day = d4.getDay();
console.log("day", day); //요일 (0: 일요일, 6:토요일)

let hour = d4.getHours(); //시
console.log("hour", hour);

let second = d4.getSeconds(); //초
console.log("second", second);








