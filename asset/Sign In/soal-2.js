const btnSignIn = document.querySelector('.btn-form-signin');

btnSignIn.addEventListener('click', function(){
    const textSignin = document.querySelector('.input-text-Signin').value
    const emailSignin = document.querySelector('.input-email-Signin').value
    const passwordSignin = document.querySelector('.input-password-Signin').value
    console.log(textSignin);
    console.log(emailSignin);
    console.log(passwordSignin);
});