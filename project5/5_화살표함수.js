//함수 선언식
function hello(name) {
  return "Hello " + name;
};

//함수 표현식 : 함수를 변수에 할당하는 방식
const hello2 = function(name) {
  return "Hello " + name;
};

//화살표 함수
const hello3 = (name) => {
  return "Hello " + name;
}

//코드가 한줄일 경우 {}중괄호와 return 키워드 생략 가능
const hello4 = (name) => "Hello " + name;

//코드가 여러줄일 경우 {}중괄호와 return키워드를 반드시 작성해야함
const hello5 = (name) => {
  let result =  "Hello " + name;
  return result;
}

