document.addEventListener("DOMContentLoaded", function () {
    let breadcrumb = document.getElementById("breadcrumb");
    let pathArray = window.location.pathname.split("/").filter(p => p); // Divide la URL en partes

    let capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitaliza solo la primera letra

    let breadcrumbHTML = `<a href="/">Inicio</a>`; // Enlace al inicio

    // Si estamos en un mes (ejemplo: eventos/2025/marzo/ o eventos/2025/marzo/index.html)
    if ((pathArray.length === 3 || (pathArray.length === 4 && pathArray[3] === "index.html")) 
        && pathArray[0] === "eventos" && pathArray[1] === "2025") {
        
        let mes = capitalize(pathArray[2]); // Convierte solo la primera letra en mayúscula
        breadcrumbHTML += ` » <span>${mes}</span>`;
    }

    // Si estamos en un evento (ejemplo: eventos/2025/marzo/evento.html)
    if (pathArray.length === 4 && pathArray[0] === "eventos" && pathArray[1] === "2025" && pathArray[3] !== "index.html") {
        let mes = capitalize(pathArray[2]); // Convierte solo la primera letra en mayúscula
        let evento = pathArray[3]
            .replace(".html", "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        breadcrumbHTML += ` » <a href="/eventos/2025/${pathArray[2]}/">${mes}</a> » <span>${evento}</span>`;
    }

    breadcrumb.innerHTML = breadcrumbHTML;
});

