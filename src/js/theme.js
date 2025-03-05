// document.addEventListener('DOMContentLoaded', function () {
//   const themeToggle = document.getElementById('theme-toggle');
//   const themeIcon = document.getElementById('theme-icon');
//   const body = document.body;

//   // Перевіряємо збережену тему в localStorage
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'light') {
//     body.classList.add('light-theme');
//     themeIcon.textContent = '🌞'; // Іконка сонця
//   } else {
//     themeIcon.textContent = '🌙'; // Іконка місяця
//   }

//   // Додаємо обробник подій для кнопки
//   themeToggle.addEventListener('click', function () {
//     body.classList.toggle('light-theme');

//     // Перевіряємо, яка тема активна, та зберігаємо її в localStorage
//     if (body.classList.contains('light-theme')) {
//       localStorage.setItem('theme', 'light');
//       themeIcon.textContent = '🌞'; // Змінюємо іконку
//     } else {
//       localStorage.setItem('theme', 'dark');
//       themeIcon.textContent = '🌙';
//     }
//   });
// });
