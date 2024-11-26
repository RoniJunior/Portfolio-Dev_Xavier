const words = ["_Back-End","_JavaScript","_Node.JS"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Velocidade de digitação (ms)
const erasingSpeed = 50; // Velocidade de apagar (ms)
const delayBetweenWords = 1000; // Intervalo entre palavras (ms)
const dynamicText = document.querySelector('.dynamic-text');

function typeWord() {
    if (charIndex < words[index].length) {
        dynamicText.textContent += words[index][charIndex];
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        dynamicText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        index = (index + 1) % words.length; // Troca para a próxima palavra
        setTimeout(typeWord, typingSpeed);
    }
}

// Inicia a animação
typeWord();

