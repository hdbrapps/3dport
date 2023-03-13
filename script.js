// Selecione o botão de envio e adicione um evento de clique a ele
document.getElementById("send").addEventListener("click", function(event) {
  // Evite o comportamento padrão de envio do formulário
  event.preventDefault();
  
  // Selecione o valor do nome e da mensagem dos elementos de entrada
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  
  // Selecione o valor do serviço selecionado
  var servico = document.getElementById("servico").value;
  
  // Construa a URL do WhatsApp com os valores do nome, mensagem e serviço
  var url = "https://wa.me/559897018089?text=" + encodeURIComponent("Nome: " + nome + "\nServiço: " + servico + "\nMensagem: " + mensagem);
  
  // Abra a URL do WhatsApp
  window.open(url);
});

// Selecione o botão do menu e adicione um evento de clique a ele
document.getElementById("menu-toggle").addEventListener("click", function() {
  // Selecione o elemento que contém o menu
  var menu = document.getElementById("menu");
  
  // Adicione ou remova a classe "open" para mostrar ou esconder o menu
  menu.classList.toggle("open");
});

// Selecione o botão de alternar tema e adicione um evento de clique a ele
document.getElementById("theme-toggle").addEventListener("click", function() {
  // Selecione o corpo da página
  var body = document.body;
  
  // Adicione ou remova a classe "dark" para alternar o modo noturno
  body.classList.toggle("dark");
});
