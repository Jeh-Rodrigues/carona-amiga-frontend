document.getElementById('reserva-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const passageiro = document.getElementById('passageiros').value;
    const parceiro = document.getElementById('parceiros').value;
    const response = await fetch('http://localhost:3000/api/reservas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seuTokenJWT'
      },
      body: JSON.stringify({ passageiro, parceiro })
    });
    const result = await response.json();
    if (response.ok) {
      alert('Reserva adicionada com sucesso!');
    } else {
      alert(`Erro: ${result.message}`);
    }
  });
  