
import throttle from 'lodash.throttle';
const fbForm = document.querySelector('.feedback-form');
fbForm.addEventListener('input', throttle(handlerForm, 500));
fbForm.addEventListener('submit', handlerSubmit);

let formData
try {formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
  } catch (error) {
   console.log(error.message);
}
const { email, message } = fbForm.elements;
  email.value = formData.email ?? "";
  message.value = formData.message ?? "";


function handlerForm(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}
function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  fbForm.reset();
  localStorage.removeItem('feedback-form-state');
}