document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/parceiros', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seuTokenJWT'
      }
    });
    const parceiros = await response.json();
    const parceirosList = document.getElementById('parceiros-list');
    parceiros.forEach(parceiro => {
      const li = document.createElement('li');
      li.textContent = parceiro.name;
      parceirosList.appendChild(li);
    });
  });
  