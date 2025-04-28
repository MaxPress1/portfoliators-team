const contactForm = document.getElementById('contactForm');
const interestModal = document.getElementById('interestModal');
const closeModal = document.getElementById('closeModal');
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    console.log(response);

    if (response.status === 201) {
      interestModal.classList.remove('hidden');
      contactForm.reset();
    } else {
      const errorData = await response.json(); // розпарсюю відповідь..

      console.log('Помилка з сервера:', errorData);
      alert(
        'Oops! Something went wrong. Please check your input and try again.'
      );
    }
  } catch (error) {
    // alert('Network error! Please try again later.');
    iziToast.error({
      message: 'Network error! Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  }
});

closeModal.addEventListener('click', function () {
  interestModal.classList.add('hidden');
});
