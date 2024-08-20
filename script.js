const avanca = document.querySelectorAll('.btn-proximo');
const video = document.getElementById('bg-video');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const destino = this.getAttribute('data-proximo');

        // Se o destino for um planeta, redirecione para a página do planeta
        if (destino === 'marte' || destino === 'jupiter' || destino === 'saturno') {
            video.pause();
            window.location.href = `${destino}.html`; // Redireciona para a página do planeta
        } else if (destino === '1') {
            // Trocar o vídeo para o vídeo do Sistema Solar
            video.src = "vds/complete-solar-system-copyright-free-video-stock-video-stockfootage-istock-video.hmtl.mp4"; // Vídeo do Sistema Solar
            video.play();
        }

        // Avançar para o próximo passo na mesma página
        const proximoPasso = `passo-${destino}`;
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
