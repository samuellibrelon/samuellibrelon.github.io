// script.js
// Função para carregar mais conteúdo ao rolar
const loadMoreContent = () => {
    const newSection = document.createElement('section');
    newSection.classList.add('container', 'my-5');
    newSection.innerHTML = `
        <h2>Mais Conteúdo</h2>
        <p>Conteúdo que foi carregado ao rolar...</p>
    `;
    document.body.appendChild(newSection);
};

/*window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreContent();
    }
});*/
