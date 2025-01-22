// Array di parole da selezionare casualmente
const words = ["Gatto", "Albero", "Sole", "Mare", "Auto", "Cielo", "Montagna", "Libro", "Cane", "Fiume"];

let countdownInterval; // Interval per il countdown
let isRunning = false; // Stato del countdown
let currentTime = 60; // Tempo iniziale del countdown
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
    const randomIndex = Math.floor(Math.random() * words.length);
    wordElement.textContent = words[randomIndex];
}

// Aggiungi un evento alla barra spaziatrice
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        // Cambia la parola ogni volta che la barra spaziatrice viene premuta
        changeWord();

        // Avvia o ferma il countdown
        toggleCountdown();
        
        // Resetta il tempo se il countdown è stato fermato
        //if (!isRunning) {
        //    currentTime = 60;
        //    countdownElement.textContent = currentTime;
        //}
    }
});
