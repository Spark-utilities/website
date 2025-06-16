function getImage(id) {
  
  if (!id || id.trim() === "") {
    showError("Please enter an emoji ID")
    return
  }

  
  const cleanId = id.replace(/\D/g, "")
  if (cleanId.length < 17 || cleanId.length > 19) {
    showError("Invalid emoji ID. Discord emoji IDs are typically 18 digits long.")
    return
  }

  
  let format = "png" // default
  if (document.getElementById("png").checked) format = "png"
  if (document.getElementById("jpg").checked) format = "jpg"
  if (document.getElementById("gif").checked) format = "gif"

  
  showLoading()

  
  const imageUrl = `https://cdn.discordapp.com/emojis/${cleanId}.${format}`

  
  const testImg = new Image()
  testImg.crossOrigin = "anonymous"

  testImg.onload = () => {
    showResult(imageUrl, cleanId, format)
  }

  testImg.onerror = () => {
    showError(`Could not find emoji with ID: ${cleanId}. Please check the ID and try again.`)
  }

  testImg.src = imageUrl
}

function showResult(imageUrl, id, format) {
  const resultContainer = document.getElementById("result")

  resultContainer.innerHTML = `
        <div class="result-image">
            <img src="${imageUrl}" alt="Discord Emoji ${id}" />
            <div class="result-actions">
                <a href="${imageUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                    Open in New Tab
                </a>
                <button onclick="downloadImage('${imageUrl}', '${id}', '${format}')" class="btn btn-outline">
                    <i class="fas fa-download"></i>
                    Download Image
                </button>
                <button onclick="copyToClipboard('${imageUrl}')" class="btn btn-outline">
                    <i class="fas fa-copy"></i>
                    Copy URL
                </button>
            </div>
        </div>
    `
}

function showError(message) {
  const resultContainer = document.getElementById("result")

  resultContainer.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        </div>
    `
}

function showLoading() {
  const resultContainer = document.getElementById("result")

  resultContainer.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <span>Loading emoji...</span>
        </div>
    `
}

function downloadImage(url, id, format) {
  const link = document.createElement("a")
  link.href = url
  link.download = `discord-emoji-${id}.${format}`
  link.target = "_blank"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      
      const button = event.target.closest("button")
      const originalText = button.innerHTML
      button.innerHTML = '<i class="fas fa-check"></i> Copied!'
      button.classList.add("btn-success")

      setTimeout(() => {
        button.innerHTML = originalText
        button.classList.remove("btn-success")
      }, 2000)
    })
    .catch(() => {
      
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)

      alert("URL copied to clipboard!")
    })
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".extractor-form")
  const input = document.getElementById("itemId")

  
  input.addEventListener("input", function () {
    const value = this.value.replace(/\D/g, "")
    if (value !== this.value) {
      this.value = value
    }
  })

  
  input.addEventListener("input", function () {
    if (this.value.trim() === "") {
      document.getElementById("result").innerHTML = `
                <div class="result-placeholder">
                    <i class="fas fa-search"></i>
                    <p>Enter an emoji ID and select a format to extract the image</p>
                </div>
            `
    }
  })
})


const style = document.createElement("style")
style.textContent = `
    .btn-success {
        background: #22c55e !important;
        color: #ffffff !important;
        border-color: #22c55e !important;
    }
`
document.head.appendChild(style)
