class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.particles = []
    this.particleCount = 50

    this.init()
    this.animate()

    
    window.addEventListener("resize", () => this.handleResize())
  }

  init() {
    this.resizeCanvas()
    this.createParticles()
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    this.particles = []
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle())
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height - this.canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? "#22c55e" : "#16a34a",
    }
  }

  updateParticles() {
    this.particles.forEach((particle, index) => {
      particle.y += particle.speed

      
      if (particle.y > this.canvas.height + 10) {
        this.particles[index] = this.createParticle()
        this.particles[index].y = -10
      }
    })
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle) => {
      this.ctx.save()
      this.ctx.globalAlpha = particle.opacity
      this.ctx.fillStyle = particle.color
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.restore()
    })
  }

  animate() {
    this.updateParticles()
    this.drawParticles()
    requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    this.resizeCanvas()
    this.createParticles()
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particles-canvas")
  if (canvas) {
    new ParticleSystem(canvas)
  }
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
    })
  })
})


const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
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
`
document.head.appendChild(style)
