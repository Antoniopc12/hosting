function openTab(event, tabId) {
    // Oculta todas las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remueve la clase activa de todos los botones
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Muestra la pestaña seleccionada y añade la clase activa al botón
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
