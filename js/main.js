let preview = document.getElementById("preview");
let carousel = document.getElementById('carouselExampleIndicators');
let hide = document.getElementById("hide");

//función que muestra la previsualización de proyectos al clicar en el mensaje
function previewProjects () {
  preview.onclick = function() {
    carousel.style.display = "block";
    preview.style.display = "none";
    hide.style.display = "flex";
    hide.onclick = function() {
    carousel.style.display = "none";
    preview.style.display = "flex";
    hide.style.display = "none";
    }
  }
}

previewProjects();