document.addEventListener('DOMContentLoaded', async () => {

  const form_parceiro = document.getElementById('parceiro-form');

  form_parceiro.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const response = await fetch('http://localhost:3000/api/parceiros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      });
      const result = await response.json();
      if (response.ok) {
        alert('Parceiro adicionado com sucesso!');
      } else {
        alert(`Erro: ${result.message}`);
      }
    });
});
  