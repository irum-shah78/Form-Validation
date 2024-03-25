const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('contact-name').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #2e8b57;"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('contact-phone');

  if (phone.length === 0) {
    phoneError.innerHTML = 'Phone Number is required.';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone Number should be 11 digits.';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Please enter only digits.';
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #2e8b57;"></i>';
  return true;
}
