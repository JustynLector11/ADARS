function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarLeft = window.getComputedStyle(sidebar).left; // Obtiene el valor real
  
  if (sidebarLeft === "0px") {
    sidebar.style.left = "-210px";
  } else {
    sidebar.style.left = "0px";
  }
}

function toggleSection(sectionId) {
  // Oculta todas las secciones
  document.querySelectorAll('.container').forEach(section => {
      section.style.display = 'none';
  });

  // Muestra la sección seleccionada
  let section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'block';
  }

  // Ocultar el carrusel cuando se cambia de sección
  let carrusel = document.getElementById('carouselExample');  
  if (carrusel) {
      carrusel.style.display = (sectionId === 'noticias') ? 'block' : 'none';
  }
}

function toggleSubmenu(submenuId) {
  var submenu = document.getElementById(submenuId);
  var flecha = submenu.previousElementSibling.querySelector(".flecha");

  // Cierra otros submenús antes de abrir el actual
  document.querySelectorAll(".submenu").forEach(function (menu) {
    if (menu !== submenu) {
      menu.classList.remove("visible");
      let flechaOtras = menu.previousElementSibling.querySelector(".flecha");
      if (flechaOtras) flechaOtras.style.transform = "rotate(0deg)";
    }
  });

  // Alternar visibilidad del submenú
  submenu.classList.toggle("visible");

  // Rotar la flecha
  if (submenu.classList.contains("visible")) {
    flecha.style.transform = "rotate(180deg)";
  } else {
    flecha.style.transform = "rotate(0deg)";
  }
}


document.addEventListener("DOMContentLoaded", function () {
        // Ocultar todas las secciones excepto eventos y carrusel
        document.querySelectorAll(".container").forEach(seccion => {
            if (!seccion.id.includes("noticias")) {
                seccion.style.display = "none";
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
      interval: 3000, // Cambia de imagen cada 3 segundos
      ride: "carousel"
  });
});

function cerrarMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar) {
      sidebar.style.left = "-210px"; // Mueve el menú fuera de la pantalla
  }
}

function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
