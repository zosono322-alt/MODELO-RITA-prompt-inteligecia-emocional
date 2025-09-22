
function mostrar(id) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
