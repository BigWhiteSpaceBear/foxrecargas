let productRequestMessage = ""; // Armazena a mensagem fixa que será enviada para o WhatsApp

// Função para abrir o pop-up principal ou outros pop-ups
function openPopup(popupId = "popup", message = "") {
  // Fecha qualquer pop-up aberto
  closePopup();

  // Se uma mensagem for passada, armazene-a e exiba no pop-up
  if (message) {
    productRequestMessage = message;
    document.getElementById("product-request-message").innerText =
      productRequestMessage;
  }

  // Abre o pop-up com o ID fornecido
  document.getElementById(popupId).style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

// Função para fechar todos os pop-ups
function closePopup() {
  const popups = document.getElementsByClassName("popup");
  for (let popup of popups) {
    popup.style.display = "none";
  }
  document.getElementById("popup-overlay").style.display = "none";
}

function closePopupTermo() {
  const popups = document.getElementsByClassName("popup_termo");
  for (let popup of popups) {
    popup.style.display = "none";
  }
  document.getElementById("popup-overlay").style.display = "none";
}

function closePopupPolitica() {
  const popups = document.getElementsByClassName("popup_politica");
  for (let popup of popups) {
    popup.style.display = "none";
  }
  document.getElementById("popup-overlay").style.display = "none";
}

// Função para redirecionar para o WhatsApp com a mensagem fixa
function redirectToWhatsApp() {
  const phoneNumber = "5564993128160"; 
  const encodedMessage = encodeURIComponent(productRequestMessage); // Codifica a mensagem para a URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.location.href = whatsappUrl; // Redireciona para o WhatsApp com a mensagem fixa
}
