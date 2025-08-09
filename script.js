document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    let isProcessing = false;

    togglePassword.addEventListener('click', () => {
        const isPassword = password.type === 'password';
        password.type = isPassword ? 'text' : 'password';
        togglePassword.querySelector('i').classList.toggle('fa-eye');
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (isProcessing) return;
        
        const email = document.getElementById('email').value.trim();
        const pass = password.value.trim();
        const rememberMe = document.getElementById('remember-me').checked;

        if (!email || !pass) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Digite um e-mail válido.');
            return;
        }

        console.log('Tentativa de login:', { email, pass, rememberMe });

        const submitButton = loginForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        submitButton.disabled = true;
        isProcessing = true;

        setTimeout(() => {
            alert('Login realizado com sucesso! (simulado)');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            isProcessing = false;
        }, 1500);
    });

    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-2px)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
    });
});
