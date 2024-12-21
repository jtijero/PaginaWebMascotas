#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);

print header('text/html; charset=UTF-8');
print start_html(-title => 'Acceder', -style => { -src => 'styles.css' });

# Contenido HTML
print <<'END_HTML';
<div class="container">
    <h1>Bienvenido</h1>
    <button id="openRegister">Registrarse</button>
    <button id="openLogin">Iniciar Sesión</button>
</div>

<div class="modal" id="registerModal">
    <div class="modal-content">
        <span class="close" id="closeRegister">&times;</span>
        <h2>Registro de Usuario</h2>
        <form action="cgi-bin/registro.cgi" method="post">
            <label for="username">Nombre de Usuario:</label><br>
            <input type="text" id="username" name="username" required><br><br>
            <label for="email">Correo Electrónico:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Contraseña:</label><br>
            <input type="password" id="password" name="password" required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"><br><br>
            <label for="confirm_password">Confirmar Contraseña:</label><br>
            <input type="password" id="confirm_password" name="confirm_password" required><br><br>
            <label for="role">Rol:</label><br>
            <select id="role" name="role" required>
                <option value="duenio">Dueño</option>
                <option value="personal">Personal</option>
                <option value="admin">Admin</option>
            </select><br><br>
            <button type="submit" id="registerSubmit">Registrarse</button>
            <button type="button" id="cancelRegister">Cancelar</button>
        </form>
    </div>
</div>

<div class="modal" id="loginModal">
    <div class="modal-content">
        <span class="close" id="closeLogin">&times;</span>
        <h2>Iniciar Sesión</h2>
        <label for="loginUser ">Usuario:</label><br>
        <input type="text" id="loginUser " name="loginUser "><br><br>
        <label for="loginPassword">Contraseña:</label><br>
        <input type="password" id="loginPassword" name="loginPassword"><br><br>
        <button class="button" id="loginSubmit">Iniciar Sesión</button>
        <button class="button" id="cancelLogin">Cancelar</button>
    </div>
</div>

<script>
    // Script para abrir y cerrar los modales
    document.getElementById('openRegister').onclick = function() {
        document.getElementById('registerModal').style.display = 'block';
    }
    document.getElementById('openLogin').onclick = function() {
        document.getElementById('loginModal').style.display = 'block';
    }
    document.getElementById('closeRegister').onclick = function() {
        document.getElementById('registerModal').style.display = 'none';
    }
    document.getElementById('closeLogin').onclick = function() {
        document.getElementById('loginModal').style.display = 'none';
    }
    document.getElementById('cancelRegister').onclick = function() {
        document.getElementById('registerModal').style.display = 'none';
    }
    document.getElementById('cancelLogin').onclick = function() {
        document.getElementById('loginModal').style.display = 'none';
    }
</script>
END_HTML

print end_html;