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

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dropdownToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownIcon = document.getElementById("dropdownIcon");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("hidden");
        dropdownIcon.classList.toggle("rotate-180");
    });

    // Tutup dropdown jika klik di luar
    document.addEventListener("click", function (event) {
        if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
            dropdownIcon.classList.remove("rotate-180");
        }
    });
});

function formatCurrency(input) {
    let value = input.value.replace(/\D/g, "");
    input.value = new Intl.NumberFormat("id-ID").format(value);
}

function hitungGaji() {
    let gaji = parseFloat(document.getElementById("gaji").value.replace(/\./g, "")) || 0;
    let tunjangan = parseFloat(document.getElementById("tunjangan").value.replace(/\./g, "")) || 0;
    let totalGaji = gaji + tunjangan;
    let pajak = totalGaji * 0.05;
    let bpjs = totalGaji * 0.01;
    let gajiBersih = totalGaji - pajak - bpjs;

    document.getElementById("totalGaji").innerText = `Rp ${totalGaji.toLocaleString("id-ID")}`;
    document.getElementById("pajak").innerText = `Rp ${pajak.toLocaleString("id-ID")}`;
    document.getElementById("bpjs").innerText = `Rp ${bpjs.toLocaleString("id-ID")}`;
    document.getElementById("gajiBersih").innerText = `Rp ${gajiBersih.toLocaleString("id-ID")}`;
    document.getElementById("hasil").classList.remove("hidden");
}

document.getElementById("scrollToTop").addEventListener("click", function (event) {
    event.preventDefault();
    smoothScrollToTop();
});

function smoothScrollToTop() {
    const scrollStep = -window.scrollY / 50; // Langkah kecil untuk smooth scrolling
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval); // Hentikan saat mencapai atas
        }
    }, 10); // Perubahan kecil setiap 10ms untuk efek lebih halus
}