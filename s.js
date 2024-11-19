export default function handler(req, res) {
    const { s } = req.query;
    if (!s) {
        res.status(400).send('Missing base64 parameter.');
        return;
    }
    try {
        const decodedUrl = Buffer.from(decodeURIComponent(s), 'base64').toString('utf-8');
        res.writeHead(302, { Location: decodedUrl });
        res.end();
    } catch (e) {
        res.status(400).send('Invalid base64 string.');
    }
}
