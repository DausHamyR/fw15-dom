const btnForm = document.querySelector('.btn-form');
const pesanInput = document.querySelector('.pesan-input');

if (document.getElementById("signUp-page")) {
    btnForm.addEventListener('click', function () {
        const textSignin = document.querySelector('.input-text').value
        const emailSignin = document.querySelector('.input-email').value
        const passwordSignin = document.querySelector('.input-password').value
        const passwordSignin2 = document.querySelector('.input-confirm-password').value
        console.log(textSignin);
        console.log(emailSignin);
        console.log(passwordSignin);
        console.log(passwordSignin2);
    });
}else if(document.getElementById("signIn-page")) {
    btnForm.addEventListener('click', function () {
        const textSignin = document.querySelector('.input-text').value
        const emailSignin = document.querySelector('.input-email').value
        const passwordSignin = document.querySelector('.input-password').value
        console.log(textSignin);
        console.log(emailSignin);
        console.log(passwordSignin);
    });
}else if(document.getElementById("forgotPassword-page")) {
    btnForm.addEventListener('click', function () {
        const emailSignin = document.querySelector('.input-email').value
        console.log(emailSignin);
    });
}