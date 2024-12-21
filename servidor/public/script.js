  // Mostrar el modal de registro
  document.getElementById('registerBtn').onclick = function() {
    document.body.classList.add('blur'); // Aplica el desenfoque al cuerpo
    document.getElementById('registerModal').style.display = 'flex';
    hideSlideshow(); // Oculta la presentación de diapositivas
}

// Mostrar el modal de inicio de sesión
document.getElementById('loginBtn').onclick = function() {
    document.body.classList.add('blur'); // Aplica el desenfoque al cuerpo
    document.getElementById('loginModal').style.display = 'flex';
    hideSlideshow(); // Oculta la presentación de diapositivas
}

// Cerrar el modal de registro
document.getElementById('closeRegister').onclick = function() {
    document.body.classList.remove('blur'); // Remueve el desenfoque al cerrar
    document.getElementById('registerModal').style.display = 'none';
    showSlideshow(); // Muestra nuevamente la presentación de diapositivas
}
document.getElementById('cancelRegister').onclick = function() {
    document.body.classList.remove('blur'); // Remueve el desenfoque al cerrar
    document.getElementById('registerModal').style.display = 'none';
    showSlideshow(); // Muestra nuevamente la presentación de diapositivas
}

// Cerrar el modal de inicio de sesión
document.getElementById('closeLogin').onclick = function() {
    document.body.classList.remove('blur'); // Remueve el desenfoque al cerrar
    document.getElementById('loginModal').style.display = 'none';
    showSlideshow(); // Muestra nuevamente la presentación de diapositivas
}
document.getElementById('cancelLogin').onclick = function() {
    document.body.classList.remove('blur'); // Remueve el desenfoque al cerrar
    document.getElementById('loginModal').style.display = 'none';
    showSlideshow(); // Muestra nuevamente la presentación de diapositivas
}

// Función para ocultar la presentación de diapositivas
function hideSlideshow() {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => {
        slide.classList.add('hidden'); // Oculta las diapositivas
    });
}

// Función para mostrar la presentación de diapositivas
function showSlideshow() {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => {
        slide.classList.remove('hidden'); // Muestra las diapositivas
    });
}

// Mostrar/ocultar el menú
document.getElementById('menuToggle').onclick = function() {
    const menu = document.querySelector('.menudearriba');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Muestra el menú
    } else {
        menu.style.display = 'none'; // Oculta el menú
    }
}
// Validación de coincidencia de contraseñas
function validarFormulario(e) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      e.preventDefault();
  }
}

// Mostrar modal de registro
function mostrarRegistro() {
  document.getElementById('registerModal').style.display = 'block';
}

// Cerrar modal de registro
function cerrarRegistro() {
  document.getElementById('registerModal').style.display = 'none';
}

// Mostrar modal de inicio de sesión
function mostrarLogin() {
  document.getElementById('loginModal').style.display = 'block';
}

// Cerrar modal de inicio de sesión
function cerrarLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registerSubmit').addEventListener('click', validarFormulario);
  document.getElementById('registerBtn').addEventListener('click', mostrarRegistro);
  document.getElementById('closeRegister').addEventListener('click', cerrarRegistro);
  document.getElementById('cancelRegister').addEventListener('click', cerrarRegistro);
  document.getElementById('loginBtn').addEventListener('click', mostrarLogin);
  document.getElementById('closeLogin').addEventListener('click', cerrarLogin);
  document.getElementById('cancelLogin').addEventListener('click', cerrarLogin);
});