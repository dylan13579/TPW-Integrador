let imagenes = [
    "img/Age-2-Destacada.jpg",
    "img/warhammer-III.jpg",
    "img/1024_2000.webp",
    "img/Arma3-570x320.jpg",
    "img/og_image.webp",
    "img/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg",
    "img/1366_2000.webp",
    "img/WZ-Season-Three-Announce-TOUT-1.jpg",


];

let indiceDiapositiva = 0;
let intervaloDiapositivaAutomatica;

function mostrarDiapositiva(indice) {
    document.querySelectorAll('.carousel-slide').forEach((diapositiva) => {
        diapositiva.classList.remove('active');
    });

    document.querySelectorAll('.carousel-slide')[indice].classList.add('active');
    document.querySelectorAll('.carousel-slide img')[indice].src = imagenes[indice];
}

function moverDiapositiva(n) {
    clearInterval(intervaloDiapositivaAutomatica);
    indiceDiapositiva = (indiceDiapositiva + n + imagenes.length) % imagenes.length;
    mostrarDiapositiva(indiceDiapositiva);
    intervaloDiapositivaAutomatica = setInterval(moverDiapositivasAutomaticamente, 5000);
}

function moverDiapositivasAutomaticamente() {
    indiceDiapositiva = (indiceDiapositiva + 1) % imagenes.length;
    mostrarDiapositiva(indiceDiapositiva);
}

/*intervaloDiapositivaAutomatica = setInterval(moverDiapositivasAutomaticamente, 5000);*/

mostrarDiapositiva(indiceDiapositiva);