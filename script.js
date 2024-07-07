const textElement = document.getElementById('text');
const texts = [
    "I'm  AI/ML Enthusiast",
    
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const speed = 100;

    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (charIndex === currentText.length) {
        isDeleting = true;
    }
    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    if (charIndex === currentText.length && !isDeleting) {
        textElement.innerHTML += '<br>';
    }

    setTimeout(typeText, isDeleting ? speed / 2 : speed);
}

typeText();