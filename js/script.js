// Validar login
document.getElementById("formLogin")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        alert(`Bienvenido, ${usuario.nombre}!`);
        // Aquí podrías redirigir a una página principal
        window.location.href = "bienvenido.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});

// Botón para ir al registro
document.getElementById("btnRegistro")?.addEventListener("click", () => {
    window.location.href = "registro.html";
});
