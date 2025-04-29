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

// Відправка форми
contactForm.addEventListener('submit', async function (event) {
  event.preventDefault();

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
        body: JSON.stringify({ email: email }),
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
