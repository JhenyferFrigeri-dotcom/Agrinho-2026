// Trajetória direta dos alimentos
const caminhos = {
    "Arroz": "Caminho do Arroz: Sai da fazenda sustentável onde foi colhido -> Vai para a fábrica para ser limpo e empacotado -> É levado para o mercado -> Chega na cozinha da sua casa.",
    "Milho": "Caminho do Milho: É plantado com adubo natural na fazenda -> Vai para a fábrica para virar milho em lata -> É distribuído para os mercados -> Chega na sua mesa.",
    "Chocolate": "Caminho do Chocolate: O cacau é colhido nas árvores da floresta -> Vai para a fábrica para ser transformado em barra -> Vai para as prateleiras do mercado -> Chega até você."
};

// Configura o clique nos botões para exibir a resposta na tela
document.querySelectorAll(".botao-ver").forEach(function(botao) {
    botao.addEventListener("click", function(clique) {
        let produto = clique.target.getAttribute("data-nome");
        
        document.getElementById("bloco-resposta").classList.remove("escondido");
        document.getElementById("titulo-resposta").innerText = "Trajetória do " + produto;
        document.getElementById("texto-resposta").innerText = caminhos[produto];
    });
});

// Ativa o Modo Escuro
document.getElementById("botao-escuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
});
