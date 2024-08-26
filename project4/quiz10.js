//Q21
console.log(Math.round(7.5))

//Q22
console.log(Math.floor(5.9));

//Q23
console.log(Math.sign(42));

//Q24
console.log(Math.min(10, 20, 30, 40, 50));

//Q25
console.log(Math.max(3, 6, 9, 12, 15));

//Q26
let num = Math.floor(Math.random() * 6) + 1

console.log("주사위 결과:" + num);


//Q27
let dice = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 6) + 1;
  dice.push(num);
}

console.log("10번 던진 결과:" + dice);

//Q28
//매개변수: times(반복 횟수)
//리턴값 : arr(숫자3개가 담긴 배열)
function rollDice(times){
  const arr =[];
  for(let i=0; i<3; i++){
    let num = Math.floor(Math.random() * 6) + 1;
    arr.push(num);
  }
  return arr;
}

let player1 = rollDice(3);
let player2 = rollDice(3);

let sum1 = player1.reduce((sum, n) => sum + n, 0);
let sum2 = player2.reduce((sum, n) => sum + n, 0);
console.log("Player1의 주사위 결과:"+player1 +"합:"+sum1);
console.log("Player2의 주사위 결과:"+player2 +"합:"+sum2);

if(sum1 > sum2){
  console.log("player1 승리!");
}else{
  console.log("player2 승리!");
}

