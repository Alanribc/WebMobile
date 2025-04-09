// Botão mostrar mais
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


// Botão tema dark
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// Botão voltar ao topo
const botaoTopo = document.getElementById("botaoTopo");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
