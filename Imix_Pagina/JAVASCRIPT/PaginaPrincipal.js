function ajustarAltura() {
  const right = document.querySelector(".right");
  const img = document.querySelector(".left img");

  if (right && img) {
    img.style.height = right.offsetHeight + "px";
  }
}

// Ajusta al cargar y al redimensionar la ventana
window.addEventListener("load", ajustarAltura);
window.addEventListener("resize", ajustarAltura);
