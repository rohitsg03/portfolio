console.log("Hallo");

const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: .2
  });

  elements.forEach(el => observer.observe(el));


const button = document.getElementById("scrollen");
const section = document.getElementById("projecten");

button.addEventListener("click", () => {

  section.scrollIntoView({

    behavior: "smooth"
  });
});