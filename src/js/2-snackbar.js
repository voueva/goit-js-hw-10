
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value, 10);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(ms => {
        iziToast.success({
          title: 'OK',
          message: `Fulfilled promise in ${ms}ms`,
          position: 'topRight',
          backgroundColor: '#59A10D',
          titleColor: '#B5EA7C',
          messageColor: '#B5EA7C',
        });
      })
      .catch(ms => {
        iziToast.error({
          title: 'Error',
          message: `Rejected promise in ${ms}ms`,
          position: 'topRight',
          backgroundColor: '#EF4040',
          titleColor: '#FFBEBE',
          messageColor: '#FFBEBE',
        });
      });
  });
});
