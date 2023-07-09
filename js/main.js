// nav
const navBtn = $('#menuBar');
const nav = $('.menu');
const closeBtn = $('#closeBtn');

$(navBtn).on('click', function() {
  $(nav).addClass('on');
  $(nav).removeClass('off');
});

$(closeBtn).on('click', function() {
  $(nav).addClass('off');
  $(nav).removeClass('on');
});


// const pw = document.querySelectorAll('.pw');
// const pwIcons = document.querySelectorAll('.pw .eye');

// for(let i = 0; i < pwIcons.length; i++) {
//   pwIcons[i].addEventListener('click', function() {

//     pwIcons[i].classList.toggle('eye-on');

//     const eyeOn = document.querySelector(".pw .eye .ri-eye-line");
//     const eyeOff = document.querySelector(".pw .eye .ri-eye-off-line");
//     const pwInput = document.querySelector(".pw #password");

//     // if(pwIcons[i].classList.contains('eye-on')){
//     //   eyeOff.setAttribute('class', 'ri-eye-line');
//     //   pwInput.setAttribute('type','text');
//     // } else{
//     //   eyeOn.setAttribute('class', 'ri-eye-off-line');
//     //   pwInput.setAttribute('type','password');
//     // }

//     if(pw.classList.contains('pw-check')){
//       eyeOff.setAttribute('class', 'ri-eye-line');
//       pwInput.setAttribute('type','text');
//     } else{
//       eyeOn.setAttribute('class', 'ri-eye-line');
//       pwInput.setAttribute('type','text');
//     }
//   });
// }


/*비밀번호 아이콘 이벤트*/
/*
const pwIcon = document.querySelector(".pw-input .eye");
const pwCeckIcon = document.querySelector(".pw-check .eye");

// 비밀번호 보기 / 안보기
function passwordDefaltEye(){
  pwIcon.classList.toggle("eye-on");
  
  const EyeOn = document.querySelector(".pw-input .eye .ri-eye-line");
  const EyeOff = document.querySelector(".pw-input .eye .ri-eye-off-line");
  const pwInput = document.querySelector("#password");

  if(pwIcon.classList.contains('eye-on')){
    EyeOff.setAttribute('class', 'ri-eye-line');
    pwInput.setAttribute('type', 'text');
  } else{
    EyeOn.setAttribute('class', 'ri-eye-off-line');
    pwInput.setAttribute('type', 'password');
  }
}

// 비밀번호확인 보기 / 안보기
function passowrdCheckEye(){
  pwCeckIcon.classList.toggle("eye-on");
  
  const CheckEyeOn = document.querySelector(".pw-check .eye .ri-eye-line");
  const CheckEyeOff = document.querySelector(".pw-check .eye .ri-eye-off-line");
  const pwInputCheck = document.querySelector("#passwordCheck");
  
  if(pwCeckIcon.classList.contains('eye-on')){
    CheckEyeOff.setAttribute('class', 'ri-eye-line');
    pwInputCheck.setAttribute('type', 'text');
  } else{
    CheckEyeOn.setAttribute('class', 'ri-eye-off-line');
    pwInputCheck.setAttribute('type', 'password');
  }
}
*/