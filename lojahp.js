// Seleciona todos os botões com a classe "adc" e adiciona um ouvinte de eventos para cada um
var addButton = document.querySelectorAll('.adc');
for (var i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', addToCart);
}

// Cria um elemento de carrinho quando um item é adicionado
function addToCart(event) {
  // Obtém a informação do produto do elemento pai do botão
  var parentElement = event.target.parentNode;
  var productName = parentElement.querySelector('h3').textContent;
  var productDescription = parentElement.querySelector('p').textContent;
  
  // Cria um novo elemento de carrinho com as informações do produto
  var cartItem = document.createElement('li');
  cartItem.innerHTML = '<strong>' + productName + '</strong><br>' + productDescription;
  
  // Adiciona o elemento de carrinho ao carrinho
  var cartList = document.getElementById('cart');
  cartList.appendChild(cartItem);
}
