// Menu mobile.
const btnMenu = document.getElementById('btn-menu'),
    navegacion = document.getElementById('nav');

function ocultar() {
    navegacion.classList.add('d-none');
    navegacion.classList.remove('dropdown-content');
}

// enciende y apaga las clases.
btnMenu.addEventListener('click', () => {
    navegacion.classList.toggle('dropdown-content');
    navegacion.classList.toggle('d-none');
});

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e) {
    /*obtiendo informacion del DOM para verificar si hacen click fuera
    del documento para quitar los estilos y evitar errores.*/
    let clic = e.target;

    if (clic != btnMenu) {
        ocultar();
    }
});