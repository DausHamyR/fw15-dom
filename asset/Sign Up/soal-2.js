const btnSignUp = document.querySelector('.btn-form');

const eventBtnSignUp = btnSignUp.addEventListener('click', function(){
    const text = document.querySelector('.input-text').value
    const email = document.querySelector('.input-email').value
    const password = document.querySelector('.input-password').value
    const confirmPassword = document.querySelector('.input-password2').value
    console.log(text);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
});
