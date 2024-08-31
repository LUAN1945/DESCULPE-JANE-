document.addEventListener('DOMContentLoaded', () => {
    const retryButton = document.getElementById('retryButton');

    retryButton.addEventListener('click', () => {
        alert('Tentei recarregar a página, mas ainda não está funcionando!');
        // Aqui você pode adicionar lógica para tentar recarregar a página ou fornecer mais informações.
    });
});
