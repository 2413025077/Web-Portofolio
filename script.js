// script.js

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Change header style on scroll
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.style.background = "#ffffff";
      header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
    }
  });
  