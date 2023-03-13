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
  
  
  
