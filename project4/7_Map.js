//Map - 쌍형태의 데이터를 저장, key - 중복X value - 중복 허용
//키-값 쌍으로 데이터를 저장하는 객체

let userMap = new Map();

//새로운 데이터 추가
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
console.log(userMap);

//데이터 수정 set은 이미 있으면 값이 수정됨, js는 자료형을 자유롭게 교체 가능
userMap.set("phone", 100);
console.log(userMap);

//map 크기 확인
console.log(userMap.size);

//특정 키의 데이터 가져오기
console.log(userMap.get("name")); //홍길동

//특정 키가 존재하는지 확인
console.log(userMap.has("name")); //true

//특정 데이터 삭제
userMap.delete("name"); //key 사용
console.log(userMap);

console.log(userMap.has("a")); // false


//Map에 저장된 모든 데이터 출력
userMap.forEach(
  function (data) {
    console.log(data);
  });

//Map에 저장된 모든 데이터 출력
userMap.forEach(
  function (a, b) {
    console.log(a, b);
  });


//구조 분해 할당으로 map의 각 키와 값을 출력
for (let [key, value] of userMap) {
  console.log(key, value);
}

