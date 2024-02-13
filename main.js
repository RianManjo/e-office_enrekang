const input = document.querySelector('.pwd input');
const eye = document.querySelector('.pwd i');

eye.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text';
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash');
  } else {
    input.type = 'password';
    eye.classList.add('fa-eye-slash');
    eye.classList.remove('fa-eye');
  }
});