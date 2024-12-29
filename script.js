// Array de productos
const productos = [
    { id: 1, name: "Remera Crochet", precio: 5600, descripcion: "Una remera tejida a mano con estilo único." },
    { id: 2, name: "Top Elastico Soft", precio: 4000, descripcion: "Top cómodo y elástico ideal para días casuales." },
    { id: 3, name: "Remera Bambula", precio: 4400, descripcion: "Una remera suave y fresca para el verano." },
    { id: 4, name: "Remera Beso", precio: 5600, descripcion: "Camiseta con diseño romántico y moderno." },
];

// Código principal
document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".producto");
    const totalElemento = document.getElementById("total");

    // Ajustar estilo del total
    totalElemento.parentElement.style.fontSize = "1.8rem";
    totalElemento.parentElement.style.fontWeight = "bold";

    // Crear un ícono de carrito
    const carritoIcono = document.createElement("span");
    carritoIcono.textContent = " 🛒";
    carritoIcono.style.fontSize = "1.5rem";
    carritoIcono.style.marginLeft = "10px";
    totalElemento.parentElement.appendChild(carritoIcono);

    // Sonido
    const sonido = new Audio("./sonido.mp3"); // Asegúrate de tener un archivo llamado sonido.mp3 en la carpeta

    tarjetas.forEach((tarjeta, index) => {
        const imagen = tarjeta.querySelector("img");

        // Animación y sonido en imágenes
        imagen.addEventListener("mouseover", () => {
            imagen.style.transform = "scale(1.1)";
            imagen.style.transition = "transform 0.3s ease";
            sonido.play();
        });

        imagen.addEventListener("mouseout", () => {
            imagen.style.transform = "scale(1)";
        });

        // Botón de descripción
        const botonDescripcion = document.createElement("button");
        botonDescripcion.textContent = "Ver descripción";
        tarjeta.appendChild(botonDescripcion);

        botonDescripcion.addEventListener("click", () => {
            if (!tarjeta.querySelector(".descripcion")) {
                const descripcion = document.createElement("p");
                descripcion.className = "descripcion";
                descripcion.textContent = productos[index]?.descripcion || "Sin descripción.";
                tarjeta.appendChild(descripcion);
            }
        });
    });

    // Carrito
    let total = 0;
    const botonesMas = document.querySelectorAll(".cantidad button:nth-child(3)");
    const botonesMenos = document.querySelectorAll(".cantidad button:nth-child(1)");

    botonesMas.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            total += productos[index]?.precio || 0;
            totalElemento.textContent = total;
        });
    });

    botonesMenos.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            if (total > 0) {
                total -= productos[index]?.precio || 0;
                totalElemento.textContent = total;
            }
        });
    });
});
