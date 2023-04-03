const btnForm = document.querySelector('.btn-form');
const pesanInput = document.querySelector('.pesan-input');
const eye1 = document.getElementById('eye-1');
const eye2 = document.getElementById('eye-2');
const inputPassword = document.querySelector('.input-password');
const inputConfirmPassword = document.querySelector('.input-confirm-password');

if (document.getElementById("signUp-page")) {
    btnForm.addEventListener('click', function () {
        document.querySelector('.input-text').value = ""
        document.querySelector('.input-email').value = ""
        document.querySelector('.input-password').value = ""
        document.querySelector('.input-confirm-password').value = ""
    });
    eye1.addEventListener('click', function () {
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            eye1.innerHTML = '<i data-feather="eye-off"></i>';
            eye1.style.position = 'relative';
            eye1.style.bottom = '-270px';
            eye1.style.left = '270px';
            eye1.style.zIndex = '1';
        } else {
            inputPassword.type = "password";
            eye1.innerHTML = '<i data-feather="eye"></i>';
        }
        feather.replace();
    });
    eye2.addEventListener('click', function () {
        if (inputConfirmPassword.type === "password") {
            inputConfirmPassword.type = "text";
            eye2.innerHTML = '<i data-feather="eye-off"></i>';
            eye2.style.position = 'relative';
            eye2.style.bottom = '-330px';
            eye2.style.left = '243px';
            eye2.style.zIndex = '1';
        } else {
            inputConfirmPassword.type = "password";
            eye2.innerHTML = '<i data-feather="eye"></i>';
        }
        feather.replace();
    });
}else if(document.getElementById("signIn-page")) {
    btnForm.addEventListener('click', function () {
        document.querySelector('.input-text').value = ""
        document.querySelector('.input-email').value = ""
        document.querySelector('.input-password').value = ""
    });
    eye1.addEventListener('click', function () {
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            eye1.innerHTML = '<i data-feather="eye-off"></i>';
            eye1.style.position = 'relative';
            eye1.style.bottom = '-270px';
            eye1.style.left = '270px';
            eye1.style.zIndex = '1';
        } else {
            inputPassword.type = "password";
            eye1.innerHTML = '<i data-feather="eye"></i>';
        }
        feather.replace();
    });
}else if(document.getElementById("forgotPassword-page")) {
    btnForm.addEventListener('click', function () {
        document.querySelector('.input-email').value = ""
    });
}


