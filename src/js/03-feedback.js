import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const loadFormState = () => {
  const formState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = formState.email || '';
  messageInput.value = formState.message || '';
};

const clearFormState = () => {
  const formState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form data cleared:', formState);
};

emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

document.addEventListener('DOMContentLoaded', loadFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  clearFormState();
});
