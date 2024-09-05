function validate(f){
    let reg = /^[0-9a-z]{4,8}$/;
    let reg2 = /^\d{6}$/
    let reg3 = /^\d{7}$/

    //아이디는 4~8자의 소문자 또는 숫자로만 입력되어야 합니다.
    if(!reg.exec(f.id.value)){
        alert("아이디는 4~8자의 소문자 또는 숫자로만 입력되어야 합니다.");
        f.id.focus();
        return;
    }

    if(f.name.value === ""){
        alert("이름을 입력하세요.");
        f.name.focus();
        return;
    }

    //비밀번호와 비밀번호 확인이 일치해야 합니다.
    if(f.pw.value === "" || f.checkpw.value === ""){
        alert("비밀번호를 입력하세요.");
        return;
    }else if(f.pw.value !== f.checkpw.value){
        alert("비밀번호와 비밀번호 확인이 일치해야 합니다.");
        f.pw.focus();
        return;
    }

    //주민등록번호는 앞자리 6자리 숫자와 뒷자리 7자리 숫자로 입력해야 합니다.
    if(!reg2.exec(f.sn1.value)){
        alert("주민등록번호 앞자리는 6자리 숫자로 입력해야 합니다.");
        f.sn1.focus();
        return;
    }else if(!reg3.exec(f.sn2.value)){
        alert("주민등록번호 뒷자리는 7자리 숫자로 입력해야 합니다.");
        f.sn2.focus();
        return;
    }

    //관심분야는 최소 하나 이상 선택해야 합니다
    let cnt = 0;
    for(let i in f.interest){
        if(f.interest[i].checked){
            cnt++;
        }
    }

    if(cnt == 0){
        alert("관심분야는 최소 하나 이상 선택해야 합니다.");
        return;
    }

    createTable(f);

}

//주민번호를 입력한 후 “확인” 버튼을 클릭하면, 
//뒷자리의 첫번째 숫자를 통해 성별을 판별하고,
//해당 성별의 라디오 버튼이 자동으로 선택되도록 하세요.
function checkGender() {
    let sn2 = document.getElementById('sn2');
    let checkgender = sn2.value
    let male = document.getElementById('male');
    let female = document.getElementById('female');

    if(checkgender.startsWith("1") || checkgender.startsWith("3")){
        male.checked = true;
    }else if(checkgender.startsWith("2") || checkgender.startsWith("4")){
        female.checked = true;
    }
}

//유효성 체크에 통과하면, 입력된 정보를 테이블에 새로운 회원으로 추가하세요.
function createTable(f) {
    const id = f.id.value;
    const name = f.name.value;
    const gender = f.gender.value;
    let arr = [];

    [...f.interest].forEach((item) => {
        if (item.checked) {
            arr.push(item.value); 
        }
    });

    let interest = arr.join(',');

    let tbody = document.querySelector('tbody');
    
    let newRow = 
    `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${gender}</td>
        <td>${interest}</td>
    </tr>`

    tbody.insertAdjacentHTML('beforeend', newRow);
    f.reset();
}

//검색기능
function search(){
    let searchInput = document.getElementById('search');
    let search = searchInput.value;
    let rows = document.querySelectorAll('tbody > tr');

    rows.forEach(row => {
        let td = row.querySelectorAll('td');
        let found = false;

        td.forEach(td => {
            if(td.textContent.includes(search)){
                found = true;
            }
        });

        if(found){
            row.style.display = '';
        }else {
            row.style.display = 'none';
        }
    });
}

function rollback() {
    let rows = document.querySelectorAll('tbody > tr');
    rows.forEach(row => {
        row.style.display = '';
    });
}