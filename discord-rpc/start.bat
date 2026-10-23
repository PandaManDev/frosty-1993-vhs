@echo off
cd /d "%~dp0"
echo Frosty Discord Rich Presence
if not exist .env (
  if exist .env.example (
    copy /y .env.example .env >nul
    echo Created .env using the configured Discord Application ID.
  ) else (
    echo Missing .env.example configuration file.
    pause
    exit /b 1
  )
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
