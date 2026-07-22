const fs = require('fs');
const path = require('path');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
  const isFormEncoded = contentType.includes('application/x-www-form-urlencoded');

  if (!isFormEncoded) {
    return { statusCode: 400, body: 'Expected form-encoded data' };
  }

  const params = new URLSearchParams(event.body || '');
  const name = (params.get('name') || '').trim();
  const email = (params.get('email') || '').trim();

  if (!name || !email) {
    return { statusCode: 400, body: 'Name and email are required' };
  }

  const filePath = path.join(__dirname, '..', '..', 'data', 'audit-submissions.json');
  const dataDir = path.dirname(filePath);

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let entries = [];
  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      entries = JSON.parse(raw);
      if (!Array.isArray(entries)) entries = [];
    } catch (err) {
      entries = [];
    }
  }

  entries.push({
    name,
    email,
    submittedAt: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
