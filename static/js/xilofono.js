const DO = new Audio("static/audio/xilofono-sounds/DO.mp3");
const RE = new Audio("static/audio/xilofono-sounds/RE.mp3");
const MI = new Audio("static/audio/xilofono-sounds/MI.mp3");
const FA = new Audio("static/audio/xilofono-sounds/FA.mp3");
const SOL = new Audio("static/audio/xilofono-sounds/SOL.mp3");
const LA = new Audio("static/audio/xilofono-sounds/LA.mp3");
const SI = new Audio("static/audio/xilofono-sounds/SI.mp3");
const DOM = new Audio("static/audio/xilofono-sounds/DOM.mp3");


/* Función */
const reproducirNota = audio =>{
    const clone =audio.cloneNode(); /* Almacenar en una constante un clon de las notas */
    clone.play(); /* reproducir el clone */
    setTimeout(()=>(clone.volume = 0), 2000);/* la nota se reproduce por 2000ms*/
};

/* invoca en el momento que accciona la tecla */
    const tocarTecla = (idTecla, nota) => { /* traigo la clase de la tecla, y la nota que son las que definimos en el inicio */
        const tecla = document.querySelector(idTecla); /*  */
        reproducirNota(nota);
        tecla.classList.add("active");
        setTimeout(()=>tecla.classList.remove("active"), 100);
    };

    /* Crear array de teclas */
const teclas = [
    {id : ".DO", nota: DO, key: 65},
    {id : ".RE", nota: RE, key: 83},
    {id : ".MI", nota: MI, key: 68},
    {id : ".FA", nota: FA, key: 70},
    {id : ".SOL", nota: SOL, key: 71},
    {id : ".LA", nota: LA, key: 72},
    {id : ".SI", nota: SI, key: 74},
    {id : ".DOM", nota: DOM, key: 75}
];
teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);
    tecla.addEventListener("click", () => tocarTecla(id, nota));
  });
  
  window.addEventListener("keydown", ({ keyCode }) => {
    const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
    if (teclaPresionada[0]) {
      const { id, nota } = teclaPresionada[0];
      tocarTecla(id, nota);
    }
  });



