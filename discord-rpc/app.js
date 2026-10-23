const RPC = require('discord-rpc');
const readline = require('node:readline');

// Application IDs are public identifiers, not account secrets.
const CLIENT_ID = process.env.DISCORD_CLIENT_ID || '1563282447569785003';
const SITE_URL = 'https://pandamandev.github.io/frosty-1993-vhs/';
const rpc = new RPC.Client({ transport: 'ipc' });
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function showStartupScreen() {
  console.clear();
  console.log('');
  console.log('  ❄  F R O S T Y   D I S C O R D   R P C');
  console.log('  ───────────────────────────────────────');
  console.log('       1993 VHS  •  WINTER ARCHIVE');
  console.log('');
  console.log('  Connecting to Discord desktop...');
  console.log('');
}

if (!CLIENT_ID || CLIENT_ID === 'PASTE_YOUR_DISCORD_APPLICATION_ID_HERE') {
  console.error('\nSetup needed: set DISCORD_CLIENT_ID in .env.');
  console.error('See README.md for setup instructions.\n');
  process.exit(1);
}

RPC.register(CLIENT_ID);
let startedAt = Date.now();
showStartupScreen();

async function setPresence(details = 'Classic holiday viewing') {
  try {
    await rpc.setActivity({
      details,
      state: 'Frosty the Snowman • 1993 VHS',
      startTimestamp: startedAt,
      largeImageKey: 'frosty',
      largeImageText: 'Frosty 1993 VHS',
      buttons: [{ label: 'Watch Frosty', url: SITE_URL }],
      instance: false
    });
    console.log('Discord Rich Presence updated: ' + details);
  } catch (err) {
    console.error('Could not update Discord presence:', err.message);
  }
}

rpc.on('ready', async () => {
  console.log('\nFrosty Discord Rich Presence is connected.');
  await setPresence();
  console.log('\nCommands:');
  console.log('  p = Watching / playing');
  console.log('  a = Paused / away');
  console.log('  r = Reset elapsed timer');
  console.log('  q = Quit\n');
  rl.on('line', async line => {
    const cmd = line.trim().toLowerCase();
    if (cmd === 'p') await setPresence('Watching Frosty');
    else if (cmd === 'a') await setPresence('Paused • taking a break');
    else if (cmd === 'r') { startedAt = Date.now(); await setPresence(); }
    else if (cmd === 'q') { await rpc.clearActivity().catch(() => {}); rpc.destroy(); rl.close(); process.exit(0); }
    else console.log('Use p, a, r, or q.');
  });
});

rpc.on('error', err => console.error('Discord RPC error:', err.message));
rpc.login({ clientId: CLIENT_ID }).catch(err => {
  console.error('\nCould not connect to Discord. Make sure the Discord desktop app is open and you are logged in.');
  console.error(err.message);
  process.exit(1);
});
