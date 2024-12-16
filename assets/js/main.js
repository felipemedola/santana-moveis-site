document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os links do menu lateral
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    const offcanvasElement = document.getElementById('offcanvasMenu');

    // Itera sobre os links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Previne o comportamento padrão
            event.preventDefault();

            // Obtém o ID da seção
            const targetSection = document.querySelector(link.getAttribute('href'));
            
            // Rola suavemente para a seção
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Fecha o offcanvas após o clique
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvasInstance.hide();
        });
    });
});
