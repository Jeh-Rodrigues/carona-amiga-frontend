document.addEventListener('DOMContentLoaded', async () => {

    //adicionar evento de monitoramento login
    const txt_email = document.getElementById('email');
    const txt_password = document.getElementById('password');

    const handleOnChange = (e)=>{
        e.preventDefault();
        const div_status = document.getElementById("status_message_login");
        div_status.style.visibility = 'hidden';
    }

    txt_email.addEventListener('input', (e)=> handleOnChange(e));
    txt_password.addEventListener('input', (e)=> handleOnChange(e))



    //login form
    const form = document.getElementById('loginForm');
    
    //adicionar evento de envio de formulario
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            const div_status = document.getElementById("status_message_login");
            div_status.style.visibility = 'visible';
            div_status.innerHTML = data['message']

            
            // Exibir a resposta do servidor no console (por exemplo, o token JWT)
            // Redirecionar para outra página ou executar ações com base na resposta do servidor
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    });

});
