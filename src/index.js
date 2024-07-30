// spotlight
const pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

// smooth scroll
document.querySelectorAll(".nav-section li>a").forEach((link) => {
  const section = document.querySelector(link.hash);

  link.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
  });
});
