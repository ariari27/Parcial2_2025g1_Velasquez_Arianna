const formulario = document.getElementById('contactForm');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log('Datos enviados:', { nombre, email, mensaje });

    formulario.reset();
});