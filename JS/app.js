
const body = document.querySelector('body')
const menu = document.getElementById('menu-icon');
const lista_navbar = document.getElementById('nav-list');


menu.addEventListener("click", () => {
    lista_navbar.classList.toggle("show"); // Alterna la clase "show" en la lista de navegación
});



