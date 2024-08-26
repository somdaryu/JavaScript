//Q20
let stuMap = new Map();

stuMap.set("김민준", {grade : "2학년", lesson : "컴퓨터공학"});
stuMap.set("이서윤", {grade : "3학년", lesson : "경영학"});
stuMap.set("박지호", {grade : "1학년", lesson : "물리학"});
stuMap.set("최지민", {grade : "4학년", lesson : "화학"});
stuMap.set("정예린", {grade : "2학년", lesson : "수학"});
stuMap.set("한지우", {grade : "3학년", lesson : "영어영문학"});

console.log("학생 목록 :");
for (let [name, info] of stuMap) {
  console.log(`${name}: ${info.grade}, ${info.lesson}`);
}
console.log();

stuMap.forEach(
  function(a, b) { 
    if(a.grade == "3학년"){
      a.lesson = "융합공학";
  }
}
);
console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다.")

//선생님 코드
// 학년이 3학년인 학생들의 전공을 "융합공학"으로 변경
for (let [name, info] of stuMap) {
  if (info.grade === "3학년") {
    stuMap.set(name, { grade: info.grade, lesson: "융합공학" });
  }
}
console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다.");

stuMap.forEach( 
  function(a, b){
    if(b == "정예린"){
      console.log(b +":"+ a.grade+", " + a.lesson);
    }
  }
)

//선생님 코드
// 학생 정보 검색
const searchName = "정예린";
if (stuMap.has(searchName)) {
  const info = stuMap.get(searchName);
  console.log(`${searchName}: ${info.grade}, ${info.lesson}`);
} else {
  console.log("해당 학생 정보가 없습니다.");
}
console.log();

// 학년별 학생 수 계산
// 학생의 수를 저장하는 새로운 MAP 생성
// KEY: 학년 VALUE: 학생의 수
const gradeCounts = new Map();
for (let [name, info] of stuMap) {
  const grade = info.grade;

  // 기존 값이 없으면 1로 초기화, 있으면 + 1
  if (gradeCounts.has(grade)) {
    let count = gradeCounts.get(grade);
    gradeCounts.set(grade, count+1);
  } else {
    gradeCounts.set(grade, 1);
  }
}

console.log("학년별 학생 수:");
for (let [grade, count] of gradeCounts) {
  console.log(`${grade}: ${count}명`);
}
