// SLIMP SMP website interactions.
// Update the configuration below when the Minecraft server and community links are ready.
const SLIMP_CONFIG = {
  serverAddress: "", // Example: "play.slimpsmp.nl"
  discordUrl: "",    // Example: "https://discord.gg/your-invite"
  storeUrl: ""       // Example: "https://your-store.example"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const address = document.getElementById("server-address");
  const copyButton = document.getElementById("copy-ip");
  const feedback = document.getElementById("copy-feedback");

  if (SLIMP_CONFIG.serverAddress) {
    address.textContent = SLIMP_CONFIG.serverAddress;
    copyButton.disabled = false;
    copyButton.textContent = "COPY IP";
    feedback.textContent = "Java Edition server address.";
  }

  copyButton?.addEventListener("click", async () => {
    if (!SLIMP_CONFIG.serverAddress) return;
    try {
      await navigator.clipboard.writeText(SLIMP_CONFIG.serverAddress);
      copyButton.textContent = "COPIED!";
      feedback.textContent = "Server address copied to your clipboard.";
      window.setTimeout(() => { copyButton.textContent = "COPY IP"; }, 1800);
    } catch {
      feedback.textContent = "Copy unavailable. Select and copy the address above.";
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Close the mobile menu with Escape.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      nav?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
});
