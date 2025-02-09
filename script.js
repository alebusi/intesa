// Array di parole da selezionare
const words = [
"GIAPPONESE","GABBIA","ADAMO","LIBRETTO","TELA",
"PLUTO","SFOGLIATELLA","GHIRO","SECCHIONE",
"TARTUFO","STRAPPO","CHEF","SALSEDINE","AIUOLA",
"IMPRONTE","CUBA","ROTELLA","TAMBURO","BUFFON",
"BOTTE","MEDITERRANEA","SPOSO","DENTI","RE",
"DARE","CINQUECENTO","PEDINA","ESSE","VECCHIO",
"GIOSTRE","SATURNO","LENTICCHIE","CORPO",
"SONAGLI","UNDICI","ASSEMBLEA","NORD","TOILETTE",
"VIGILE","AVORIO","RAGGI","SPAGNOLO","SUOCERA",
"WIRELESS","TALLONE","MAIALINO","ORO","CLASSE",
"NORMANDIA","EGIZI","CARCIOFO","CINECITTA'",
"SPOGLIARELLO","BOLLO",
"PAGELLA"," GIULIETTA"," BALSAMO"," MUSCOLI",
"NILO"," FABBRO"," ARANCINO"," CATENA",
"LUNEDI"," VENDEMMIA"," GALLINA"," SENAPE",
"GARGAMELLA"," POZZO"," SABBIA"," NUDO"," SEMPRE",
"CANNOLO"," MANCIA"," TOTÒ"," LATITUDINE",
"APERITIVO"," CICALA"," CUBETTO"," APOLLO",
"ASOLA"," DIVANO"," ALPI"," ARTICOLI", 
"GIBILTERRA"," MENTA"," LETARGO"," MARATONA",
"APRIRE"," NOTTE"," INCISIVI"," TARZAN",
"FUMO"," POLTRONA"," SCOGLIO"," REGALI",
"TRIANGOLO"," CUPIDO"," REGISTA","TARTUFO"
];

// Elementi del DOM
const wordElement = document.getElementById("word");
const countdownElement = document.getElementById("countdown");
const timerElement = document.getElementById("timer");
const advanceButton = document.getElementById("advanceButton");
const countwordElement = document.getElementById("countword");

let countdownInterval; // Interval per il countdown
let timerInterval; // Interval per il timer
let isCountingDown = false; // Stato del countdown
let currentTime = 60; // Tempo iniziale del countdown
let timerTime = 0; // Timer che parte da 0 ogni volta che cambia la parola
let currentIndex = 0; // Indice per l'array delle parole
let countWord = 0;

// Funzione per iniziare o fermare il countdown
function toggleCountdown() {
    if (isCountingDown) {
        // Se il countdown è in esecuzione, fermalo
        clearInterval(countdownInterval);
        clearInterval(timerInterval);
        isCountingDown = false;
    } else {
        // Se il countdown è fermo, avvialo
        countdownInterval = setInterval(function() {
            if (currentTime > 0) {
                currentTime--;
                countdownElement.textContent = currentTime;
            } else {
                currentTime=60;
                countdownElement.textContent = currentTime;
                //clearInterval(countdownInterval);
                //isCountingDown = false;
            }
        }, 1000);
        
        // Avvia anche il timer per la parola
        timerInterval = setInterval(function() {
            timerTime++;
            timerElement.textContent = timerTime;
        }, 1000);

        isCountingDown = true;
    }
}

// Funzione per cambiare la parola
function changeWord() {
    if (!isCountingDown) { //Se non sta andando
        wordElement.textContent = words[currentIndex];
        currentIndex++;
        if (currentIndex > words.length) {
            currentIndex = 0;
        }
        // currentTime = 60;    
        countdownElement.textContent = currentTime;
        timerTime = 0;
        timerElement.textContent = timerTime;
    }
    toggleCountdown();
}

// Aggiungi un evento alla barra spaziatrice
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        changeWord();
    }
    else if (event.code === "ArrowUp") {
        countWord++;
        countwordElement.textContent = countWord;
    }
    else if (event.code === "ArrowDown") {
        if (countWord > 0) {
            countWord--;
            countwordElement.textContent = countWord;
        }
    }
});

// Funzione per avanzare di 10 parole nell'array
function advanceWords() {
    currentIndex = (currentIndex + 10) % words.length;  // Avanza di 10 parole, ma torna all'inizio se supera la lunghezza dell'array
    toggleCountdown(); // lo fermo
    changeWord();
}

// Evento del bottone per avanzare di 10 parole
advanceButton.addEventListener("click", advanceWords);

// Inizializza con la prima parola
// changeWord();