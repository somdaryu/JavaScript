//Q11

const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
];



const gradeStu = students.map(
  function(value){
    return {
      name : value.name,
      score : value.score,
      gradeLevel : value.gradeLevel,
      grade : ''
    }
  }
).filter(
  function(value){
    if(value.score >= 90){
      return value.grade = 'A'
    }else if(value.score >= 70){
      return value.grade = 'B'
    }else {
      return value.grade = 'C'
    }
  }
)
console.log("등급이 추가된 학생 목록 :");
console.log(gradeStu);

const sortStu = gradeStu.sort(
  function(a, b){
    return b.score - a.score
  }
);

console.log("정렬된 학생 목록 :");
console.log(sortStu);

const filterStu = sortStu.filter(
  function(value){
    if(value.gradeLevel == '1학년' && value.grade == 'B'){
      return value
    }
  }
);

console.log("필터링된 학생 목록 :");
console.log(filterStu);

const sum = filterStu.reduce(
  function(total, stu){
    return total + stu.score;
  }, 0
);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합:", sum);