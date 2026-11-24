// Alternância entre os modos, usando a classe definida no CSS.
const themeButton = document.querySelector('#theme-button');
const themeLabel = document.querySelector('#theme-label');
themeButton.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark-mode');
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Ativar modo diurno' : 'Ativar modo noturno');
  themeLabel.textContent = dark ? 'Modo diurno' : 'Modo noturno';
});

// O formulário é apenas demonstrativo e não envia informações.
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-feedback').textContent = 'Formulário de demonstração: nenhuma mensagem foi enviada.';
});
