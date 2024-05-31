document.getElementById('passageiro-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const response = await fetch('http://localhost:3000/api/passageiros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seuTokenJWT'
      },
      body: JSON.stringify({ name })
    });
    
    const result = await response.json();
    if (response.ok) {
      alert('Passageiro adicionado com sucesso!');
    } else {
      alert(`Erro: ${result.message}`);
    }
  });
  