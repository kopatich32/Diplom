
// Log in form
let $ = document.querySelector.bind(document);
let formReg = document.forms.registration;
let formAuth = document.forms.auth;
let regWrapper = $('.registration_wrapper');
let authWrapper = $('.auth_wrapper');
let accBtn = $('.profile-offline');
let regButton = $('button[name="sign_in"]');
// let loginBtn = $('button[name="login"]');
let registration = $('button[name="reg"]');
let auth = $('.auth');
let fileInput = $('.file-input').parentElement;


//Scroll width
let scrollwidth = window.innerWidth - document.documentElement.clientWidth;


document.addEventListener('click', (e) => {
    if (accBtn.contains(e.target)) {
        e.preventDefault();
        authWrapper.style.display = 'block';
        document.body.style.cssText +=
            `overflow: hidden;
            padding-right: ${scrollwidth}px;
            `
    } else if (!formAuth.contains(e.target)) {
        authWrapper.style.display = 'none';
        document.body.style.overflow = null;
        document.body.style.paddingRight = null;


    }

    if (regButton.contains(e.target)) { //sign_in
        e.preventDefault();
        authWrapper.style.display = 'none';
        regWrapper.style.display = 'block';
        fileInput.removeAttribute('disabled');
    }else if(!formReg.contains(e.target)){
        regWrapper.style.display = 'none';
    }
    if(auth.contains(e.target)){
        e.preventDefault();
        regWrapper.style.display = 'none';
        authWrapper.style.display = 'block';
    }
})

formReg.addEventListener('submit', (e) => {
    let isValid = true;
    let lengthOfInput = $('input[name="reg_password"]').value;
    if (lengthOfInput.length > 0 && lengthOfInput.length < 6) {
        $('.alert').style.display = 'block';
        $('.alert').innerText = 'Слишком короткий пароль';
        isValid = false;
    }
    if(!isValid){
        e.preventDefault();
    }else{
        isValid = true;
    }
})
// Сохранение окна открытым, если форма не прошла валидацию
if($('input[name="auth_email"]').value != ""){
    authWrapper.style.display ='block';
}
if($('input[name="reg_email"]').value != ''){
    regWrapper.style.display = 'block';
}

// close modal and clear URL
let modalSuccessWrapper = document.querySelector('.success');
let successModal = document.querySelector('.success-position');
let closeModalBtn  = document.querySelector('.success-close-btn');
document.onclick = e => {
    if(!successModal.contains(e.target) || closeModalBtn.contains(e.target)){
        modalSuccessWrapper.style.display = 'none';
    }
}
function clearURL() {
    let urlWithoutParams = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.history.pushState({}, document.title, urlWithoutParams);
}
