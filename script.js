// Array di parole da selezionare
const words = [
"BANCO","GIOCATORE","CANZONI","MEDIO","BOCCA",
"QUADERNO","ANDARE","ABRACADABRA","TANDEM",
"SPEZIE","CARRELLO","PEPITA","CUORI",
"CASTELLO DI SABBIA","MENSA","INTERRUTTORE",
"RAGU'","ALI","SOFFICE","DIGITALE","TAVOLA",
"POZZO","PASTICCINI","SCIROPPO","LANCETTE",
"CALMO","PUZZLE","SERENATA","FINTO","CANTINA",
"FISICA","MACCHINETTA","NESSUNO","GHIACCIOLO",
"PANORAMA","PERISCOPIO","PAGLIACCI","PEPE",
"VIVAIO","PANIFICIO","FIGLIO","PARTITA",
"SCOMMESSA","CHIARO","GIOSTRE","PIGRO",
"PROVA","AGNELLO","APPLAUSI","STATI",
"PIRATA","PULCINELLA","ZUCCHINA","AFRODITE","CARAMELLA",
"PANAMA","TIMONE","CIUCCIO","STENDINO","BANDANA",
"OLIMPIADI","RUOTA","CORNICE","TARANTELLA","MAPPAMONDO",
"SORRISO","PALESTRA","TAPPO","SQUALO","RETTORE",
"ALESSANDRIA","PUNIZIONE","STRUZZO","TURCHESE",
"CANZONE"
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