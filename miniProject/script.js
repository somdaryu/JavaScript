//스토리지에 저장된 li 꺼내기
let getData = localStorage.getItem("saved-list");
let storageData = JSON.parse(getData);

if(storageData != null){
  //li 개수 만큼 넘겨주기
  for (let i = 0; i < storageData.length; i++) {
    createTodoList(storageData[i]);
  }
}

//1.할일 추가
//할 일을 추가하기 위한 입력 필드와 추가 버튼이 있습니다.
//입력 필드에 할 일을 입력한 후 "+" 버튼을 클릭하면 새로운 할 일이 목록에 추가됩니다.
function createTodoList(storageData) {
  let inputList = document.getElementById('inputList');
  let inputText = inputList.value;

  let todolist = document.getElementById('toDoList');
  let newLi = document.createElement('li');

  let newCheck = document.createElement('input');
  newCheck.type = 'checkbox';

  let newInput = document.createElement('input');
  newInput.type = "text";
  newInput.disabled = true;

  // 저장된 데이터가 있을 경우
  if (storageData) {
    newCheck.checked = storageData.complete;
    newInput.value = storageData.contents;
    if (storageData.complete) {
      newLi.classList.add('checked');
    }
  } else {
    newInput.value = inputText; // 새로 추가하는 경우
  }

  let editBtn = document.createElement('button');
  editBtn.textContent = "수정";

  let removeBtn = document.createElement('button');
  removeBtn.textContent = "삭제";

  
  //2.할일목록
  //추가된 할일은 목록 형태로 화면에 표시되며, 각 할일 옆에는 수정과 삭제 버튼이 있습니다.
  todolist.appendChild(newLi);
  newLi.appendChild(newCheck);
  newLi.appendChild(newInput);
  newLi.appendChild(editBtn);
  newLi.appendChild(removeBtn);
  inputList.value = "";
  countList();

  //3.체크박스
  //각 할일 항목 왼쪽에는 완료 여부를 표시할 수 있는 체크박스가 있습니다.
  //체크박스를 클릭하면 해당 할일이 완료로 표시됩니다.
  newCheck.addEventListener('click', ()=>{
    newLi.classList.toggle('checked');
    newInput.classList.toggle('strikethrough');
    editBtn.classList.toggle('strikethrough');
    removeBtn.classList.toggle('strikethrough');
    countList()
    saveStorage();
  });

  //4.할 일 수정: 수정버튼을 클릭하면 해당 할일을 수정할 수 있으며, 수정이 완료되면 저장할 수 있습니다.
  editBtn.addEventListener('click', () => {
    if(editBtn.textContent === "저장"){
      editBtn.textContent = "수정";
      newInput.disabled = true;
    }else {
      editBtn.textContent = "저장";
      newInput.disabled = false;
      saveStorage();
    }
  });

  removeBtn.addEventListener('click', ()=>{
    newLi.remove();
    countList()
    saveStorage();
  });
}

//+버튼 누르면 추가되는 이벤트
function addTodo() {
  let inputList = document.querySelector('#inputList')
  if(inputList.value.trim() !== ""){
    createTodoList();
    saveStorage();
  }else{
    alert("할일을 입력하세요!");
  }
}

//6.하단의 전체삭제 버튼을 클릭하면 현재 목록에 있는 모든 할일이 삭제됩니다.
function allRemove() {
  let liList = document.querySelectorAll('#toDoList > li');

  for(let li of liList){
  li.remove();
  }
  localStorage.removeItem("saved-list");
  countList()
  saveStorage();
}

//7.데이터 유지
//브라우저를 껐다가 다시 열어도 이전에 기록했던 To-Do List가 그대로 나타납니다.
function saveStorage() {
  let toDoList = document.querySelector('#toDoList');
  let saveToDO = []; // 배열 초기화
  
  for(let i=0; i<toDoList.children.length; i++){
    const todoObj = {
    contents: toDoList.children[i].querySelector('input[type="text"]').value,
    complete:toDoList.children[i].classList.contains('checked')
    };
  saveToDO.push(todoObj);
  }
  
  console.log(saveToDO);
  
  saveToDO.length === 0
  ? localStorage.removeItem("saved-list")
  : localStorage.setItem("saved-list", JSON.stringify(saveToDO));
}

//할일 개수 세기
function countList() {
  let getList = document.querySelectorAll('#toDoList > li');
  let total = document.getElementById('total');
  total.textContent = getList.length;
  let cnt = 0;
  let complete = document.getElementById('complete');

  for(let i=0; i<getList.length; i++){
    if(getList[i].classList.contains('checked')){
      cnt++;
    }
  }
  complete.textContent = cnt;
}