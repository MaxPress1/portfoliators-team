function validateForm() {
  const emailInput = contactForm.elements['user-email'];
  const messageInput = contactForm.elements['user-comment'];
  let isValid = true;

  const trimmedEmail = emailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log('Validating email...');
  if (!emailPattern.test(trimmedEmail)) {
    console.log('Email is invalid');
    emailInput.classList.add('input-error');
    isValid = false;
  } else {
    emailInput.classList.remove('input-error');
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('input-error');
    isValid = false;
  } else {
    messageInput.classList.remove('input-error');
  }

  return isValid;
}

const contactForm = document.getElementById('contactForm');
const interestModal = document.getElementById('interestModal');
const closeModal = document.getElementById('closeModal');

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let scrollY = 0;

function disableScroll() {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
}

function enableScroll() {
  document.documentElement.style.scrollBehavior = 'auto';

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);

  setTimeout(() => {
    document.documentElement.style.scrollBehavior = '';
  }, 0);
}

function showModal() {
  interestModal.classList.remove('hidden');
  disableScroll();
}

function hideModal() {
  interestModal.classList.add('hidden');
  enableScroll();
}

contactForm.elements['user-email'].addEventListener('blur', function () {
  if (this.value.trim() !== '') {
    validateForm();
  } else {
    this.classList.remove('input-error');
  }
});

contactForm.elements['user-comment'].addEventListener('blur', function () {
  if (this.value.trim() !== '') {
    validateForm();
  } else {
    this.classList.remove('input-error');
  }
});

contactForm.elements['user-email'].addEventListener('input', function () {
  this.classList.remove('input-error');
});

contactForm.elements['user-comment'].addEventListener('input', function () {
  this.classList.remove('input-error');
});

// Відправка форми
contactForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const isFormValid = validateForm();
  if (!isFormValid) {
    return;
  }

  const email = contactForm.elements['user-email'].value.trim();
  const message = contactForm.elements['user-comment'].value.trim();

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, comment: message }),
      }
    );

    if (response.status === 201) {
      showModal();
      contactForm.reset();
    } else {
      const errorData = await response.json();
      console.log('Помилка з сервера:', errorData);
      alert(
        'Oops! Something went wrong. Please check your input and try again.'
      );
    }
  } catch (error) {
    iziToast.error({
      message: 'Network error! Please try again later.',
      position: 'topRight',
      timeout: 3000,
      close: true,
      drag: false,
      displayMode: 1,
    });
    console.error(error);
  }
});

// Закриття по кнопці
closeModal.addEventListener('click', hideModal);

// Закриття по Esc
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !interestModal.classList.contains('hidden')) {
    hideModal();
  }
});

// Закриття по кліку на фон
interestModal.addEventListener('click', function (event) {
  if (event.target === interestModal) {
    hideModal();
  }
});
