let keys = document.querySelectorAll(".key")
let body = document.body

const keyRel = {
    c3: "q",
    "c-3": "2",
    d3: "w",
    "d-3": "3",
    e3: "e",
    f3: "r",
    "f-3": "5",
    g3: "t",
    "g-3": "6",
    a3: "y",
    "a-3": "7",
    b3: "u",
    c4: "z",
    "c-4": "s",
    d4: "x",
    "d-4": "d",
    e4: "c",
    f4: "v",
    "f-4": "g",
    g4: "b",
    "g-4": "h",
    a4: "n",
    "a-4": "j",
    b4: "m",
}

const loadSound = function (src) {
        const sound = document.createElement("audio");
        sound.src = src;
        sound.setAttribute("preload", "auto");
        sound.setAttribute("controls", "none");
        sound.style.display = "none"; // <-- oculto
        document.body.appendChild(sound);
        return sound
}

keys.forEach(key => {
    let sound = loadSound(`./static/audio/${key.id}.ogg`)
    key.addEventListener("mousedown", ()=>{
        sound.play()
        console.log(key.id)

    })
    key.addEventListener("mouseup", ()=>{
        sound.pause()
        sound.load()

    })

    body.addEventListener("keydown", (e)=> {
        if(e.key === keyRel[key.id]) {
            sound.play()
            key.classList[key.classList.length-1] !== "active" && key.classList.toggle("active")
        }

    })

    body.addEventListener("keyup", (e)=> {
        if(e.key === keyRel[key.id]) {
            sound.pause()
            sound.load()
            key.classList.toggle("active")
        }
    })
}
)