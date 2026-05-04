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

function mostrarCategoria(btn, categoria) {
    // 1. GERENCIAR OS BOTÕES (Troca a cor)
    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. GERENCIAR AS SEÇÕES (Mostra/Esconde)
    const secoes = document.querySelectorAll('.secao-produtos');
    
    secoes.forEach(secao => {
        // Se clicar em 'todos', mostra todas as seções
        if (categoria === 'todos') {
            secao.style.display = 'block';
        } else {
            // Se o ID da seção contiver a palavra da categoria (ex: secao-lanches contém 'lanches')
            if (secao.id === 'secao-' + categoria) {
                secao.style.display = 'block';
                secao.scrollIntoView({ behavior: 'smooth' });
            } else {
                secao.style.display = 'none';
            }
        }
    });
}