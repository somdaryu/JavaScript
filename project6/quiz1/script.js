let tel = document.getElementById('tel');

function checkNum(tel){
    let patt = /^[0-9]*$/;
    if(!patt.test(tel.value)){
        tel.style.borderColor = 'red';
    }else {
        tel.style.borderColor = '#b6b6b6';
    }
}

let motive = document.getElementById('motivation');
let counter = document.getElementById('counter');

function count(letter) {
    let current = letter.value.length;
    if(current >= 30){
        motive.style.color = 'red';
        counter.innerHTML = current;
    }else{
        motive.style.color = 'black';
        counter.innerHTML = current;
    }
}

let name = document.getElementById('name');
let job = document.getElementsByName('job');
let message = "";
let isValid = true;

function checkForm() {
    if(tel.value === ""){
        isValid = false;
        message += "연락처를 입력해주세요\n";
    }

    if(name.value === ""){
        isValid = false;
        message += "이름을 입력해주세요\n";
    }

    let isJobCheck = false;
    for(let i=0; i<job.length; i++){
        if(job[i].checked){
            isJobCheck = true;
            break;
        }
    }

    if(!isJobCheck){
        isValid = false;
        message += "지원분야를 선택해주세요\n";
    }

    if(!isValid){
        alert(message);
    }
}