
// Observador para carregar mais conteúdo quando o usuário rola até o final da página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMoreContent();
        }
    });
}, { threshold: 1.0 });

// Elemento de "ponto de referência" para ativar o carregamento
const sentinel = document.createElement('div');
sentinel.classList.add('sentinel');
document.body.appendChild(sentinel);
observer.observe(sentinel);

// Função para descer a página até o conteúdo clicado
function scrollToSection(sectionID) {
    const section = document.getElementById(sectionID);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Eventos de clique para rolar até a seção correspondente
document.querySelector('.home').addEventListener('click', () => scrollToSection('home'));
document.querySelector('.name').addEventListener('click', () => scrollToSection('home'));
document.querySelector('.about-me').addEventListener('click', () => scrollToSection('about-me'));
document.querySelector('.expertise').addEventListener('click', () => scrollToSection('about-me'));
document.querySelector('.experience').addEventListener('click', () => scrollToSection('expertise'));
document.querySelector('.education').addEventListener('click', () => scrollToSection('experience'));
document.querySelector('.projects').addEventListener('click', () => scrollToSection('education'));
document.querySelector('.contact').addEventListener('click', () => scrollToSection('contact'));
