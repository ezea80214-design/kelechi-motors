import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildUsedCarGuidePdfDocument, GENERATED_PDF_FILENAME } from './src/utils/generateGuidePdf.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const DEFAULT_DEMO_WHATSAPP = '2348060677222';
const PUBLISHED_GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfB4EdbhCV1i9IZkJJUTp3QPZnGwcPjSZBRAA8Dur-EmFhUbA/viewform';

const PUBLIC_DIR = path.join(__dirname, 'public');
const GENERATED_PDF_PATH = path.join(PUBLIC_DIR, 'kelechi-motors-used-car-buying-guide.pdf');

function ensureGeneratedGuidePdf(): Buffer {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  const doc = buildUsedCarGuidePdfDocument();
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(GENERATED_PDF_PATH, pdfBuffer);
  return pdfBuffer;
}

function sanitizeWhatsappNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return DEFAULT_DEMO_WHATSAPP;
  if (digits.length === 11 && digits.startsWith('0')) {
    return `234${digits.slice(1)}`;
  }
  return digits;
}

async function startServer() {
  ensureGeneratedGuidePdf();

  const app = express();

  app.get('/api/config', (_req, res) => {
    const whatsappNumber = sanitizeWhatsappNumber(
      process.env.WHATSAPP_NUMBER || DEFAULT_DEMO_WHATSAPP
    );
    res.json({
      whatsappNumber,
      isDemoWhatsapp: whatsappNumber === DEFAULT_DEMO_WHATSAPP,
      googleFormViewUrl: PUBLISHED_GOOGLE_FORM_URL,
      googleFormEmbedUrl: `${PUBLISHED_GOOGLE_FORM_URL}?embedded=true`,
    });
  });

  app.get('/api/download-guide', (_req, res) => {
    const pdfBuffer = fs.existsSync(GENERATED_PDF_PATH)
      ? fs.readFileSync(GENERATED_PDF_PATH)
      : ensureGeneratedGuidePdf();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${GENERATED_PDF_FILENAME}"`);
    res.setHeader('Content-Length', String(pdfBuffer.length));
    res.setHeader('Cache-Control', 'no-store');
    res.send(pdfBuffer);
  });

  app.get('/kelechi-motors-used-car-buying-guide.pdf', (_req, res) => {
    const pdfBuffer = fs.existsSync(GENERATED_PDF_PATH)
      ? fs.readFileSync(GENERATED_PDF_PATH)
      : ensureGeneratedGuidePdf();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${GENERATED_PDF_FILENAME}"`);
    res.setHeader('Content-Length', String(pdfBuffer.length));
    res.send(pdfBuffer);
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Kelechi Motors server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
