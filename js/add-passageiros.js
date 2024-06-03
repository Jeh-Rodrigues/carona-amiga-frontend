document.addEventListener('DOMContentLoaded', async () => {

  const form_passageiro = document.getElementById('passageiro-form');

  form_passageiro.addEventListener('submit', async (event) => {

      event.preventDefault();

      const name = document.getElementById('name').value;
      
      const response = await fetch('http://localhost:3000/api/passageiros/passageiros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name})
      });
      
      const result = await response.json();
   
      if (response.ok) {
        alert('Passageiro adicionado com sucesso!');
      } else {
        alert(`Erro: ${result.message}`);
      }
  });
});