const ham = document.getElementById('ham');
const navSub = document.getElementById('nav-sub');

ham.addEventListener('click', () => {
  navSub.classList.toggle('active');
  if (ham.classList.toggle('active')) {
    ham.innerHTML = '&times;'; // cross symbol
  } else {
    ham.innerHTML = '&#9776;'; // hamburger icon
  }
});
