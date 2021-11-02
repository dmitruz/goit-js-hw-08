
import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const data = { email: '', message: ''};
setValuesElemForm();

form.addEventListener('input', evt => {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify({...data, [evt.target.name]: evt.target.value }),
);
});

form.addEventListener('submit', evt => {
  evt.preventDefault()
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
});

function setValuesElemForm() {
  const dataFromLs = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  if (dataFromLs) {
    data.email = dataFromLs.email;
    data.message = dataFromLs.message;
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  } 
}
