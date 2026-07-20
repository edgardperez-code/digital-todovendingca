import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes, siteUrl } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "dist", "public");

const rawPort = process.env.PORT;
if (!rawPort) {
  throw new Error("PORT environment variable is required but was not provided.");
}
const port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const buildDate = new Date().toISOString().slice(0, 10);

const app = express();

app.use(
  "/assets",
  express.static(path.join(publicDir, "assets"), {
    maxAge: "1y",
    immutable: true,
  }),
);

app.get("/sitemap.xml", (_req, res) => {
  const urls = routes
    .map(
      ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${routePath}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  res
    .type("application/xml")
    .send(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );
});

app.use(express.static(publicDir, { maxAge: "1h" }));

// Fallback SPA: cualquier ruta no reconocida sirve la home prerenderizada.
app.use((_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`digital.todovendingca.com listening on port ${port}`);
});
