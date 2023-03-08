"use strict"
function ibg() {
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();
const burger = document.querySelector(".icon-menu");
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    document.querySelector(".menu__body").classList.toggle('active');
    document.querySelector("body").classList.toggle('lock');
});

const reviewsSwiperCheck = document.querySelector('.swiper-slider');
if (reviewsSwiperCheck) {
    const swiper = new Swiper('.swiper-slider', {
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        touchRatio: 1,   
        grabCursor: true,
    });    
}
// ================== Form ======================
function validateEmail(mail) {
    return String(mail).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
function formBehavior() {
    const placeholderDefault = "enter your email";
    const form = document.forms[0];
    const formInput = form.formInput;
    const block = document.querySelector('.subscribe');
    const submitBtn = document.querySelector('.subscribe__button');
    block.addEventListener('click', e => {
        if (formInput.contains(e.target)) {
            formInput.value = "";
            formInput.placeholder = "";
            document.querySelector('.input').classList.remove('error');
            submitBtn.onclick = function () {
                if (!validateEmail(formInput.value)) {
                    document.querySelector('.input').classList.add('error');
                    formInput.value = "incorrect email";
                    formInput.addEventListener('keydown', e => {
                        if (e.key === "Backspace" || e.key === "Delete") {
                            formInput.value = "";
                            formInput.placeholder = "";
                            document.querySelector('.input').classList.remove('error');
                        }
                    })
                } else {
                    document.querySelector('.input').classList.remove('error');
                }
            }
        } else {
            formInput.placeholder = placeholderDefault;
        }
    })
}
formBehavior();
