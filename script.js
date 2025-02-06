// Array di parole da selezionare
const words = [
"NUOVA SESSIONE",
"LANCETTE","MARTE","JOLLY","CUCU'","MAGLIETTA",
"CONTRO","DATA","RISVOLTINO","REPUBBLICA",
"POSTER","OCCIDENTALE",
"NUOVA SESSIONE",
"GRADINI","SPALLE",
"SCOLARO","PRESENTATORE","ASTA","VELO",
"AGRIGENTO","OMBRA","FOGLIETTO","ENOTECA",
"VENTRILOQUO","GABBIA","TUTTO","MATEMATICA",
"RICCIOLI","SEGRETO","PORTAFORTUNA","LISCIO",
"PUNTEGGIO 13",
"NUOVA SESSIONE",
"GIACCA","SICILIA","CARROZZINA","GIANDUIOTTO",
"ORTAGGI","POLLICE","MILLIMETRO","BETLEMME",
"MULO","ESEMPIO","NUBILE","SCHERMA","INTERESSI",
"CHICCO","NERO","CASSA",
"PUNTEGGIO 3",
"NUOVA SESSIONE",
"ORIZZONTE","GIUSTIZIA","DESTRA","CAPILLARI",
"PINO","ENEA","NUOTO","FRULLATORE","FA",
"GONGOLO","SCIENTIFICO","DIRETTA","CABRIOLET",
"QUADRATO",
"PUNTEGGIO 6",
"NUOVA SESSIONE CAMPIONI 1",
"STUDENTE","DINOSAURO","AUTOMATICO","GAMBERO",
"LIMA","BRACIERE","PISELLI","INNAFFIATOIO",
"MINATORE","POCAHONTAS","GOMITI","SEQUOIA",
"ASCOLI","ELMETTO","LAVANDERIA","GIAVELLOTTO",
"PUNTEGGIO 9",
"NUOVA SESSIONE CAMPIONI 2",
"AUTOSTRADA","OMBRELLONE","BIONDO","DICIANNOVE",
"GRATIS","CAMOMILLA","GIORNALE","IBAN","CLIENTE",
"INTERNO","SPERANZA","MINISTERO","REBUS","FONZIE",
"BEDUINO","ASTEMIO","CHECK-OUT","PALLONETTO",
"LAMPONI",
"PUNTEGGIO 12"
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
        countWord--;
        countwordElement.textContent = countWord;
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