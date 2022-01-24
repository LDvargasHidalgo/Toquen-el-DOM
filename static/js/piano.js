let keys = document.querySelectorAll(".key")

const loadSound = function (fuente) {
    const sound = document.createElement("audio");
    sound.src = fuente;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none"; // <-- oculto
    document.body.appendChild(sound);
    return sound;
};

keys.forEach(key => {
    let sound = loadSound(`./static/audio/${key.id}.ogg`)
    key.addEventListener("click", ()=>{
        sound.play()
        console.log(key.id)
    })
}
)