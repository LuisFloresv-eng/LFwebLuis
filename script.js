console.log("Página de Luis Flores cargada correctamente.");

const cards = document.querySelectorAll(".card");
const projects = document.querySelectorAll(".project");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });
});

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.cursor = "pointer";
    });
});