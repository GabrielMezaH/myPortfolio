// JavaScript mejorado para el efecto de elevación y parpadeo al hacer hover
const proyectos = document.querySelectorAll('.proyecto');

proyectos.forEach((proyecto) => {
    proyecto.addEventListener('mouseenter', () => {
        proyecto.classList.add('hovered');
    });

    proyecto.addEventListener('mouseleave', () => {
        proyecto.classList.remove('hovered');
    });
});
