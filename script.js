function applyTheme() {
  const currentTheme = localStorage.getItem('theme');
  const profilePic = document.getElementById('profile-picture');

  if (currentTheme === 'igris') {
    document.body.classList.add('igris-theme');
    if (profilePic) {
      profilePic.src = 'download.jpeg';
    }
  } else {
    document.body.classList.remove('igris-theme');
    if (profilePic) {
      profilePic.src = 'Fotoku.jpg';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();

const themeSwitcher = document.getElementById('theme-switcher');
if (themeSwitcher) {
  themeSwitcher.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'igris') {
      localStorage.setItem('theme', 'normal');
    } else {
      localStorage.setItem('theme', 'igris');
    }
    applyTheme();
  });
}
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});

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
