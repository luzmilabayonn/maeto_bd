const musica = document.getElementById("musica");
const botonAnterior = document.querySelector(".controles button:nth-child(1)");
const botonPlay = document.querySelector(".controles button:nth-child(2)");
const botonSiguiente = document.querySelector(".controles button:nth-child(3)");
const progreso = document.querySelector(".progreso");
const nombreCancion = document.querySelector(".cancion");

function cambiarNombre(texto) {

    nombreCancion.style.opacity = "0";

    setTimeout(() => {
        nombreCancion.textContent = texto;
        nombreCancion.style.opacity = "1";
    }, 300);

}

const canciones = [

    {
        nombre: "Voyagers — T&K",
        archivo: "audios/Voyagers.mp3"
    },
    {
        nombre: "Bocanada de Amor — tomas metrikf",
        archivo: "audios/Bocanada de Amor.mp3"
    },
    {
        nombre: "Mesa para dos — tomas metrikf",
        archivo: "audios/mesa para dos.mp3"
    },
    {
        nombre: "miau — Young Cister",
        archivo: "audios/miau - Young Cister.mp3"
    },
    {
        nombre: "LE PIDO A DIOS — Feid",
        archivo: "audios/LE PIDO A DIOS - FEID x DJ PREMIER  SIXDO (Album 2022).mp3"
    },
    {
        nombre: "Lover Is a Day — CUCO",
        archivo: "audios/CUCO - Lover Is a Day (Audio).mp3"
    },
    {
        nombre: "Mary On A Cross — Ghost",
        archivo: "audios/Ghost - Mary On A Cross (Official Audio).mp3"
    },
    {
        nombre: "Those Eyes — New West",
        archivo: "audios/New West - Those Eyes.mp3"
    },
    {
        nombre: "Quiero Ver — Café Tacuba",
        archivo: "audios/Café Tacuba - Quiero ver.mp3"
    },
    {
        nombre: "Puro Talento — Miranda!",
        archivo: "audios/puro talento - Miranda!(audio).mp3"
    },
    {
        nombre: "I Only Have Eyes for You — The Flamingos",
        archivo: "audios/I Only Have Eyes for You.mp3"
    },
    {
        nombre: "Tócame — La Santa Grifa",
        archivo: "audios/Tocame.mp3"
    },
    {
        nombre: "Te quiero — Hombres G",
        archivo: "audios/Hombres G - Te quiero (Audio Oficial).mp3"
    },
    {
        nombre: "Tú y Yo — La Misma Gente",
        archivo: "audios/Tu y Yo.mp3"
    },
    {
        nombre: "Te Amo — Los Mier",
        archivo: "audios/Te Amo.mp3"
    },
    {
        nombre: "Carpe diem — Sosa 66s",
        archivo: "audios/Carpe diem.mp3"
    },
    {
        nombre: "Perfecta — Miranda!",
        archivo: "audios/Perfecta.mp3"
    },
    {
        nombre: "Hacer un puente — La Franela",
        archivo: "audios/La Franela - Hacer un puente (AUDIO).mp3"
    },
    {
        nombre: "My Moon My Man — Feist",
        archivo: "audios/Feist - My Moon My Man.mp3"
    },
    {
        nombre: "Locos — León Larregui",
        archivo: "audios/León Larregui - Locos (Audio).mp3"
    },
    {
        nombre: "Amor, amor de mis amores — Natalia Lafourcade",
        archivo: "audios/Natalia Lafourcade & Devendra Banhart - Amor, amor de mis amores.mp3"
    },
    {
        nombre: "Primaveral — Mon Laferte",
        archivo: "audios/Mon Laferte - Primaveral (Audio Oficial).mp3"
    },
    {
        nombre: "Amor — Emmanuel Cortes",
        archivo: "audios/Emmanuel cortes - Amor.mp3"
    }
];

let indiceActual = 0;

function cargarCancion(indice) {

    indiceActual = indice;

    musica.src = canciones[indiceActual].archivo;
    cambiarNombre(canciones[indiceActual].nombre);

    progreso.style.left = "0%";

    musica.load();
}

botonPlay.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        botonPlay.textContent = "Ⅱ";

    } else {

        musica.pause();
        botonPlay.textContent = "▶";

    }

});

botonSiguiente.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= canciones.length) {
        indiceActual = 0;
    }

    cargarCancion(indiceActual);
    musica.play();
    botonPlay.textContent = "Ⅱ";

});

botonAnterior.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = canciones.length - 1;
    }

    cargarCancion(indiceActual);
    musica.play();
    botonPlay.textContent = "Ⅱ";

});

musica.addEventListener("timeupdate", () => {

    if (musica.duration) {

        const porcentaje =
            (musica.currentTime / musica.duration) * 100;

        progreso.style.left = porcentaje + "%";

    }

});

musica.addEventListener("ended", () => {

    indiceActual++;

    if (indiceActual >= canciones.length) {
        indiceActual = 0;
    }

    cargarCancion(indiceActual);
    musica.play();
    botonPlay.textContent = "Ⅱ";

});

cargarCancion(indiceActual);