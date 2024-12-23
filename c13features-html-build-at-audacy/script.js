// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close-nav ");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle('change');
  console.log("click");
});
menu.addEventListener("focus", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle('change');
  });

  close.addEventListener("focus", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle('change');
  });
// End of Navbar

const podcastPlayer = document.querySelector('.podcast-player');
const navbardesk = document.querySelector('.navbar-desktop');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbardesk.classList.add('nav-active');
        podcastPlayer.classList.add('podcast-player-active');
    } else {
        navbardesk.classList.remove('nav-active');
        podcastPlayer.classList.remove('podcast-player-active');
    }
};



