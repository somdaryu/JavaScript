//rest 파라미터: 나머지 파라미터로, 나머지 데이터가 배열로 저장됨
//one에 1,  two에 2, 나머지는 rest 배열에 저장됨

function func(one, two, ...rest){
  console.log(rest);
}

func(1,2,3,4,5);

//잘못된 예시
//rest parameter는 반드시 마지막 위치에 있어야함
// function func(one, ...rest, two) {
//   console.log(rest);
// }

//rest파라미터를 이용하여 숫자들의 합 구하기
function sum(...arr){
  let total = 0;
  //배열을 순회하며 합계 구하기
  for (let x of arr){
    total += x;
  }
  console.log(total);
}

sum(1,2,3,4,5); //숫자가 5개인 경우
sum(1,2,3); //숫자가 3개인 경우
//rest 파라미터를 사용하면 개수와 상관없이 합계를 구할 수 있음~!
