const button = document.querySelector('#button');

function converter() {
  let input = parseFloat(document.querySelector('#input').value);
  let result = document.querySelector('#result');
  let startEnhet = document.querySelector('#startEnhet').value;
  let sluttEnhet = document.querySelector('#sluttEnhet').value;
  let convertedNumber = 0;

  if (Number.isNaN(input)) {
    result.textContent = 'Ikke skrevet inn noe tall';
    result.style.color = 'red';
    return;
  }

  if (startEnhet === sluttEnhet) {
    result.textContent = 'Velg to ulike måleenheter';
    result.style.color = 'red';
    return;
  }
}

button.addEventListener('click', function (event) {
  event.preventDefault();
  converter();
});
