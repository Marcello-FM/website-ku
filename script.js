// === Efek Welcome ===
window.addEventListener("load", () => {
  const name = "Marcello Frans Mardohae Pakpahan";
  const welcomeText = `Selamat datang di website ${name}! 👋`;
  console.log(welcomeText);

  // Tambahkan pop-up selamat datang (sekali per sesi)
  if (!sessionStorage.getItem("welcomeShown")) {
    alert(welcomeText);
    sessionStorage.setItem("welcomeShown", "true");
  }
});

// === Animasi tombol salin email ===
const copyButton = document.querySelector(".btn");
if (copyButton) {
  copyButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = "marcellofrans@students.usu.ac.id";
    navigator.clipboard.writeText(email)
      .then(() => {
        copyButton.textContent = "✅ Email Disalin!";
        copyButton.style.backgroundColor = "#28a745";
        setTimeout(() => {
          copyButton.textContent = "📋 Salin Email";
          copyButton.style.backgroundColor = "";
        }, 2000);
      })
      .catch(() => {
        alert("Gagal menyalin email!");
      });
  });
}

// === Tombol kembali ke atas ===
const toTopButton = document.createElement("button");
toTopButton.innerHTML = "⬆️";
toTopButton.classList.add("to-top");
document.body.appendChild(toTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Efek hover interaktif pada card ===
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.02)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
