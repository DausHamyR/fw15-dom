const btnSignUp = document.querySelector('.btn-form');

btnSignUp.addEventListener('click', function(){
    const text = document.querySelector('.input-text').value;
    const email = document.querySelector('.input-email').value;
    const password = document.querySelector('.input-password').value;
    const confirmPassword = document.querySelector('.input-password2').value;
    const pesanInput = document.querySelector('.pesan-input');
    
    if(text === 'admin' && email === '123456') {
        pesanInput.innerHTML = 'berhasil login';
        text = '';
        pesanInput.style.color = 'green';
    }else {
        pesanInput.innerHTML = 'Mohon isi Name dan Email dengan benar';
        pesanInput.style.color = 'red';
    }
})