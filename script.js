/* TOGGLE PARA MOSTRAR/ESCONDER SENHA */
function toggleSenha() {
    const input = document.getElementById("senha");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

/* LIMITAÇÃO DE CARACTERES - USUÁRIO (máximo 20) */
document.getElementById("usuario")?.addEventListener("input", function() {
    if (this.value.length > 20) {
        this.value = this.value.substring(0, 20);
    }
});

/* LIMITAÇÃO DE CARACTERES - SENHA (máximo 30) */
document.getElementById("senha")?.addEventListener("input", function() {
    if (this.value.length > 30) {
        this.value = this.value.substring(0, 30);
    }
});