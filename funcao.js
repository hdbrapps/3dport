evento = document.getElementById('send')
const enviarFormulario =() => {
        let nome = document.getElementById('nome').value;
      
        let mensagem = document.getElementById('mensagem').value;
        let numero= 5598970180089;
var win= window.open(`https://wa.me/${numero}?text=%20%20(nome)%20%20${nome}
%20

(Assunto%20)
${mensagem}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
