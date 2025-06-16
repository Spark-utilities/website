// Discord invite link configuration
const DISCORD_INVITE_URL = "https://discord.gg/T4qfdjkk"

document.addEventListener("DOMContentLoaded", () => {
  const discordLinks = document.querySelectorAll("a[data-discord-link]")

  discordLinks.forEach((link) => {
    link.href = DISCORD_INVITE_URL
  })
})
