// script.js

// Referencias a los elementos
const loginPage = document.getElementById('loginPage');
const lotteryPage = document.getElementById('lotteryPage');
const loginForm = document.getElementById('loginForm');
const testLuckButton = document.getElementById('testLuck');
const animationText = document.getElementById('animationText');
const resultText = document.getElementById('resultText');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');

// Simulación de un backend
const fakeBackend = {
    "12345": "ganador",
    "67890": "perdedor"
};

// Manejo del login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;

    if (fakeBackend[employeeId]) {
        loginPage.classList.add('hidden');
        lotteryPage.classList.remove('hidden');
        resultText.textContent = ''; // Reinicia el resultado
    } else {
        alert('Número de empleado no válido.');
    }
});

// Manejo del sorteo
testLuckButton.addEventListener('click', () => {
    animationText.textContent = "🎉 ¡Girando! 🎉";
    testLuckButton.disabled = true;

    // Simula un "giro" con retraso
    setTimeout(() => {
        const result = fakeBackend[Math.random() > 0.5 ? "12345" : "67890"];

        if (result === "ganador") {
            resultText.textContent = "¡Felicidades! Eres ganador 🎁";
            resultText.style.color = "green";
            winSound.play();
        } else {
            resultText.textContent = "Suerte para la próxima 😔";
            resultText.style.color = "red";
            loseSound.play();
        }

        testLuckButton.disabled = false;
        animationText.textContent = '';
    }, 3000);
});
