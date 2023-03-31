const inputEmail = document.querySelector('.input-email');

inputEmail.addEventListener('keyup', (event) => {
    if(event.target.value === "") {
        event.target.classList.add('border-red-600')
    }else {
        if(!event.target.value.includes('@')) {
            event.target.classList.remove()
        }else {
            event.target.classList.remove()
        }
    }
})