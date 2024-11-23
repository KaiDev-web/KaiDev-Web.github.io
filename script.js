let randomNumber = Math.floor(Math.random() * 100) + 1; // Numero casuale tra 1 e 100  
let attempts = 0;  

document.getElementById('submit').addEventListener('click', function() {  
    let userGuess = parseInt(document.getElementById('guess').value);  
    attempts++;  
    let resultText = '';  

    if (userGuess < 1 || userGuess > 100) {  
        resultText = 'Inserisci un numero valido tra 1 e 100!';  
    } else if (userGuess < randomNumber) {  
        resultText = 'Troppo basso! Riprova.';  
    } else if (userGuess > randomNumber) {  
        resultText = 'Troppo alto! Riprova.';  
    } else {  
        resultText = `Congratulazioni! Hai indovinato il numero ${randomNumber} in ${attempts} tentativi.`;  
    }  

    document.getElementById('result').textContent = resultText;  
});
