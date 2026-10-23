@echo off
cd /d "%~dp0"
echo Frosty Discord Rich Presence
if not exist .env (
  echo Missing .env file. Copy .env.example to .env and add your Discord Application ID.
  pause
  exit /b 1
)
for /f "usebackq tokens=1,* delims==" %%A in (".env") do if "%%A"=="DISCORD_CLIENT_ID" set DISCORD_CLIENT_ID=%%B
if not defined DISCORD_CLIENT_ID (
  echo DISCORD_CLIENT_ID is missing in .env
  pause
  exit /b 1
)
where node >nul 2>nul || (echo Install Node.js LTS first: https://nodejs.org/ & pause & exit /b 1)
if not exist node_modules call npm install
set DISCORD_CLIENT_ID=%DISCORD_CLIENT_ID%
npm start
pause
