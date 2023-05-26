

document.addEventListener("DOMContentLoaded", function() {
    var flecha = document.querySelector(".flecha2");
    var divDestino = document.querySelector("#divDestino");
    
    window.addEventListener("scroll", function() {
      if (isVisible(divDestino)) {
        flecha.style.display = "none";
      } else {
        flecha.style.display = "block";
      }
    });
    
    function isVisible(element) {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top >= 0 && rect.bottom <= windowHeight;
    }
  });
  

window.addEventListener('load', function() {
  // Obtener el botón y el div con el contenido
  const botonDescargar = document.getElementById('botonDescargar');
  const contenidoDiv = document.getElementById('contenido');
  const h1Element = document.querySelector('h2'); // Obtener el elemento h1

  // Controlador de eventos de clic para el botón
  botonDescargar.addEventListener('click', () => {
    // Obtener el texto visible del div
    const contenidoTexto = contenidoDiv.innerText;

    // Obtener el texto del elemento h1
    const titulo = h1Element.innerText;

    // Crear un objeto Blob con el contenido del texto
    const contenidoBlob = new Blob([contenidoTexto], { type: 'text/plain' });

    // Crear un objeto URL para el Blob
    const urlBlob = URL.createObjectURL(contenidoBlob);

    // Crear un elemento "a" para el enlace de descarga
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = urlBlob;
    enlaceDescarga.download = titulo + '.txt'; // Nombre del archivo de descarga
    document.body.appendChild(enlaceDescarga);

    // Simular un clic en el enlace de descarga
    enlaceDescarga.click();

    // Eliminar el elemento "a" creado
    document.body.removeChild(enlaceDescarga);

    // Liberar la URL del Blob
    URL.revokeObjectURL(urlBlob);
  });





  const tipButtons = document.querySelectorAll('.tip-button')

  

// Loop through all buttons (allows for multiple buttons on page)
tipButtons.forEach((button) => {
  let coin = button.querySelector('.coin')

  // The larger the number, the slower the animation
  coin.maxMoveLoopCount = 90

  button.addEventListener('click', () => {
    if (button.clicked) return

    button.classList.add('clicked')

    // Wait to start flipping the coin because of the button tilt animation
    setTimeout(() => {
      // Randomize the flipping speeds just for fun
      coin.sideRotationCount = Math.floor(Math.random() * 5) * 90
      coin.maxFlipAngle = (Math.floor(Math.random() * 4) + 3) * Math.PI
      button.clicked = true
      flipCoin()
    }, 50)
  })

  const flipCoin = () => {
    coin.moveLoopCount = 0
    flipCoinLoop()
  }

  const resetCoin = () => {
    coin.style.setProperty('--coin-x-multiplier', 0)
    coin.style.setProperty('--coin-scale-multiplier', 0)
    coin.style.setProperty('--coin-rotation-multiplier', 0)
    coin.style.setProperty('--shine-opacity-multiplier', 0.4)
    coin.style.setProperty('--shine-bg-multiplier', '50%')
    coin.style.setProperty('opacity', 1)
    // Delay to give the reset animation some time before you can click again
    setTimeout(() => {
      button.clicked = false
    }, 300)
  }

  const flipCoinLoop = () => {
    coin.moveLoopCount++
    let percentageCompleted = coin.moveLoopCount / coin.maxMoveLoopCount
    coin.angle = -coin.maxFlipAngle * Math.pow((percentageCompleted - 1), 2) + coin.maxFlipAngle
    
    // Calculate the scale and position of the coin moving through the air
    coin.style.setProperty('--coin-y-multiplier', -11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11)
    coin.style.setProperty('--coin-x-multiplier', percentageCompleted)
    coin.style.setProperty('--coin-scale-multiplier', percentageCompleted * 0.6)
    coin.style.setProperty('--coin-rotation-multiplier', percentageCompleted * coin.sideRotationCount)

    // Calculate the scale and position values for the different coin faces
    // The math uses sin/cos wave functions to similate the circular motion of 3D spin
    coin.style.setProperty('--front-scale-multiplier', Math.max(Math.cos(coin.angle), 0))
    coin.style.setProperty('--front-y-multiplier', Math.sin(coin.angle))

    coin.style.setProperty('--middle-scale-multiplier', Math.abs(Math.cos(coin.angle), 0))
    coin.style.setProperty('--middle-y-multiplier', Math.cos((coin.angle + Math.PI / 2) % Math.PI))

    coin.style.setProperty('--back-scale-multiplier', Math.max(Math.cos(coin.angle - Math.PI), 0))
    coin.style.setProperty('--back-y-multiplier', Math.sin(coin.angle - Math.PI))

    coin.style.setProperty('--shine-opacity-multiplier', 4 * Math.sin((coin.angle + Math.PI / 2) % Math.PI) - 3.2)
    coin.style.setProperty('--shine-bg-multiplier', -40 * (Math.cos((coin.angle + Math.PI / 2) % Math.PI) - 0.5) + '%')

    // Repeat animation loop
    if (coin.moveLoopCount < coin.maxMoveLoopCount) {
      if (coin.moveLoopCount === coin.maxMoveLoopCount - 6) button.classList.add('shrink-landing')
      window.requestAnimationFrame(flipCoinLoop)
    } else {
      button.classList.add('coin-landed')
      coin.style.setProperty('opacity', 0)
      setTimeout(() => {
        button.classList.remove('clicked', 'shrink-landing', 'coin-landed')
        setTimeout(() => {
          resetCoin()
        }, 300)
      }, 1500)
    }
  }




  const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.buttondescargar').forEach(button => {

    let icon = $('.icon', button),
        arrow = $('.icon > svg', button),
        line = $('.icon div svg', button),
        svgPath = new Proxy({
            y: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null) {
                    line.innerHTML = getPath(target.y, .25, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });

    svgPath.y = 12;

    button.addEventListener('click', e => {
        if(!button.classList.contains('loading')) {

            button.classList.add('loading');

            gsap.timeline({
                repeat: 2
            }).to(svgPath, {
                y: 17,
                duration: .17,
                delay: .03
            }).to(svgPath, {
                y: 12,
                duration: .3,
                ease: Elastic.easeOut.config(1, .35)
            });

            gsap.timeline({
                repeat: 2,
                repeatDelay: .1,
                onComplete() {
                    gsap.to(arrow, {
                        '--y': -17.5,
                        duration: .4
                    });
                    setTimeout(() => button.classList.add('complete'), 200);
                }
            }).to(arrow, {
                '--y': 9,
                duration: .2
            }).to(arrow, {
                '--y': -9,
                duration: .2
            });

            gsap.timeline().to(icon, {
                y: 4,
                duration: .2
            }).to(icon, {
                y: 8,
                duration: .2,
                delay: .2
            }).to(icon, {
                y: 12,
                duration: .2,
                delay: .2
            }).to(icon, {
                y: 18,
                duration: .2,
                delay: .2
            });

        }
        e.preventDefault();
    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [2, 12],
            [12, update],
            [22, 12]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}

})




//letrero


//icon buscar


  });

     

function completarTexto() {
  // Obtener el texto de ejemplo y los inputs
  const textoEjemplo = document.querySelector('.texto-ejemplo').innerHTML;
  const inputs = document.querySelectorAll('.completar-input');
  
  // Crear un array con los valores de los inputs
  const valores = [];
  inputs.forEach(input => {
    valores.push(input.value);
  });
  
  // Crear una expresión regular para buscar los placeholders
  const regex = new RegExp('{(.*?)}', 'g');
  
  // Reemplazar los placeholders por los valores de los inputs
  const textoCompletado = textoEjemplo.replace(regex, (_, placeholder) => {
    const valor = valores.shift() || placeholder;
    return `<span class="completar-placeholder">${valor}</span>`;
  });
  
  // Mostrar el texto completado
  document.querySelector('.texto-completado').innerHTML = textoCompletado;
  }
  
  function copiarTexto() {
  // Seleccionar el texto completado y copiarlo al portapapeles
  const textoCompletado = document.querySelector('.texto-completado').innerText;
  navigator.clipboard.writeText(textoCompletado);
  }



  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("subir").style.display = "block";
    } else {
      document.getElementById("subir").style.display = "none";
    }
  }
  
  document.getElementById("subir").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  



  







  "use strict";
const DOM = {
    timeline: "timeline",
    timelineStepper: "timeline__stepper",
    timelineStep: "timeline__step",
    timelineStepTitle: "timeline__step-title",
    timelineStepActive: "is-active",
    timelineStepActiveMarker: "timeline__step-active-marker",
    timelineSlidesContainer: "timeline__slides",
    timelineSlide: "timeline__slide",
    timelineSlideActive: "is-active",
};
const STEP_ACTIVE_MARKEP_CUSTOM_PROPS = {
    width: "--slide-width",
    posX: "--slide-pos-x",
    posY: "--slide-pos-y",
};
const SLIDES_CONTAINER_CUSTOM_PROPS = {
    height: "--slides-container-height",
};
const timeline = document.querySelector(`.${DOM.timeline}`);
const timelineStepper = timeline === null || timeline === void 0 ? void 0 : timeline.querySelector(`.${DOM.timelineStepper}`);
const timelineStepTitle = timeline === null || timeline === void 0 ? void 0 : timeline.querySelector(`.${DOM.timelineStepTitle}`);
const timelineSlidesContainer = timeline === null || timeline === void 0 ? void 0 : timeline.querySelector(`.${DOM.timelineSlidesContainer}`);
const timelineSlides = timeline && Array.from(timeline.querySelectorAll(`.${DOM.timelineSlide}`));
window.addEventListener("load", () => {
    createStepActiveMarker();
    activateCurrentSlide();
});
window.addEventListener("resize", () => {
    recalcStepActiveMarkerProps();
});
timeline === null || timeline === void 0 ? void 0 : timeline.addEventListener("click", (event) => {
    const { target } = event;
    if (!target ||
        !(target instanceof Element) ||
        !target.closest(`.${DOM.timelineStep}`)) {
        return;
    }
    const currentStep = target.closest(`.${DOM.timelineStep}`);
    if (!currentStep) {
        return;
    }
    deactivateSteps();
    activateCurrentStep(currentStep);
    recalcStepActiveMarkerProps();
    deactivateSlides();
    activateCurrentSlide();
});
function deactivateSteps() {
    const steps = document.querySelectorAll(`.${DOM.timelineStep}`);
    steps === null || steps === void 0 ? void 0 : steps.forEach((elem) => elem.classList.remove(`${DOM.timelineStepActive}`));
}
function activateCurrentStep(currentStep) {
    currentStep === null || currentStep === void 0 ? void 0 : currentStep.classList.add(`${DOM.timelineStepActive}`);
}
function deactivateSlides() {
    timelineSlides === null || timelineSlides === void 0 ? void 0 : timelineSlides.forEach((elem) => elem.classList.remove(`${DOM.timelineSlideActive}`));
}
function activateCurrentSlide() {
    const currentSlide = getCurrentSlide();
    if (!currentSlide) {
        return;
    }
    const currentSlideHeight = getCurrentSlideHeight(currentSlide);
    setSlideContainerHeight(currentSlideHeight);
    currentSlide.classList.add(`${DOM.timelineSlideActive}`);
}
function createStepActiveMarker() {
    const stepActiveMarker = document.createElement("div");
    stepActiveMarker.classList.add(`${DOM.timelineStepActiveMarker}`);
    timelineStepper === null || timelineStepper === void 0 ? void 0 : timelineStepper.appendChild(stepActiveMarker);
    const positionProps = getStepActiveMarkerProps();
    if (!positionProps) {
        return;
    }
    setStepActiveMarkerProps(Object.assign({ stepActiveMarker }, positionProps));
}
function recalcStepActiveMarkerProps() {
    const stepActiveMarker = timeline === null || timeline === void 0 ? void 0 : timeline.querySelector(`.${DOM.timelineStepActiveMarker}`);
    const stepActiveMarkerProps = getStepActiveMarkerProps();
    if (!stepActiveMarkerProps) {
        return;
    }
    setStepActiveMarkerProps(Object.assign({ stepActiveMarker }, stepActiveMarkerProps));
}
function setStepActiveMarkerProps({ stepActiveMarker, posX, posY, width, }) {
    stepActiveMarker.style.setProperty(`${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.width}`, `${width}px`);
    stepActiveMarker.style.setProperty(`${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.posX}`, `${posX}px`);
    if (typeof posY === "number") {
        stepActiveMarker.style.setProperty(`${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.posY}`, `${posY}px`);
    }
}
function getStepActiveMarkerProps() {
    const { currentStep } = getCurrentStep();
    if (!currentStep) {
        return null;
    }
    const width = getElementWidth(currentStep);
    const posX = getStepActiveMarkerPosX(currentStep);
    const posY = getStepActiveMarkerPosY();
    if (typeof posX !== "number" || typeof posY !== "number") {
        return null;
    }
    return { posX, posY, width };
}
function getCurrentStep() {
    const timelineSteps = Array.from(document.querySelectorAll(`.${DOM.timelineStep}`));
    const currentStep = timelineSteps.find((element) => element.classList.contains(`${DOM.timelineStepActive}`));
    const currentStepIndex = currentStep &&
        timelineSteps.findIndex((element) => element.classList.contains(`${DOM.timelineStepActive}`));
    return { currentStep, currentStepIndex };
}
function getCurrentSlide() {
    const { currentStepIndex } = getCurrentStep();
    if (typeof currentStepIndex !== "number" || !timelineSlides) {
        return null;
    }
    return timelineSlides[currentStepIndex];
}
function setSlideContainerHeight(height) {
    timelineSlidesContainer === null || timelineSlidesContainer === void 0 ? void 0 : timelineSlidesContainer.style.setProperty(`${SLIDES_CONTAINER_CUSTOM_PROPS.height}`, `${height}px`);
}
function getCurrentSlideHeight(currentSlide) {
    return currentSlide.clientHeight;
}
function getStepActiveMarkerPosY() {
    const timelineTitlePosY = timelineStepTitle === null || timelineStepTitle === void 0 ? void 0 : timelineStepTitle.getBoundingClientRect().top;
    const timelineStepperPosY = timelineStepper === null || timelineStepper === void 0 ? void 0 : timelineStepper.getBoundingClientRect().top;
    if (!timelineTitlePosY || !timelineStepperPosY) {
        return null;
    }
    return timelineTitlePosY - timelineStepperPosY;
}
function getStepActiveMarkerPosX(currentStep) {
    const timelineStepperPosX = timelineStepper === null || timelineStepper === void 0 ? void 0 : timelineStepper.getBoundingClientRect().left;
    const currentStepPosX = currentStep.getBoundingClientRect().left;
    if (!timelineStepperPosX) {
        return null;
    }
    return currentStepPosX - timelineStepperPosX;
}
function getElementWidth(elem) {
    return elem.clientWidth;
}












let txt = 'Run... Enemy INCOMMING';
let input =  document.getElementById("input");
let speed = 180;
let i = 0;

input.focus();

function typeWriter() {

  if (i < txt.length) {
    input.value += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}






(function() {
    var round_btn, square_btn;
  
    round_btn = document.querySelector(".mode .round");
  
    square_btn = document.querySelector(".mode .square");
  
    round_btn.addEventListener('click', function(evt) {
      var element, elements, i, len, results;
      elements = [document.querySelector(".facebook"), document.querySelector(".vk"), document.querySelector(".instagram"), document.querySelector(".odnoklassniki"), document.querySelector(".twitter"), document.querySelector(".whatsapp")];
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(element.classList.add("round"));
      }
      return results;
    });
  
    square_btn.addEventListener('click', function(evt) {
      var element, elements, i, len, results;
      elements = [document.querySelector(".facebook"), document.querySelector(".vk"), document.querySelector(".instagram"), document.querySelector(".odnoklassniki"), document.querySelector(".twitter"), document.querySelector(".whatsapp")];
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(element.classList.remove("round"));
      }
      return results;
    });
  
  }).call(this);










  










  