const memory = document.getElementById("memory");

const memoryForm = document.getElementById("memoryForm");
const memoryResult = document.getElementById("memoryResult");

const memoryBackButton = document.getElementById("memoryBackButton");
const printMemoryButton = document.getElementById("printMemoryButton");
const editMemoryButton = document.getElementById("editMemoryButton");

const memoryResultName = document.getElementById("memoryResultName");
const memoryResultYear = document.getElementById("memoryResultYear");
const memoryResultSong = document.getElementById("memoryResultSong");

const awards = document.getElementById("awards");

const getAwardButton = document.getElementById("getAwardButton");
const anotherAwardButton = document.getElementById("anotherAwardButton");
const awardsBackButton = document.getElementById("awardsBackButton");

const awardTitle = document.getElementById("awardTitle");
const awardDescription = document.getElementById("awardDescription");

const letters = document.getElementById("letters");

const openLetterButton = document.getElementById("openLetterButton");
const anotherLetterButton = document.getElementById("anotherLetterButton");
const lettersBackButton = document.getElementById("lettersBackButton");

const letterMessage = document.getElementById("letterMessage");
const letterText = document.getElementById("letterText");

const welcome = document.getElementById("welcome");
const profile = document.getElementById("profile");
const history = document.getElementById("history");

const enterButton = document.getElementById("enterButton");
const returnButton = document.getElementById("returnButton");
const historyBackButton = document.getElementById("historyBackButton");

const armyForm = document.getElementById("armyForm");
const resultCard = document.getElementById("resultCard");

const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const favoriteSong = document.getElementById("favoriteSong");

const backButton = document.getElementById("backButton");

const historyButton = document.createElement("button");


// BOTÓN PARA CONTINUAR A NUESTRA HISTORIA

historyButton.type = "button";
historyButton.textContent = "Continuar nuestra historia →";
historyButton.className = "profile-button";

resultCard.appendChild(historyButton);


// CAMBIAR DE BIENVENIDA A PERFIL

enterButton.addEventListener("click", () => {

    welcome.classList.remove("active");
    profile.classList.add("active");

    window.scrollTo(0, 0);

});


// VOLVER AL INICIO

returnButton.addEventListener("click", () => {

    profile.classList.remove("active");
    welcome.classList.add("active");

    resultCard.hidden = true;
    armyForm.hidden = false;

    window.scrollTo(0, 0);

});


// GENERAR RESULTADO PERSONALIZADO

armyForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const year = document.getElementById("year").value;
    const meaning = document.getElementById("meaning").value;
    const song = document.getElementById("song").value.trim();

    let title = "";
    let message = "";


    if (year === "2013-2016") {

        title = "Una historia llena de recuerdos";

        message = "Has tenido la oportunidad de acompañar muchas etapas de este camino. Seguramente hay canciones que te recuerdan a diferentes versiones de ti misma. Qué bonito conservar esos recuerdos.";

    } else if (year === "2017-2019") {

        title = "Parte de una historia especial";

        message = "Llegaste en una etapa llena de momentos inolvidables. Con el tiempo, algunas canciones dejaron de ser solamente canciones y se convirtieron en parte de tu propia historia.";

    } else if (year === "2020-2022") {

        title = "Encontraste tu propio lugar";

        message = "En algún momento de tu vida encontraste en su música algo que conectó contigo. Desde entonces, has construido recuerdos que forman parte de tu camino como ARMY.";

    } else {

        title = "Toda historia tiene un comienzo";

        message = "Tu camino como ARMY todavía tiene muchos momentos por descubrir. No importa cuándo llegaste, lo bonito es lo que cada canción puede significar para ti.";

    }


    const extraMessages = {

        music: " Para ti, la música tiene un valor especial: hay letras que llegan en el momento indicado y melodías que siempre vale la pena volver a escuchar.",

        memories: " Hay momentos que se quedan guardados en una canción. A veces basta escuchar sus primeras notas para recordar una etapa completa de tu vida.",

        motivation: " Valoras aquello que te inspira a seguir creciendo, descubrir nuevas metas y mirar tus propios sueños con más confianza.",

        experience: " Ser ARMY también está hecho de experiencias, amistades, conciertos, conversaciones y pequeños momentos que terminan significando mucho."

    };


    message += extraMessages[meaning];


    // MOSTRAR RESULTADO

    resultTitle.textContent = title;
    resultMessage.textContent = message;
    favoriteSong.textContent = song;

    armyForm.hidden = true;
    resultCard.hidden = false;

    window.scrollTo(0, 0);

});


// VOLVER A RESPONDER

backButton.addEventListener("click", () => {

    resultCard.hidden = true;
    armyForm.hidden = false;

    window.scrollTo(0, 0);

});


// IR A NUESTRA HISTORIA

historyButton.addEventListener("click", () => {

    profile.classList.remove("active");
    history.classList.add("active");

    window.scrollTo(0, 0);

});


// VOLVER AL PERFIL

historyBackButton.addEventListener("click", () => {

    history.classList.remove("active");
    profile.classList.add("active");

    window.scrollTo(0, 0);

});

// IR A CARTAS PARA ARMY

const lettersButton = document.createElement("button");

lettersButton.type = "button";
lettersButton.textContent = "Descubrir una carta sorpresa →";
lettersButton.className = "profile-button";

history.querySelector(".history-container").appendChild(lettersButton);


lettersButton.addEventListener("click", () => {

    history.classList.remove("active");
    letters.classList.add("active");

    window.scrollTo(0, 0);

});


// MENSAJES DE LAS CARTAS

const lettersMessages = [

    "Quizás llegaste a BTS por una canción, un video o por simple curiosidad. Pero, sin darte cuenta, terminaste formando parte de una historia que también tiene un poquito de ti. Gracias por estar aquí.",

    "No importa cuántos años lleves siendo ARMY. Tu forma de vivir esta experiencia es única. No necesitas demostrar cuánto sabes ni cuánto tiempo llevas. Tu historia también cuenta.",

    "Hay canciones que no necesitan explicación. Suenan y, de repente, recuerdas dónde estabas, qué sentías y quién eras cuando las escuchaste por primera vez.",

    "Ojalá nunca pierdas esa emoción de descubrir una canción nueva, reconocer una voz en los primeros segundos o emocionarte con una pequeña noticia de Bangtan.",

    "Entre teorías, traducciones, memes, conciertos y canciones repetidas mil veces, ser ARMY también significa compartir momentos con personas que entienden esa emoción.",

    "Un día mirarás atrás y recordarás todas las etapas que viviste acompañando a BTS. Algunas te harán reír, otras te traerán nostalgia. Todas serán parte de tu historia.",

    "Recordatorio importante: también tienes tus propios sueños, metas y aventuras por vivir. Que la música que amas te acompañe mientras construyes tu propio camino.",

    "Si alguna vez te preguntan por qué te gusta tanto BTS, no tienes que preparar una explicación perfecta. A veces basta con decir: porque su música significa algo para mí."

];

let lastLetterIndex = -1;


// MOSTRAR UNA CARTA

function showLetter() {

    let randomIndex;

    do {

        randomIndex = Math.floor(Math.random() * lettersMessages.length);

    } while (randomIndex === lastLetterIndex);

    lastLetterIndex = randomIndex;

    letterText.textContent = lettersMessages[randomIndex];

    letterMessage.hidden = false;
    anotherLetterButton.hidden = false;

}


// ABRIR LA PRIMERA CARTA

openLetterButton.addEventListener("click", () => {

    showLetter();

    openLetterButton.hidden = true;

});


// PEDIR OTRA CARTA

anotherLetterButton.addEventListener("click", () => {

    showLetter();

});


// VOLVER A NUESTRA HISTORIA

lettersBackButton.addEventListener("click", () => {

    letters.classList.remove("active");
    history.classList.add("active");

    window.scrollTo(0, 0);

});

// IR A PREMIOS ARMY

const awardsButton = document.createElement("button");

awardsButton.type = "button";
awardsButton.textContent = "Descubrir mis premios ARMY →";
awardsButton.className = "profile-button";

letters.querySelector(".letters-container").appendChild(awardsButton);


awardsButton.addEventListener("click", () => {

    letters.classList.remove("active");
    awards.classList.add("active");

    window.scrollTo(0, 0);

});


// LISTA DE PREMIOS

const armyAwards = [

    {
        title: "Reina del replay",
        description: "Una vez nunca es suficiente. Si una canción, presentación o video te gusta, lo vuelves a reproducir hasta perder la cuenta. Y no, todavía no te cansaste."
    },

    {
        title: "Detective de teorías",
        description: "No ves un simple detalle: ves pistas, conexiones y posibles significados. Tu imaginación trabaja horas extras cada vez que aparece una nueva teoría."
    },

    {
        title: "Memoria Bangtan",
        description: "Puedes recordar nombres de canciones, fechas, presentaciones y momentos que otros ya olvidaron. Tu memoria tiene una sección exclusiva para BTS."
    },

    {
        title: "Coleccionista oficial",
        description: "Photocards, álbumes, recuerdos y pequeños tesoros. Siempre hay espacio para una cosita más en tu colección."
    },

    {
        title: "ARMY nostálgica",
        description: "Escuchas una canción antigua y automáticamente vuelves a otra época. Tienes una colección de recuerdos que ninguna playlist puede explicar."
    },

    {
        title: "Traductora de emergencia",
        description: "Cuando aparece una publicación nueva, tu primera misión es encontrar la traducción. La información debe llegar a todas las ARMY."
    },

    {
        title: "Experta en canciones",
        description: "Reconoces una canción en sus primeros segundos y probablemente sabes qué viene después. Tu playlist tiene vida propia."
    },

    {
        title: "ARMY de corazón",
        description: "Disfrutas cada etapa a tu manera. No necesitas saberlo todo ni tener una colección enorme: tu cariño por la música también forma parte de esta historia."
    }

];

let lastAwardIndex = -1;


// DESCUBRIR PREMIO

function showAward() {

    let randomIndex;

    do {

        randomIndex = Math.floor(Math.random() * armyAwards.length);

    } while (randomIndex === lastAwardIndex);

    lastAwardIndex = randomIndex;

    awardTitle.textContent = armyAwards[randomIndex].title;

    awardDescription.textContent = armyAwards[randomIndex].description;

}


// PRIMER PREMIO

getAwardButton.addEventListener("click", () => {

    showAward();

    getAwardButton.hidden = true;
    anotherAwardButton.hidden = false;

});


// OTRO PREMIO

anotherAwardButton.addEventListener("click", () => {

    showAward();

});


// VOLVER A LAS CARTAS

awardsBackButton.addEventListener("click", () => {

    awards.classList.remove("active");
    letters.classList.add("active");

    window.scrollTo(0, 0);

});

// IR A MI RECUERDO

const memoryButton = document.createElement("button");

memoryButton.type = "button";
memoryButton.textContent = "Crear mi recuerdo →";
memoryButton.className = "profile-button";

awards.querySelector(".awards-container").appendChild(memoryButton);


memoryButton.addEventListener("click", () => {

    awards.classList.remove("active");
    memory.classList.add("active");

    window.scrollTo(0, 0);

});


// CREAR TARJETA PERSONALIZADA

memoryForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("memoryName").value.trim();
    const year = document.getElementById("memoryYear").value;
    const song = document.getElementById("memorySong").value.trim();

    memoryResultName.textContent = name || "Una ARMY especial";
    memoryResultYear.textContent = year;
    memoryResultSong.textContent = song;

    memoryForm.hidden = true;
    memoryResult.hidden = false;

    window.scrollTo(0, 0);

});


// EDITAR TARJETA

editMemoryButton.addEventListener("click", () => {

    memoryResult.hidden = true;
    memoryForm.hidden = false;

    window.scrollTo(0, 0);

});


// GUARDAR O IMPRIMIR

printMemoryButton.addEventListener("click", () => {

    window.print();

});


// VOLVER A PREMIOS

memoryBackButton.addEventListener("click", () => {

    memory.classList.remove("active");
    awards.classList.add("active");

    window.scrollTo(0, 0);

});
