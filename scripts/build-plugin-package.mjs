import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginDirectory = join(root, "plugins", "automation-exporter-editor");
const plugin = JSON.parse(await readFile(join(pluginDirectory, "atlas-plugin.json"), "utf8"));
const repository = JSON.parse(await readFile(join(root, "repository.json"), "utf8"));
const packageName = `atlas-plugin-automation-exporter-editor-${plugin.version}.atlas-plugin.json`;
const includedFiles = [
  ["atlas-plugin.json", "application/json"],
  ["README.md", "text/markdown"],
  ["index.html", "text/html"],
  ["styles.css", "text/css"],
  ["app.js", "text/javascript"],
  ["icon.svg", "image/svg+xml"],
  ["preview.svg", "image/svg+xml"],
];

const installPackage = {
  kind: "atlas.runtime.plugin.install-package",
  filename: packageName,
  plugin: {
    id: plugin.id,
    name: plugin.name,
    nameI18n: plugin.nameI18n,
    version: plugin.version,
    description: plugin.description,
    descriptionI18n: plugin.descriptionI18n,
    icon: plugin.icon,
    preview: plugin.preview,
    extensionPoints: [],
    provides: plugin.capabilities,
  },
  files: await Promise.all(includedFiles.map(async ([name, mediaType]) => ({
    path: name,
    mediaType,
    content: await readFile(join(pluginDirectory, name), "utf8"),
  }))),
};

if (repository.plugins.length !== 1 || repository.plugins[0].id !== plugin.id) {
  throw new Error("The repository catalog must contain exactly this plugin.");
}
repository.plugins[0].package = `./plugins/automation-exporter-editor/${packageName}`;
await writeFile(join(pluginDirectory, packageName), `${JSON.stringify(installPackage, null, 2)}\n`, "utf8");
await writeFile(join(root, "repository.json"), `${JSON.stringify(repository, null, 2)}\n`, "utf8");
console.log(`Built plugins/automation-exporter-editor/${packageName}`);
