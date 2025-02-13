const heading = document.querySelector('.main-heading');
const button = document.querySelector('.click-btn');

button.addEventListener('click', function () {
  console.log('Button clicked');
  heading.textContent = 'Livebench UI is now online';
});

button.addEventListener('mouseover', function () {
  console.log('Button hovered');
});
