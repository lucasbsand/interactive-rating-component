const form = document.querySelector('form');
const containers = document.querySelectorAll('.container');
const span = document.querySelector('span');

function handleSubmit(e) {
  e.preventDefault();

  const rateValue = form.rating.value;

  setTimeout(() => {
    containers[0].style.display = 'none';
    containers[1].style.display = 'flex';

    console.log(rateValue);
    span.innerText = rateValue;
  }, 2000);
}

form.addEventListener('submit', handleSubmit);
