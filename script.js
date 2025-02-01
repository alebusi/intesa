// Array di parole da selezionare
const words = [
"CARTINA","OMBRA","PAESE","POZZANGHERA",
"PAGLIACCIO","GUARDAROBA","NOTAIO","BESCIAMELLA",
"CINEPANETTONE","SIMONA VENTURA","ASTRONOMIA",
"BRETELLE","NUDO","OMEGA","CIUFFO",
"ZOLLETTA","ANNIBALE","SCHERMO","COPPA",
"STEREO","SEMAFORO ROSSO","STELLA COMETA","LUGLIO",
"CUGINI",
"ZOLLETTA","SECCHIO","RETRO","SEDANO","ANIENE",
"DIAMANTE","SEDE","PODIO","SPALLINE","PROVINCIA",
"STAGNO","AIA","OTTIMO","BUONANOTTE",
"UOVO DI PASQUA","DISPARI","SEGRETARIA","BACCO",
"BISCOTTI","PENTAGRAMMA","PEDINA","PROTAGONISTA",
"PRESSIONE","BOREALE","BONSAI","ASTRO","PUBBLICITA",
"ANGELO","CENTENARIO","PEPERONE","MUSERUOLA",
"SCIROCCO","SPADA","CENTIMETRO","TIRAMISU",
"OZONO","PETALI","PENNARELLO","PITAGORA",
"PAROLE","SCUOLA","SOTTOTITOLI","DATA","ADRIATICO",
"AIUOLA","SCOIATTOLO","SORTEGGIO","ANNIVERSARIO",
"CARTOLERIA","CAMPANELLA","AGRUMI","PEDONE",
"VERGINE","FORMAGGIO","SUSHI"
];

// Elementi del DOM
const wordElement = document.getElementById("word");
const countdownElement = document.getElementById("countdown");
const timerElement = document.getElementById("timer");
const advanceButton = document.getElementById("advanceButton");

let countdownInterval; // Interval per il countdown
let timerInterval; // Interval per il timer
let isCountingDown = false; // Stato del countdown
let currentTime = 60; // Tempo iniziale del countdown
let timerTime = 0; // Timer che parte da 0 ogni volta che cambia la parola
let currentIndex = 0; // Indice per l'array delle parole

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
changeWord();