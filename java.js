
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;


themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');

 
  if (body.classList.contains('light-mode')) {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  } else {
    themeToggleBtn.textContent = '☀️ Modo Claro';
  }
});