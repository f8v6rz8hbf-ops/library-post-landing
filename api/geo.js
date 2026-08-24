export default function handler(req, res) {
  const country = req.headers['x-vercel-ip-country'] || ''
  const curr = country === 'US' ? 'USD' : country === 'GB' ? 'GBP' : 'EUR'
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.setHeader('Access-Control-Allow-Origin', 'https://librarypost.app')
  res.json({ curr })
}
