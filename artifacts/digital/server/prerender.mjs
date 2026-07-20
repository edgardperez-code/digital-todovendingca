import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { render } from "../dist/server/entry-server.js";
import { routes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "..", "dist", "public");

const template = await readFile(path.join(clientDir, "index.html"), "utf-8");

for (const { path: routePath } of routes) {
  const appHtml = render(routePath);
  const pageHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  const outFile =
    routePath === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, routePath, "index.html");

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, pageHtml, "utf-8");
  console.log(`Prerendered ${routePath} -> ${path.relative(clientDir, outFile)}`);
}
