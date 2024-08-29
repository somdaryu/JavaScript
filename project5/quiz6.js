//Q29
let str = "I have 2 apples and 3 oranges";
let patt = /[0-9]/g;
let result = str.match(patt);
console.log(result);

//Q30
str = "Hello, JavaScript is fun!"
patt = /[aeiou]/g;
result = str.match(patt);
console.log(result);

//Q31
str = "Welcome to the world of coding";
regex = /coding/;
console.log(regex.test(str));

//Q32
str = "JavaScript is powerful";
regex = /is/;
console.log(str.search(regex));

//Q33
str ="banana";
patt = /a+/g;
result = str.match(patt);
console.log(result);

//Q34
str = "abc123ABC";
patt = /abc/gi;
result = str.match(patt);
console.log(result);

//Q35
str = "Hello, World! How are you today?";
patt = /[HW]/g;
result = str.match(patt);
console.log(result);

//Q36
str = "2024-08-27";
patt = /(\d{4})-(\d{2})-(\d{2})/;
result = str.match(patt);
console.log(result);
//\d: 숫자
//{숫자}:앞에 패턴이 지정된 횟수만큼 반복됨
//():캡처 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
//(\d{4}): 첫번째 그룹 (연도)
//(\d{2}): 두번째 그룹 (월)
//(\d{2}): 세번째 그룹 (일)

//일만 꺼내세요
console.log(result[3]);
