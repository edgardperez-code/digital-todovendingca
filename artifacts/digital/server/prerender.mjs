import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { render } from "../dist/server/entry-server.js";
import { routes, siteUrl } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "..", "dist", "public");

const template = await readFile(path.join(clientDir, "index.html"), "utf-8");

for (const route of routes) {
  const appHtml = render(route.path);
  const jsonLdBlocks = (route.jsonLd ?? [])
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join("\n    ");

  const pageHtml = template
    .replaceAll("__PAGE_TITLE__", route.title)
    .replaceAll("__PAGE_DESCRIPTION__", route.description)
    .replaceAll("__PAGE_CANONICAL__", `${siteUrl}${route.path === "/" ? "/" : route.path}`)
    .replace("<!--__PAGE_JSONLD__-->", jsonLdBlocks)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outFile =
    route.path === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, `${route.path.slice(1)}.html`);

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, pageHtml, "utf-8");
  console.log(`Prerendered ${route.path} -> ${path.relative(clientDir, outFile)}`);
}

// Página 404 dedicada, servida por server/serve.mjs con status 404 para rutas desconocidas.
const notFoundHtml = render("/__not_found__");
const notFoundPage = template
  .replaceAll("__PAGE_TITLE__", "Página no encontrada | TodoVending Digital")
  .replaceAll(
    "__PAGE_DESCRIPTION__",
    "La página que buscas no existe o fue movida. Vuelve al inicio de TodoVending Digital.",
  )
  .replaceAll("__PAGE_CANONICAL__", `${siteUrl}/`)
  .replace("<!--__PAGE_JSONLD__-->", "")
  .replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);

await writeFile(path.join(clientDir, "404.html"), notFoundPage, "utf-8");
console.log("Prerendered 404 -> 404.html");
