document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/reservas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seuTokenJWT'
      }
    });
    const reservas = await response.json();
    const reservasList = document.getElementById('reservas-list');
    reservas.forEach(reserva => {
      const li = document.createElement('li');
      li.textContent = `Reserva de ${reserva.passageiro} no parceiro ${reserva.parceiro}`;
      reservasList.appendChild(li);
    });
  });
  