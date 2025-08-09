document.addEventListener('DOMContentLoaded', () => {
  const togglePasswordBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const loginForm = document.getElementById('loginForm');
  const submitButton = loginForm.querySelector('button[type="submit"]');
  let isProcessing = false;

  const togglePasswordVisibility = () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    const icon = togglePasswordBtn.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isProcessing) return;

    const email = loginForm.email.value.trim();
    const pass = loginForm.password.value.trim();
    const rememberMe = loginForm['remember-me'].checked;

    if (!email || !pass) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Digite um e-mail válido.');
      return;
    }

    isProcessing = true;
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';

    console.log('Tentativa de login:', { email, pass, rememberMe });

    setTimeout(() => {
      alert('Login realizado com sucesso! (simulado)');
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      isProcessing = false;
      submitButton.focus(); 
    }, 1500);
  };

  const setupSocialButtons = () => {
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(btn => {
      btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-2px)');
      btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
    });
  };

  togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
  loginForm.addEventListener('submit', handleSubmit);
  setupSocialButtons();
});
