/* ================================================
   SOY+ Food Ingredients - JavaScript
   ================================================ */

// === Menú mobile ===
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Cerrar menú al clickear un link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// === Formulario de contacto ===
// IMPORTANTE: Para que funcione el envío de mails es necesario crear una cuenta en
// Formspree (https://formspree.io) y reemplazar 'YOUR_FORM_ID' en el atributo action
// del formulario con el ID que provee Formspree.
// Alternativa gratuita: Web3Forms (https://web3forms.com)

const form = document.querySelector('.form');
const formStatus = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Enviando...';
    formStatus.className = 'form-status';

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        formStatus.textContent = '¡Mensaje enviado! Te contactaremos pronto.';
        formStatus.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (err) {
      formStatus.textContent = 'Hubo un problema. Probá nuevamente o escribinos directamente a ventas@alimentostexturizados.com';
      formStatus.className = 'form-status error';
    }
  });
}

// === Marcar link activo según la página ===
const currentPath = window.location.pathname;
document.querySelectorAll('.nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href !== '#' && currentPath.includes(href.replace(/^\//, '').replace(/^\.\//, ''))) {
    link.classList.add('active');
  }
});
