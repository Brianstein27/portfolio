// spotlight
const pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

// smooth scroll
const navLinks = document.querySelectorAll(".nav-section li>a");

// spy nav links
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

console.log(sections);

main.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - main.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(
      `Section: ${section.id} Top: ${sectionTop} Height: ${sectionHeight}`,
    );
    console.log('main scroll top', main.scrollTop);

    if (
      main.scrollTop >= sectionTop - 1 &&
      main.scrollTop < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
      // console.log(section, sectionTop, sectionHeight);
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});
