// Seleciona os elementos
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');

// Abre o popup ao clicar no botão "Abrir Popup"
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Exibe o popup
});

// Fecha o popup ao clicar no "X"
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Oculta o popup
});

// Fecha o popup ao clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Oculta o popup
    }
});

// Função para abrir o popup e alterar a mensagem
function abrirPopup(mensagem) {
    var popup = document.getElementById("popup");
    var mensagemPopup = document.getElementById("mensagemPopup");
    mensagemPopup.innerText = mensagem;  // Altera o texto do popup
    popup.classList.add("show");  // Mostra o popup
}

// Função para fechar o popup
document.getElementById("closePopupBtn").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("show");  // Esconde o popup
});

// Redireciona para o WhatsApp ao confirmar a compra
document.getElementById("confirmarCompra").addEventListener("click", function () {
    window.location.href = "https://wa.me/+5564993128160?text=Estou+interessado+no+plano";  // Redireciona ao WhatsApp
});

// Adiciona o evento de clique aos botões de compra
document.getElementById("comprarMensalUniTV").addEventListener("click", function () {
    abrirPopup("Você escolheu o Plano Mensal do UniTV por R$ 25,00. Deseja confirmar?");
});

// Aqui, você adiciona os eventos para os outros produtos
document.getElementById("comprarAnualUniTV").addEventListener("click", function () {
    abrirPopup("Você escolheu o Plano Anual do UniTV por R$ 170,00. Deseja confirmar?");
});

// Continue adicionando eventos para outros botões de compra