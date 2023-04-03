function handleInputEmail(event) {
    const inputEmail = event.target;
    const infoInputEmail = document.querySelector('.info-input-email');
    const eye1 = document.getElementById('eye-1');
    const eye2 = document.getElementById('eye-2');

    if (inputEmail.value === "") {
        inputEmail.classList.remove('border-red-600');
        inputEmail.classList.remove('border-green-600');
        infoInputEmail.style.display = 'none';
        inputEmail.classList.add('border-slate-300');
        eye1.style.bottom = '0'
        eye1.style.position = 'relative'
        eye2.style.bottom = '0'
        eye2.style.position = 'relative'
    } else {
        if (!inputEmail.value.includes('@')) {
            inputEmail.classList.remove('border-slate-300');
            inputEmail.classList.remove('border-green-600');
            inputEmail.classList.add('border-red-600');
            infoInputEmail.innerHTML = "Masukan Email Dengan Benar";
            infoInputEmail.style.color = 'red';
            infoInputEmail.style.display = 'initial';
            eye1.style.bottom = '-23px'
            eye1.style.position = 'relative'
            eye2.style.bottom = '-23px'
            eye2.style.position = 'relative'
        } else {
            inputEmail.classList.remove('border-slate-300');
            inputEmail.classList.remove('border-red-600');
            inputEmail.classList.add('border-green-600');
            infoInputEmail.style.display = 'none';
            eye1.style.bottom = '0'
            eye1.style.position = 'relative'
            eye2.style.bottom = '0'
            eye2.style.position = 'relative'
        }
    }
}

function handleInputText(event) {
    const inputText = event.target;
    const infoInputText = document.querySelector('.info-input-text');
    const eye1 = document.getElementById('eye-1');
    const eye2 = document.getElementById('eye-2');

    if (inputText.value === "") {
        inputText.classList.remove('border-red-600');
        inputText.classList.remove('border-green-600');
        infoInputText.style.display = 'none';
        inputText.classList.add('border-slate-300');
        eye1.style.bottom = '0'
        eye1.style.position = 'relative'
        eye2.style.bottom = '0'
        eye2.style.position = 'relative'
    } else {
        if (inputText.value.length < 6) {
            inputText.classList.remove('border-slate-300');
            inputText.classList.remove('border-green-600');
            inputText.classList.add('border-red-600');
            infoInputText.innerHTML = "Username Minimal 6 Karacter";
            infoInputText.style.color = 'red';
            infoInputText.style.display = 'initial';
            eye1.style.bottom = '-23px'
            eye1.style.position = 'relative'
            eye2.style.bottom = '-23px'
            eye2.style.position = 'relative'
        }else {
            inputText.classList.remove('border-slate-300');
            inputText.classList.remove('border-red-600');
            inputText.classList.add('border-green-600');
            infoInputText.style.display = 'none';
            eye1.style.bottom = '0'
            eye1.style.position = 'relative'
            eye2.style.bottom = '0'
            eye2.style.position = 'relative'
        }
    }
}

function handleInputPassword(event) {
    const inputPassword = event.target;
    const infoInputPassword = document.querySelector('.info-input-password');
    const eye2 = document.getElementById('eye-2');

    if (inputPassword.value === "") {
        inputPassword.classList.remove('border-red-600');
        inputPassword.classList.remove('border-green-600');
        infoInputPassword.style.display = 'none';
        inputPassword.classList.add('border-slate-300');
        eye2.style.position = 'relative';
        eye2.style.bottom = '0px';
    } else {
        if (inputPassword.value.length < 12) {
            inputPassword.classList.remove('border-slate-300');
            inputPassword.classList.remove('border-green-600');
            inputPassword.classList.add('border-red-600');
            infoInputPassword.innerHTML = "Password Minimal 12 Karacter";
            infoInputPassword.style.color = 'red';
            infoInputPassword.style.display = 'initial';
            eye2.style.position = 'relative';
            eye2.style.bottom = '-25px';
        }else {
            inputPassword.classList.remove('border-slate-300');
            inputPassword.classList.remove('border-red-600');
            inputPassword.classList.add('border-green-600');
            infoInputPassword.style.display = 'none';
            eye2.style.position = 'relative';
            eye2.style.bottom = '0px';
        }
    }
}

function handleInputConfirmPassword(event) {
    const inputConfirmPassword = event.target;
    const infoInputConfirmPassword = document.querySelector('.info-input-confirm-password');
    const inputPassword = document.querySelector('.input-password')

    if (inputConfirmPassword.value === "") {
        inputConfirmPassword.classList.remove('border-red-600');
        inputConfirmPassword.classList.remove('border-green-600');
        infoInputConfirmPassword.style.display = 'none';
        inputConfirmPassword.classList.add('border-slate-300');
    } else {
        if (inputConfirmPassword.value === inputPassword.value) {
            inputConfirmPassword.classList.remove('border-slate-300');
            inputConfirmPassword.classList.remove('border-red-600');
            inputConfirmPassword.classList.add('border-green-600');
            infoInputConfirmPassword.style.display = 'none';
        }else {
            inputConfirmPassword.classList.remove('border-slate-300');
            inputConfirmPassword.classList.remove('border-green-600');
            inputConfirmPassword.classList.add('border-red-600');
            infoInputConfirmPassword.innerHTML = "Password Harus Sama";
            infoInputConfirmPassword.style.color = 'red';
            infoInputConfirmPassword.style.display = 'initial';
        }
    }
}

if(document.getElementById("forgotPassword-page")) {
    const inputEmail = document.querySelector('.input-email');
    inputEmail.addEventListener('keyup', handleInputEmail);
}else if(document.getElementById("signIn-page")) {
    const inputText = document.querySelector('.input-text');
    const inputEmail = document.querySelector('.input-email');
    const inputPassword = document.querySelector('.input-password');
    inputEmail.addEventListener('keyup', handleInputEmail);
    inputText.addEventListener('keyup', handleInputText);
    inputPassword.addEventListener('keyup', handleInputPassword);
}else if(document.getElementById("signUp-page")) {
    const inputText = document.querySelector('.input-text');
    const inputEmail = document.querySelector('.input-email');
    const inputPassword = document.querySelector('.input-password');
    const inputConfirmPassword = document.querySelector('.input-confirm-password');
    inputText.addEventListener('keyup', handleInputText);
    inputEmail.addEventListener('keyup', handleInputEmail);
    inputPassword.addEventListener('keyup', handleInputPassword);
    inputConfirmPassword.addEventListener('keyup', handleInputConfirmPassword);
}
