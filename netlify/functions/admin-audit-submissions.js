const fs = require('fs');
const path = require('path');

exports.handler = async function (event) {
  const auth = event.headers['authorization'] || '';
  const expected = 'Basic ' + Buffer.from(`${process.env.ADMIN_USER}:${process.env.ADMIN_PASS}`).toString('base64');

  if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS || auth !== expected) {
    return {
      statusCode: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      body: 'Authentication required'
    };
  }

  const filePath = path.join(__dirname, '..', '..', 'data', 'audit-submissions.json');
  let entries = [];
  if (fs.existsSync(filePath)) {
    try {
      entries = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (!Array.isArray(entries)) entries = [];
    } catch (err) {
      entries = [];
    }
  }

  const escapeHtml = (str) => String(str || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const rows = entries.slice().reverse().map((e) =>
    `<tr><td>${escapeHtml(e.name)}</td><td>${escapeHtml(e.email)}</td><td>${escapeHtml(e.submittedAt)}</td></tr>`
  ).join('');

  const tableOrEmpty = entries.length
    ? `<table><thead><tr><th>Name</th><th>Email</th><th>Submitted</th></tr></thead><tbody>${rows}</tbody></table>`
    : '<p>No submissions have been recorded yet.</p>';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Audit Submissions Admin | Online Digital Fortress</title>
  <link rel="stylesheet" href="/assets/css/styles.css" />
  <style>
    body { padding: 40px 24px; }
    .admin-shell { max-width: 1100px; margin: 0 auto; }
    .admin-card { background: #fff; border: 1px solid #d8d4cb; padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.04); }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px 10px; border-bottom: 1px solid #e8e4db; text-align: left; font-size: 14px; }
    th { font-family: "Inter", Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.08em; color: #7a7a72; }
  </style>
</head>
<body>
  <div class="admin-shell">
    <div class="admin-card">
      <p class="section-eyebrow">Admin view</p>
      <h1 class="section-headline">Audit Submissions</h1>
      ${tableOrEmpty}
    </div>
  </div>
</body>
</html>`
  };
};
