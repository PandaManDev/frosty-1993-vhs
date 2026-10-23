# Frosty Discord Rich Presence (Windows)

This companion app shows a Frosty-themed status on your Discord profile while it runs. It uses Discord's desktop IPC, so the Discord desktop app must be open. Your Application ID is already configured in `.env.example`.

## Start it

1. Install **Node.js LTS** from https://nodejs.org/ if it is not already installed.
2. Download the project from https://github.com/PandaManDev/frosty-1993-vhs/archive/refs/heads/main.zip and extract it.
3. Open the `discord-rpc` folder.
4. Make sure the Discord **desktop app** is open and you're logged in.
5. Double-click `start.bat`. It creates `.env` automatically and installs the required package on first launch.
6. Keep the terminal open while you want the status active.

## Terminal controls

- `p` — Watching Frosty
- `a` — Paused / taking a break
- `r` — Reset the elapsed timer
- `q` — Clear the status and quit

The presence includes a **Watch Frosty** button linking to https://pandamandev.github.io/frosty-1993-vhs/.

## Optional artwork

In the Discord Developer Portal, open your application at https://discord.com/developers/applications, go to **Rich Presence → Art Assets**, and upload an image using the key `frosty`. The large image may not appear until this asset is uploaded.

## Notes

- This version is manually controlled; it does not automatically detect browser play/pause state yet.
- If Discord doesn't show the presence, restart the Discord desktop app and the companion.
- Never share your Discord account token.
