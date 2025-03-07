// EFEITO VISUAL DE CARREGAMENTO DE PÁGINA
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// VALIDAÇÃO DE FORMULÁRIO
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário antes da validação

        const nome = document.querySelector("input[name='Nome']");
        const email = document.querySelector("input[name='Email']");
        const assunto = document.querySelector("input[name='Assunto']");
        const mensagem = document.querySelector("input[name='Mensagem']");

        let valid = true;

        // Validação do nome (mínimo 3 caracteres)
        if (nome.value.trim().length < 3) {
            alert("O nome deve ter pelo menos 3 caracteres.");
            valid = false;
        }

        // Validação do email (formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert("Digite um email válido.");
            valid = false;
        }

        // Validação do assunto (mínimo 5 caracteres)
        if (assunto.value.trim().length < 5) {
            alert("O assunto deve ter pelo menos 5 caracteres.");
            valid = false;
        }

        // Validação da mensagem (mínimo 10 caracteres)
        if (mensagem.value.trim().length < 10) {
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            valid = false;
        }

        // Se todas as validações passarem, envia o formulário
        if (valid) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
