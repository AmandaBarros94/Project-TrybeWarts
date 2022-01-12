const buttonHeader = document.getElementById('button-submit-login');
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-pass-header');

function validate() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonHeader.addEventListener('click', validate);

const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

function validateForm() {
  if (agreement.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

agreement.addEventListener('click', validateForm);
