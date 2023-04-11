// Importowanie bibliotek
import throttle from 'lodash.throttle';

// Pobieranie elementów formularza
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funkcja zapisująca dane z formularza do local storage
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Funkcja wczytująca dane z local storage i wypełniająca pola formularza
const loadFormState = () => {
  const formState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = formState.email || '';
  messageInput.value = formState.message || '';
};

// Funkcja czyszcząca local storage i pola formularza po wysłaniu formularza
const clearFormState = () => {
  const formState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form data cleared:', formState);
};

// Śledzenie zdarzenia input na polach formularza i zapisywanie stanu do local storage
emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

// Wczytywanie danych z local storage przy załadowaniu strony
document.addEventListener('DOMContentLoaded', loadFormState);

// Czyszczenie danych po wysłaniu formularza
form.addEventListener('submit', event => {
  event.preventDefault();
  clearFormState();
});
