document.addEventListener('DOMContentLoaded', async () => {

  const form_passageiro = document.getElementById('passageiro-form');

  form_passageiro.addEventListener('submit', async (event) => {

      event.preventDefault();

      const name = document.getElementById('name').value;
      const cpf = document.getElementById('cpf').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const endereco = document.getElementById('endereco').value;
      const numero = document.getElementById('numero').value;
      const cidade = document.getElementById('cidade').value;
      const estado = document.getElementById('estado').value;
      const senha = document.getElementById('senha').value;
      const confirmacao_senha = document.getElementById('confirmacao_senha').value;
      
      const response = await fetch('http://localhost:3000/api/passageiros/passageiros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, cpf, email, telefone, endereco, numero, cidade, estado, senha, confirmacao_senha})
      });
      
      const result = await response.json();
   
      if (response.ok) {
        alert('Passageiro adicionado com sucesso!');
      } else {
        alert(`Erro: ${result.message}`);
      }
  });
});