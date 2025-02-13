const heading = document.querySelector('.main-heading');
const button = document.querySelector('.click-btn');

button.addEventListener('click', function () {
  console.log('Button clicked');
  heading.textContent = 'Livebench platform is now online';
});
