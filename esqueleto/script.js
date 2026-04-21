// --- LÓGICA DO MODO ESCURO ---
const botaoTema = document.getElementById('botao-tema');
botaoTema.addEventListener('change', () => {
    document.body.classList.toggle('tema-escuro');
});

// --- LÓGICA DO CARROSSEL (DESLIZE MANUAL) ---
const trilho = document.querySelector('.trilho');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

// Define quanto cada clique vai deslizar (em pixels)
// Uma boa medida é a largura de um card + o gap (ex: 90px + 15px = 105px)
const scrollAmount = 105; 

if (trilho && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        // Desliza para a direita
        trilho.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener('click', () => {
        // Desliza para a esquerda
        trilho.scrollLeft -= scrollAmount;
    });

    // Opcional: Atualizar bolinhas baseadas no quanto foi deslizado
    trilho.addEventListener('scroll', () => {
        const indexAtivo = Math.round(trilho.scrollLeft / (trilho.scrollWidth / dots.length));
        dots.forEach((dot, index) => {
            if (index === indexAtivo) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}
function scrollTrilho(direcao) {
    const trilho = document.getElementById('trilho');
    // Largura da imagem (85px) + Espaçamento (15px) = 100px por item
    const scrollValue = 100 * 3; // Move 3 pratos por clique
    
    trilho.scrollBy({
        left: direcao * scrollValue,
        behavior: 'smooth'
    });
}