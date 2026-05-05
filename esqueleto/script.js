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

// Pega o botão pelo ID
const btnSubir = document.getElementById("btnSubir");

// Quando o usuário rolar a página 300px para baixo, mostra o botão
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Função que faz o scroll suave para o topo
function subirTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz o efeito de subir deslizando
    });
}

function abrirPeloBanner(categoria) {
    // 1. Procura o botão de filtro que contém o texto ou o evento da categoria
    // Isso garante que o botão de Almoço lá embaixo também fique com a cor ativa
    const botaoFiltroReal = document.querySelector(`button[onclick*="'${categoria}'"]`);

    if (botaoFiltroReal) {
        // 2. Chama a sua função principal de mostrar categoria
        // Isso vai disparar o scroll, a mudança de cor e o posicionamento
        mostrarCategoria(botaoFiltroReal, categoria);
    } else {
        // Caso o botão não seja encontrado, apenas faz o scroll até a seção
        const secao = document.getElementById('secao-' + categoria);
        if (secao) {
            secao.scrollIntoView({ behavior: 'smooth' });
        }
    }
}