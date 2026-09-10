const secciones = document.querySelectorAll(".godofwar, .johnwick, .hollowknight, .dragonball, .lunadepluton"
);

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

secciones.forEach((seccion) => {
  observador.observe(seccion);
});