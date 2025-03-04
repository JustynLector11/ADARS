document.addEventListener("DOMContentLoaded", function () {
    let breadcrumb = document.getElementById("breadcrumb");
    let repoBase = "/adars"; // Ajusta el nombre del repositorio si lo cambias en GitHub Pages
    let pathArray = window.location.pathname.replace(repoBase, "").split("/").filter(p => p);

    let capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    let breadcrumbHTML = `<a href="${repoBase}/index.html">Inicio</a>`;

    if ((pathArray.length === 3 || (pathArray.length === 4 && pathArray[3] === "index.html")) 
        && pathArray[0] === "eventos" && pathArray[1] === "2025") {
        
        let mes = capitalize(pathArray[2]);
        breadcrumbHTML += ` » <span>${mes}</span>`;
    }

    if (pathArray.length === 4 && pathArray[0] === "eventos" && pathArray[1] === "2025" && pathArray[3] !== "index.html") {
        let mes = capitalize(pathArray[2]);
        let evento = pathArray[3]
            .replace(".html", "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        breadcrumbHTML += ` » <a href="${repoBase}/eventos/2025/${pathArray[2]}/">${mes}</a> » <span>${evento}</span>`;
    }

    breadcrumb.innerHTML = breadcrumbHTML;
});

