let indiceDiapositiva = 0; 
let intervaloDiapositivaAutomatica; 

const diapositivas = document.querySelectorAll('.carousel-slide'); 
const totalDiapositivas = diapositivas.length; 

function mostrarDiapositiva(indice) { 
    diapositivas.forEach((diapositiva) => { 
        diapositiva.classList.remove('active'); 
    });
    diapositivas[indice].classList.add('active'); 
}

function moverDiapositiva(n) { 
    clearInterval(intervaloDiapositivaAutomatica); 
    indiceDiapositiva = (indiceDiapositiva + n + totalDiapositivas) % totalDiapositivas; // 
    mostrarDiapositiva(indiceDiapositiva); 
    intervaloDiapositivaAutomatica = setInterval(moverDiapositivasAutomaticamente, 5000); 
}

function moverDiapositivasAutomaticamente() { 
    indiceDiapositiva = (indiceDiapositiva + 1) % totalDiapositivas; 
    mostrarDiapositiva(indiceDiapositiva); 
}

intervaloDiapositivaAutomatica = setInterval(moverDiapositivasAutomaticamente, 5000); 
mostrarDiapositiva(indiceDiapositiva); 
