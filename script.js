// Simulación del envío del formulario
const form = document.getElementById('formContacto');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !mensaje) {
    resultado.textContent = '❌ Por favor completa todos los campos.';
    resultado.style.color = 'red';
    return;
  }

  // Simular envío exitoso
  resultado.textContent = `✅ ¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`;
  resultado.style.color = 'green';

  // Limpiar campos
  form.reset();
});
