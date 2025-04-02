document.querySelectorAll('.mostrar-mais').forEach(button => {
    button.addEventListener('click', function() {
        const list = button.previousElementSibling;

        list.classList.toggle('hidden');

        if (list.classList.contains('hidden')) {
            button.textContent = 'Mostrar mais';
        } else {
            button.textContent = 'Mostrar menos';
        }
    });
});