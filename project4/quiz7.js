//Q17

let watchedMovie = new Set();
let wantMovie = new Set();

watchedMovie.add("인셉션");
watchedMovie.add("매트릭스");
watchedMovie.add("인터스텔라");
console.log("시청한 영화 목록 :");

// 보고 싶은 영화 목록 Set 생성
// 생성자에 배열을 넣으면 데이터를 한번에 추가할 수 있음 
const toWatchMovies = new Set(["파이트 클럽","더 울프 오브 월 스트리트","노인을 위한 나라는 없다"]);


for(let movie of watchedMovie){
  console.log(movie);
}
console.log();

wantMovie.add("파이트 클럽");
wantMovie.add("더 울프 오브 월 스트리트");
wantMovie.add("노인을 위한 나라는 없다");
console.log("보고싶은 영화 목록 :");
for(let movie of wantMovie){
  console.log(movie);
}
console.log();

const newMovie = "파이트 클럽";

if (!watchedMovie.has(newMovie)) {
  watchedMovie.add(newMovie);
  wantMovie.delete(newMovie);
  console.log(
    `${newMovie}을(를) 시청한 영화 목록에 추가하고, 보고 싶은 영화 목록에서 삭제했습니다.`
  );
}
console.log("시청한 영화 목록 :");
for(let movie of watchedMovie){
  console.log(movie);
}
console.log();

console.log("보고싶은 영화 목록 :");
for(let movie of wantMovie){
  console.log(movie);
}
console.log();


//Q18
let readBook = new Set();

readBook.add("해리포터");
readBook.add("반지의 제왕");
readBook.add("어린왕자");
readBook.add("데미안");
readBook.add("1984");
readBook.add("위대한 게츠비");

console.log("현재 읽은 책 목록:")
for(let book of readBook){
  console.log(book);
}
console.log();

for(let book of readBook){
    if(book.length >= 7){
      readBook.delete(book);
      console.log(`${book}을 책 목록에서 삭제했습니다`)
    }
}
console.log();

let friendBook = new Set();
friendBook.add("어린왕자");
friendBook.add("1984");
friendBook.add("노인과 바다");
friendBook.add("그리스인 조르바");

console.log("친구가 읽은 책 목록:")
for(let book of friendBook){
  console.log(book);
}

console.log();

console.log("두명의 사용자가 공통으로 읽은 책목록:")

for(let book of readBook){
  if(friendBook.has(book)){
    console.log(book);
  }
}