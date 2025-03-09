document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menu-toggle");
    let sidebar = document.getElementById("sidebar");
    let menuItems = document.querySelectorAll(".menu-item > a");

    // 🔹 Abrir/cerrar menú lateral en móviles
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // 🔹 Abrir/cerrar submenús
    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });

    // 🔹 Iniciar carrusel automáticamente
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
        interval: 3000, // Cambia de imagen cada 3 segundos
        ride: "carousel"
    });
});

// 🔹 Mostrar/ocultar secciones
function toggleSection(sectionId) {
    document.querySelectorAll('.container').forEach(section => {
        section.style.display = 'none';
    });

    let section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }

    let carrusel = document.getElementById('carouselExample');  
    if (carrusel) {
        carrusel.style.display = (sectionId === 'noticias') ? 'block' : 'none';
    }
}

// 🔹 Abrir/cerrar submenús con animación de flecha
function toggleSubmenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    var flecha = submenu.previousElementSibling.querySelector(".flecha");

    document.querySelectorAll(".submenu").forEach(menu => {
        if (menu !== submenu) {
            menu.classList.remove("visible");
            let flechaOtras = menu.previousElementSibling.querySelector(".flecha");
            if (flechaOtras) flechaOtras.style.transform = "rotate(0deg)";
        }
    });

    submenu.classList.toggle("visible");
    flecha.style.transform = submenu.classList.contains("visible") ? "rotate(180deg)" : "rotate(0deg)";
}
