document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os Ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Carrossel de Imagens de Fundo do Hero (Superposição contínua)
const heroBgs = document.querySelectorAll('.hero-bg');
if (heroBgs.length > 0) {
    let currentBgIndex = 0;
    const intervalTime = 4000; // Tempo em ms entre as trocas

    setInterval(() => {
        const previousBg = heroBgs[currentBgIndex];

        // 1. Limpa a marcação de imagem anterior de todas
        heroBgs.forEach(bg => bg.classList.remove('last-active'));

        // 2. A imagem que estava ativa vai para o fundo (mantém 100% visível)
        previousBg.classList.remove('active');
        previousBg.classList.add('last-active');

        // 3. Avança o índice para a próxima imagem
        currentBgIndex = (currentBgIndex + 1) % heroBgs.length;

        // 4. A nova imagem aparece por cima com o efeito fade suave
        heroBgs[currentBgIndex].classList.add('active');
    }, intervalTime);
}

    // Controle do Menu Mobile Overlay
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function openMenu() {
        if (navMenu) {
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede rolagem no fundo ao abrir menu
        }
    }

    function closeMenu() {
        if (navMenu) {
            navMenu.classList.remove('active');
            document.body.style.overflow = ''; // Restaura rolagem
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Fecha o menu ao clicar em qualquer item
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Animação de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});