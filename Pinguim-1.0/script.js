window.addEventListener('load', function() {
    const form = document.getElementById('registrationForm');
    const registerBtn = document.getElementById('registerBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const output = document.getElementById('output');

    function validateForm() {
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const birthDate = document.getElementById('birthDate').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!fullName || !phone || !email || !birthDate || !username || !password) {
            alert('Todos os campos são obrigatórios!');
            return false;
        }
        return true;
    }

    function register() {
        if (validateForm()) {
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const birthDate = document.getElementById('birthDate').value;
            const username = document.getElementById('username').value;

            output.innerHTML = `
                <p><strong>Nome Completo:</strong> ${fullName}</p>
                <p><strong>Nº de Telefone:</strong> ${phone}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Data de Nascimento:</strong> ${birthDate}</p>
                <p><strong>Nome de Usuário:</strong> ${username}</p>
            `;
        }
    }

    function cancel() {
        form.reset();
        output.innerHTML = '';
    }

    registerBtn.addEventListener('click', register);
    cancelBtn.addEventListener('click', cancel);
});