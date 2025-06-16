document.addEventListener("DOMContentLoaded", () => {
  
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    pageContent.style.opacity = "0";
    setTimeout(() => {
      pageContent.style.transition = "opacity 0.5s ease-out";
      pageContent.style.opacity = "1";
    }, 100);
  }

  
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle && heroTitle.textContent.includes("SPARK UTILITIES")) {
    const text = "SPARK UTILITIES";
    
    heroTitle.style.opacity = "0";
    heroTitle.textContent = "";
    
    setTimeout(() => {
      heroTitle.style.opacity = "1";
      heroTitle.style.borderRight = "3px solid #22c55e";

      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        } else {
          setTimeout(() => {
            heroTitle.style.borderRight = "none";
          }, 500);
        }
      };

      typeWriter();
    }, 400);
  }

  
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.02)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  
  const cards = document.querySelectorAll(".feature-card, .team-card, .about-card, .stat-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});


const style = document.createElement("style");
style.textContent = `
  .btn {
    transition: all 0.3s ease;
  }
  
  .feature-card, .team-card, .about-card, .stat-card {
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(style);
