document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');

  // Функція для перемикання меню
  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  // Відкривання/закривання меню при кліку на бургер-кнопку
  burgerMenu.addEventListener('click', toggleMenu);

  // Закриваємо меню при кліку на будь-яке посилання в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active'); // Закриваємо меню
      burgerMenu.classList.remove('active'); // Прибираємо активний стан кнопки
    });
  });
});
