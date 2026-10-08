import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const output = join(root, "dist");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ["index.html", "learn-german-course.html", "Capture.JPG", "manifest.webmanifest", "sw.js"]) {
  await cp(join(root, file), join(output, file));
}
await cp(join(root, "icons"), join(output, "icons"), { recursive: true });

const appPage = join(output, "learn-german-course.html");
const html = await readFile(appPage, "utf8");
if (!html.includes("./native-speech.js")) {
  await writeFile(appPage, html.replace("</head>", "<script type=\"module\" src=\"./native-speech.js\"></script>\n</head>"));
}

await build({
  entryPoints: [join(root, "scripts", "native-speech.mjs")],
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  outfile: join(output, "native-speech.js")
});

console.log("Built native web assets in dist/");