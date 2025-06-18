document.addEventListener("DOMContentLoaded", function () {
    // --- ABRIR MODAL AO CLICAR NO LINK DE INGRESSO ---
    const topbar = document.querySelector('.top-bar');
    if (topbar) {
        topbar.addEventListener('click', function (event) {
            event.preventDefault();
            const modal = document.getElementById('modal-compra');
            modal.classList.add('show');
        });
    }

    // --- MODAL DE COMPRA NORMAL ---
    const buttonsCompra = document.querySelectorAll('.comprar-ingresso');
    const homeSection = document.querySelector('.home');
    const modal = document.getElementById('modal-compra');
    const closeModal = document.getElementById('close-modal');

    function abrirModal() {
        modal.classList.add('show');
    }

    function fecharModal() {
        modal.classList.remove('show');
    }

    homeSection.addEventListener('click', function (event) {
        if (event.target === homeSection || event.target.tagName === 'IMG' || event.target.tagName === 'H1' || event.target.tagName === 'P') {
            abrirModal();
        }
    });

    buttonsCompra.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            abrirModal();
        });
    });

    closeModal.addEventListener('click', function (event) {
        event.stopPropagation();
        fecharModal();
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            fecharModal();
        }
    });

    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
        }
    });
});

// --- CARROSSEL ---
const carousel = document.getElementById('carousel');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

function moveCarousel(direction) {
    carousel.scrollBy({
        left: direction * 300,
        behavior: 'smooth',
    });
}

btnNext.addEventListener('click', () => {
    moveCarousel(1);
});

btnPrev.addEventListener('click', () => {
    moveCarousel(-1);
});


// --- FAQS ABRIR E FECHAR RESPOSTAS ---
document.querySelectorAll('.faq-item .question').forEach(function(item) {
    item.addEventListener('click', function() {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});