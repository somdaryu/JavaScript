//Q19

let phoneMap = new Map();

phoneMap.set("민수", {phone : "010-1234-5678",address : "서울특별시 강남구"});
phoneMap.set("지영", {phone : "010-8765-4321",address : "부산광역시 해운대구"});
phoneMap.set("현우", {phone : "010-2345-6789",address : "대구광역시 수성구"});
phoneMap.set("수빈", {phone : "010-9876-5432",address : "인천광역시 남도구"});
phoneMap.set("동민", {phone : "010-3456-7890",address : "광주광역시 서구"});
phoneMap.set("하은", {phone : "010-6543-2109",address : "대전광역시 유성구"});

console.log("연락처 목록:")
for (let [name, info] of phoneMap) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}

console.log();

phoneMap.forEach(
  function(a, b) {
    if(b == "동민"){
      a.phone = "010-9999-9999";
      console.log("동민의 연락처를 수정했습니다.");
    }
  }
)

//선생님 코드
// 동민의 연락처가 있는지 확인 후 수정
if (phoneMap.has("동민")) {
  phoneMap.set("동민", { phone: "010-9999-9999", address: "광주광역시 서구" });
  console.log("동민의 연락처를 수정했습니다.");
} else {
  console.log("동민의 연락처가 없습니다.");
}

console.log();

if(phoneMap.has("지영")){
  phoneMap.delete("지영");
  console.log("지영의 연락처를 삭제했습니다.")
}

//선생님 코드
// 지영의 연락처가 있는지 확인 후 삭제
if (phoneMap.has("지영")) {
  phoneMap.delete("지영");
  console.log("지영의 연락처를 삭제했습니다.");
} else {
  console.log("지영의 연락처가 없습니다.");
}

console.log();

console.log("현재 연락처 목록");
for (let [name, info] of phoneMap) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}

console.log("현재 연락처 개수 : " + phoneMap.size);