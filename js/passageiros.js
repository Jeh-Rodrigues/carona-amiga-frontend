document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/passageiros', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seuTokenJWT'
      }
    });
    const passageiros = await response.json();
    const passageirosList = document.getElementById('passageiros-list');
    passageiros.forEach(passageiro => {
      const li = document.createElement('li');
      li.textContent = passageiro.name;
      passageirosList.appendChild(li);
    });
  });
  