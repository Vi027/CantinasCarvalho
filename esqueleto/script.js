// --- 1. LÓGICA DO MODO ESCURO ---
const checkbox = document.getElementById('botao-tema');

if (checkbox) {
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('tema-escuro');
    });
}

// --- 2. LÓGICA DO CARROSSEL ---
const trilho = document.getElementById('trilho'); // Usando ID para ser mais preciso
const dots = document.querySelectorAll('.dot');

// Função para os botões de seta (Ajustada para mover suavemente)
function scrollTrilho(direcao) {
    if (trilho) {
        // 100px é a largura média de um item + gap
        const scrollValue = 100 * 3; 
        trilho.scrollBy({
            left: direcao * scrollValue,
            behavior: 'smooth'
        });
    }
}

// --- 3. LÓGICA DAS BOLINHAS (DOTS) ---
if (trilho && dots.length > 0) {
    trilho.addEventListener('scroll', () => {
        // Calcula qual "página" está visível
        // Dividimos a posição atual pela largura total rolável dividida pelo número de bolinhas
        const larguraVisivel = trilho.offsetWidth;
        const indexAtivo = Math.round(trilho.scrollLeft / larguraVisivel);

        dots.forEach((dot, index) => {
            if (index === indexAtivo) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}