document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu inscripción! Recibirás un correo de confirmación pronto.');
});

const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.querySelector('label').style.color = '#667eea';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.querySelector('label').style.color = '#333';
        }
    });
});