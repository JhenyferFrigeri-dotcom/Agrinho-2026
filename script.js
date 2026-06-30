
const caminhos = {
    "Arroz": "Caminho do Arroz: O arroz deve ser plantado entre setembro e outubro so podendo ser colhido no ano seguinte. Apos isso o arrozinteoz passa por processos de beneficiamento, como encharcamento, polimento e autoclave, para garantir a qualidade e o valor nutricional. E depois o arroz é embalado e levado ate o supermercado onde as pessoas compram e consumem algo que inicialmente precisou do agro.",
    "Milho": "Caminho do Milho: O milho deve ser plantado entre setembro e novembro so podendo ser colhido de quatro a seis meses depois. Apos isso o milho passa por processos de beneficiamento, como debulha, limpeza e secagem, para garantir a qualidade e o valor nutricional. E depois o milho é embalado e levado ate o supermercado onde as pessoas compram e consumem algo que inicialmente precisou do agro.",
    "Chocolate": "O cacau deve ser plantado por meio de mudas so podendo ser colhido de três a cinco anos depois. Apos isso o cacau passa por processos de beneficiamento na fábrica, como torrefação, moagem e refino, para garantir a qualidade e o valor nutricional. E depois o chocolate é embalado e levado ate o supermercado onde as pessoas compram e consumem algo que inicialmente precisou do agro."
};

document.querySelectorAll(".botao-ver").forEach(function(botao) {
    botao.addEventListener("click", function(clique) {
        let produto = clique.target.getAttribute("data-nome");
        
        document.getElementById("bloco-resposta").classList.remove("escondido");
        document.getElementById("titulo-resposta").innerText = "Trajetória do " + produto;
        document.getElementById("texto-resposta").innerText = caminhos[produto];
    });
});
document.getElementById("botao-escuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
});
