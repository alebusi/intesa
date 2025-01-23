// Array di parole da selezionare
const words = ["NOE","CAFFE","POMATA","RIPOSO","ZEBRA",
"BUONO","ALIANTE","VERNICE","CIPOLLA",
"AFRICANO","PORTA","CASALINGA",
"PARTENZA","CAPITANO","BOTTIGLIA",
"SOLE","PEDALI","MARTELLO","LADRO",
"OLIMPO","STRETTO",
"SCRIVANIA","RE","COGNOME","ACCIUGA",
"VIRGOLA","COLLA","PELOSO","NUBILE",
"GIARDINIERE","SPARTITO","TOVAGLIA",
"PALIO","ZUCCHINA","MARINAIO",
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
"TRIANGOLO"," CUPIDO"," REGISTA"," TARTUFO",
"SPUGNA"," HOCKEY"," PILA"," SPECCHIETTO",
"LACRIME"," NOTE"," AGO"," PRIMAVERA",
"PROSCIUTTO"," AFRICA"," TOMBOLA"," ESAME",
"INSONNIA"," SEMAFORO"," GEMELLI"," PIPA",
"CALDO"," LANCETTE"," ACQUA"," ANELLO",
"STRINGHE"," SINISTRA"," LETTO",
"CONTO","PREVISIONI","ANATROCCOLO","METÀ",
"SIENA","DICEMBRE","GILET","BRONTOLO","ARIA",
"GIOCONDA","ASCENSORE","CANDELA","SORPASSO",
"POSTERIORE","CAPPUCCIO","SALE","CANE",
"MARGHERITA","CINQUINA","LIANA","CORALLO",
"PICASSO","MATURO","SINONIMO","BERMUDA",
"DOPODOMANI","SBADIGLIO","MADRID","ATTORE",
"OCCHIOLINO","ORIZZONTALE","ABRACADABRA",
"BOLLE","STAFFETTA","OLFATTO","PREZZO",
"RISO","ROTELLA"
              ];

let countdownInterval; // Interval per il countdown
let isRunning = false; // Stato del countdown
let currentTime = 60; // Tempo iniziale del countdown
let randomIndex = 0;  // si posiziona sulla prima parola
const wordElement = document.getElementById("word");
const countdownElement = document.getElementById("countdown");

// Funzione per iniziare o fermare il countdown
function toggleCountdown() {
    if (isRunning) {
        // Se il countdown è in esecuzione, fermalo
        clearInterval(countdownInterval);
        isRunning = false;
    } else {
        // Se il countdown è fermo, avvialo
        countdownInterval = setInterval(function() {
            if (currentTime > 0) {
                currentTime--;
                countdownElement.textContent = currentTime;
            } else {
                clearInterval(countdownInterval);
                isRunning = false;
            }
        }, 1000);
        isRunning = true;
    }
}

// Funzione per cambiare la parola
function changeWord() {
    //const randomIndex = Math.floor(Math.random() * words.length);
    wordElement.textContent = words[randomIndex];
    randomIndex = randomIndex+1;
    if (randomIndex > words.length) {
        randomIndex = 0;
    }
}

// Aggiungi un evento alla barra spaziatrice
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        // Cambia la parola ogni volta che la barra spaziatrice viene premuta
        if (!isRunning) {
            changeWord();
        }

        // Avvia o ferma il countdown
        toggleCountdown();
        
        // Resetta il tempo se il countdown è stato fermato
        //if (!isRunning) {
        //    currentTime = 60;
        //    countdownElement.textContent = currentTime;
        //}
    }
});
