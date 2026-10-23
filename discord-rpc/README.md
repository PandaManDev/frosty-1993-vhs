# Frosty Discord Rich Presence (Windows)

This companion app shows a Frosty-themed status in your Discord profile while it runs. GitHub Pages alone cannot set Discord Rich Presence; this local app uses Discord's desktop IPC.

## Setup

1. Install **Node.js LTS** from https://nodejs.org/ if it is not already installed.
2. Open https://discord.com/developers/applications and click **New Application**. Name it `Frosty 1993 VHS`.
3. Open the app's **General Information** page and copy the **Application ID**.
4. In this folder, copy `.env.example` to a new file named `.env`.
5. Replace the example value with your Application ID:
   ```
   DISCORD_CLIENT_ID=YOUR_APPLICATION_ID
   ```
6. Optional: in the Developer Portal, open **Rich Presence → Art Assets** and upload an image with the key `frosty`. Until you upload it, the large image may not appear.
7. Make sure the Discord **desktop app** is open and you're logged in.
8. Double-click `start.bat`. The first run installs the required package.
9. Keep the terminal open while you want the status active.

## Commands in the terminal

- `p` — Watching Frosty
- `a` — Paused / taking a break
- `r` — Reset the elapsed timer
- `q` — Clear the status and quit

The presence includes a **Watch Frosty** button linking to https://pandamandev.github.io/frosty-1993-vhs/.

## Notes

- This first version is manually controlled: it does not yet detect play/pause state in the browser automatically.
- Use a Discord application you own. Never share your Discord account token.
- If Discord doesn't show the presence, restart the desktop app and this companion.
