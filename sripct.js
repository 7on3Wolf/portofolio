const roles = ["Full Stack Developer", "Frontend Designer", "System Analyst"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 50;
const delayBetweenWords = 500;

function typeEffect() {
    const typingText = document.getElementById("typing-text");
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari input
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Format pesan untuk WhatsApp
    let whatsappMessage = `Halo, saya ${name}.%0AEmail: ${email}%0A%0A${message}`;

    // Nomor WhatsApp tujuan (ganti dengan nomor kamu)
    let phoneNumber = "6281384522087"; // Format internasional tanpa "+"

    // Redirect ke WhatsApp
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
});