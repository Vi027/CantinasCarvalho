// 1. Seleciona o checkbox do botão de tema
const botaoTema = document.getElementById('botao-tema');

// 2. Adiciona um evento de escuta para quando o estado mudar (clicar)
botaoTema.addEventListener('change', () => {
    // 3. Adiciona ou remove a classe "tema-escuro" do corpo da página
    document.body.classList.toggle('tema-escuro');
    
    // Opcional: Salva a preferência do usuário no navegador
    const isDarkMode = document.body.classList.contains('tema-escuro');
    localStorage.setItem('dark-mode', isDarkMode);
});

// 4. Ao carregar a página, verifica se o usuário já tinha deixado no modo escuro antes
window.addEventListener('load', () => {
    const darkModeSalvo = localStorage.getItem('dark-mode');
    
    if (darkModeSalvo === 'true') {
        document.body.classList.add('tema-escuro');
        botaoTema.checked = true; // Mantém o botão na posição correta
    }
});