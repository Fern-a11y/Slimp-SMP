
function copyIP() {
  const ip = "play.slimpsmp.nl";

  navigator.clipboard.writeText(ip)
    .then(() => {
      document.getElementById("copy-status").textContent =
        "Server IP copied!";
    })
    .catch(() => {
      document.getElementById("copy-status").textContent =
        "Server IP: " + ip;
    });
}
