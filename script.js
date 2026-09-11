const secciones = document.querySelectorAll(
  ".godofwar, .johnwick, .hollowknight, .dragonball, .lunadepluton"
);

secciones.forEach((seccion) => {
  seccion.classList.add("invisible");
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      entrada.target.classList.remove("invisible", "saliendo");
    } else {
      entrada.target.classList.add("saliendo");
      entrada.target.classList.remove("visible", "invisible");
    }
  });
}, {
  threshold: 0.4,
});

secciones.forEach((seccion) => {
  observador.observe(seccion);
});
