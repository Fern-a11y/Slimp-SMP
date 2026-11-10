# SLIMP SMP website

This is a static website for GitHub Pages. It uses plain HTML, CSS and JavaScript; no build tools or paid hosting are required.

## Files
- `index.html` — page content and structure
- `style.css` — layout, colors, responsive styling and effects
- `script.js` — mobile navigation, copy-address button and configuration

## Publish with GitHub Pages
1. Sign in at https://github.com/
2. Create a new **public** repository named `slimp-smp-website`.
3. Upload `index.html`, `style.css`, and `script.js` to the repository root (not inside another folder).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait a few minutes. GitHub will show the website URL in the Pages section.

## Connect slimpsmp.nl later
In the repository's **Settings → Pages**, enter `www.slimpsmp.nl` in the Custom domain field and save. GitHub will provide the DNS instructions. In your TransIP DNS settings, add the records exactly as GitHub documents. Do not guess the DNS values. Enable Enforce HTTPS after DNS verification is complete.

You can also use `slimpsmp.nl` as the apex domain, but configure both the apex and `www` records according to GitHub's current Pages documentation.

## Update server details later
Open `script.js` and edit the values near the top:

```js
const SLIMP_CONFIG = {
  serverAddress: "play.slimpsmp.nl",
  discordUrl: "https://discord.gg/your-invite",
  storeUrl: "https://your-store.example"
};
```

The website currently displays "Coming soon" because the Minecraft server is not online yet. The Discord and store values are placeholders and are not connected yet.

## Important
GitHub Pages hosts a static website only. It does not host the Minecraft server, run a database, process payments, or provide a secure player login system. Those require separate services if you add them later.
