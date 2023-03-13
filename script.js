let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

// Seleciona o botão de menu e o menu lateral
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão de menu para alternar a classe 'open'
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Seleciona o botão de alternar tema e a tag 'body'
const toggleThemeBtn = document.querySelector('#toggle-theme');
const body = document.querySelector('body');

// Adiciona um evento de clique ao botão de alternar tema para alternar a classe 'dark'
toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// Selecione o botão de envio e adicione um evento de clique a ele
document.getElementById('send').addEventListener('click', function(event) {
  // Evite o comportamento padrão de envio do formulário
  event.preventDefault();

  // Selecione o valor do nome e da mensagem dos elementos de entrada
  var nome = document.getElementById('nome').value;
  var mensagem = document.getElementById('mensagem').value;

  // Selecione o valor do serviço selecionado
  var servico = document.getElementById('servico').value;

  // Construa a URL do WhatsApp com os valores do nome, mensagem e serviço
  var url = 'https://wa.me/559897018089?text=' + encodeURIComponent('Nome: ' + nome + '\nServiço: ' + servico + '\nMensagem: ' + mensagem);

  // Abra a URL do WhatsApp
  window.open(url);
});
