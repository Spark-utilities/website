document.addEventListener("DOMContentLoaded", () => {
  const pageContent = document.querySelector(".page-content")

  if (pageContent) {
    
    pageContent.style.opacity = "0"
    pageContent.style.transform = "translateY(20px)"

    
    setTimeout(() => {
      pageContent.style.transition = "opacity 1s ease-out, transform 1s ease-out"
      pageContent.style.opacity = "1"
      pageContent.style.transform = "translateY(0)"
    }, 100)

    
    const animateElements = [
      { selector: ".hero-title", delay: 300, animation: "slideInUp" },
      { selector: ".hero-description", delay: 500, animation: "slideInUp" },
      { selector: ".hero-buttons", delay: 700, animation: "slideInUp" },
      { selector: ".page-title", delay: 300, animation: "slideInLeft" },
      { selector: ".page-description", delay: 500, animation: "slideInLeft" },
      { selector: ".feature-card", delay: 400, animation: "slideInUp", stagger: 200 },
      { selector: ".about-card", delay: 300, animation: "slideInUp", stagger: 150 },
      { selector: ".team-card", delay: 400, animation: "slideInUp", stagger: 200 },
      { selector: ".stat-card", delay: 500, animation: "slideInUp", stagger: 100 },
      { selector: ".coming-soon-card", delay: 400, animation: "slideInUp" },
      { selector: ".newsletter-section", delay: 600, animation: "slideInUp" },
      { selector: ".nav-link", delay: 200, animation: "slideInDown", stagger: 100 },
    ]

    animateElements.forEach(({ selector, delay, animation, stagger }) => {
      const elements = document.querySelectorAll(selector)

      elements.forEach((element, index) => {
        const elementDelay = delay + (stagger ? index * stagger : 0)

        
        element.style.opacity = "0"
        element.style.transform = getInitialTransform(animation)
        element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

        
        setTimeout(() => {
          element.style.opacity = "1"
          element.style.transform = "translateX(0) translateY(0) scale(1)"
        }, elementDelay)
      })
    })
  }
})


function getInitialTransform(animation) {
  switch (animation) {
    case "slideInUp":
      return "translateY(30px)"
    case "slideInDown":
      return "translateY(-30px)"
    case "slideInLeft":
      return "translateX(-30px)"
    case "slideInRight":
      return "translateX(30px)"
    case "scaleIn":
      return "scale(0.8)"
    default:
      return "translateY(30px)"
  }
}


const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)


document.addEventListener("DOMContentLoaded", () => {
  const scrollAnimateElements = document.querySelectorAll(".footer-section, .footer-brand")
  scrollAnimateElements.forEach((el) => {
    el.classList.add("scroll-animate")
    observer.observe(el)
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    
    button.addEventListener("mouseenter", (e) => {
      button.style.transform = "translateY(-2px) scale(1.02)"
    })

    button.addEventListener("mouseleave", (e) => {
      button.style.transform = "translateY(0) scale(1)"
    })

    button.addEventListener("click", (e) => {
      
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)

      
      button.style.transform = "translateY(-2px) scale(0.98)"
      setTimeout(() => {
        button.style.transform = "translateY(-2px) scale(1.02)"
      }, 150)
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-2px)"
    })

    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active")) {
        link.style.transform = "translateY(0)"
      }
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card, .team-card, .about-card, .stat-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)"
      card.style.boxShadow = "0 10px 25px rgba(34, 197, 94, 0.2)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
      card.style.boxShadow = "none"
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icon")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-3px) rotate(5deg) scale(1.1)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) rotate(0deg) scale(1)"
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title")

  if (heroTitle && heroTitle.textContent.includes("SPARK UTILITIES")) {
    const text = "SPARK UTILITIES"
    heroTitle.textContent = ""
    heroTitle.style.borderRight = "3px solid #22c55e"

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      } else {
        
        setTimeout(() => {
          heroTitle.style.borderRight = "none"
        }, 1000)
      }
    }

    
    setTimeout(typeWriter, 800)
  }
})


document.addEventListener("DOMContentLoaded", () => {
  const heroLogo = document.querySelector(".hero-logo-img")

  if (heroLogo) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      heroLogo.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`
    })
  }
})


const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }

    .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .feature-card, .team-card, .about-card, .stat-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .social-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-link {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-logo-img {
        transition: transform 0.1s ease-out;
    }

    
    .nav-link.active {
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
    }

    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }

    .btn-primary:hover {
        animation: pulse 2s infinite;
    }
`
document.head.appendChild(style)
