$(function() {
    // 로그인 active
    $('.login-type1').addClass('active');
});

// 정규식
function login() {
    let memberId = document.getElementById('user-id');
    let memberPw = document.getElementById('user-password');

    let idCheck = /^[A-Za-z0-9]{5,20}$/;
    if(memberId.value == '') {
        memberId.focus();
        return false;
    } else if(!idCheck.test(memberId.value)) {
        memberId.focus();
        alert('영문(대소문자)로 5 ~ 20자 사이로 입력해주세요.');
        return false;
    }

    // id확인 또는 실패 코드 들어갈 곳

    let pwCheck = /[!@#$%^&*]/gi;
    if(memberPw.value == '') {
        memberPw.focus();
        return false;
    } else if(!pwCheck.test(memberPw.value)) {
        memberPw.focus();
        alert('특수문자(!@#$%^&*)가 한개 이상 포함되어야합니다.');
        return false;
    }

    // pw확인 또는 실패 코드 들어갈 곳

    alert(memberId.value + '님 로그인 되었습니다.');
}

