// Animaciones al hacer scroll
const animados = document.querySelectorAll('.animado');

const mostrarSecciones = () => {
  animados.forEach(seccion => {
    const alturaPantalla = window.innerHeight;
    const distanciaSeccion = seccion.getBoundingClientRect().top;
    
    if (distanciaSeccion < alturaPantalla - 100) {
      seccion.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarSecciones);
