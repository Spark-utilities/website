document.addEventListener("DOMContentLoaded", () => {
  
  document.body.style.opacity = "0";
  
  
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = "1";
  }, 50);

  
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle && heroTitle.textContent.includes("SPARK UTILITIES")) {
    const text = "SPARK UTILITIES";
    heroTitle.textContent = "";
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
  body {
    opacity: 0;
    transition: opacity 0.5s ease-out !important;
  }
  
  .btn {
    transition: transform 0.2s ease !important;
  }
  
  .feature-card, 
  .team-card, 
  .about-card, 
  .stat-card {
    transition: transform 0.2s ease !important;
  }
  
  .hero-title {
    display: inline-block;
  }
`;
document.head.appendChild(style);
