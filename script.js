const progressBar = document.querySelector("#progress-bar");
const sections = [...document.querySelectorAll("article section[id]")];
const links = [...document.querySelectorAll("#toc a")];

function updatePageState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, progress)}%`;

  const current = [...sections].reverse().find((section) => section.offsetTop <= window.scrollY + 180);
  links.forEach((link) => link.classList.toggle("active", current && link.hash === `#${current.id}`));
}

window.addEventListener("scroll", updatePageState, { passive: true });
updatePageState();
