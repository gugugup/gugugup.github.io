/** Menu de navegacion */

document.querySelector(".menu").addEventListener("click", animateMenu);

const linea1_menu = document.querySelector(".linea1_barra_menu");
const linea2_menu = document.querySelector(".linea2_barra_menu");
const linea3_menu = document.querySelector(".linea3_barra_menu");

function animateMenu(){
    linea1_menu.classList.toggle("activelinea1_barra_menu");
    linea2_menu.classList.toggle("activelinea2_barra_menu");
    linea3_menu.classList.toggle("activelinea3_barra_menu");
};

const iconoMenu = document.querySelector(".menu"),
      menu = document.querySelector("#menuu");

iconoMenu.addEventListener("click", (e) => {

    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
});    

const ocultMenu = document.querySelector(".menu_oculto");

ocultMenu.addEventListener("click", () => {

      menu.classList.toggle("active")
      linea1_menu.classList.toggle("activelinea1_barra_menu")  
      linea2_menu.classList.toggle("activelinea2_barra_menu")
      linea3_menu.classList.toggle("activelinea3_barra_menu")
});

const miBoton = document.querySelector(".boton");

miBoton.addEventListener("click", despedir);

function despedir() {
    alert("¡Gracias por ver!");
}