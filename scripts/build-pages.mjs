import { readdir, readFile, mkdir, rm, cp, writeFile, access } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const lessonPattern = /^module-(\d+)-lesson-(\d+)-([a-zA-Z0-9-]+)$/;
const escapeHtml = (text) => text.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

const lessons = (await readdir(root, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && lessonPattern.test(entry.name))
  .map((entry) => {
    const [, module, lesson, slug] = entry.name.match(lessonPattern);
    return { directory: entry.name, module: Number(module), lesson: Number(lesson), title: slug.replaceAll('-', ' ') };
  })
  .sort((a, b) => a.module - b.module || a.lesson - b.lesson || a.directory.localeCompare(b.directory));

if (!lessons.length) throw new Error('No lesson directories found.');
// Check the inputs before replacing the generated site.
for (const lesson of lessons) {
  const directory = path.join(root, lesson.directory);
  const manifest = JSON.parse(await readFile(path.join(directory, 'package.json'), 'utf8'));
  if (!manifest.scripts?.build) throw new Error(`Missing build script: ${lesson.directory}`);
  await access(path.join(directory, 'package-lock.json'));
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

function npm(args, cwd) {
  const result = spawnSync('npm', args, {
    cwd, stdio: 'inherit', shell: process.platform === 'win32',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`npm ${args.join(' ')} failed in ${cwd}`);
}

for (const lesson of lessons) {
  const directory = path.join(root, lesson.directory);
  console.log(`\nBuilding ${lesson.directory}`);
  if (process.argv.includes('--install')) npm(['ci'], directory);
  // Relative asset URLs work both under the repository URL and a custom domain.
  npm(['run', 'build', '--', '--base=./'], directory);
  await access(path.join(directory, 'dist', 'index.html'));
  await cp(path.join(directory, 'dist'), path.join(output, lesson.directory), { recursive: true });
}

const modules = [...new Set(lessons.map((lesson) => lesson.module))];
const sections = modules.map((module) => `
    <section id="module-${module}" aria-labelledby="heading-${module}">
      <h2 id="heading-${module}">Модуль ${module}</h2>
      <ul>${lessons.filter((lesson) => lesson.module === module).map((lesson) => `
        <li><a class="lesson" href="./${lesson.directory}/"><span>Урок ${lesson.lesson}</span><strong>${escapeHtml(lesson.title)}</strong><span class="arrow" aria-hidden="true">↗</span></a></li>`).join('')}
      </ul>
    </section>`).join('');

await writeFile(path.join(output, 'index.html'), `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Учебные задания · Mentory</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #f5f6fa; color: #202438; font-family: system-ui, sans-serif; line-height: 1.5; }
    main { max-width: 960px; margin: auto; padding: 64px 24px; }
    .eyebrow { color: #5245b5; font-weight: 700; letter-spacing: .12em; }
    h1 { font-size: clamp(2rem, 6vw, 3.5rem); line-height: 1.1; margin: 16px 0; }
    .intro { color: #5e6377; max-width: 600px; }
    nav { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0 40px; }
    nav a { color: #45389f; background: #e9e6fa; border-radius: 24px; padding: 8px 18px; text-decoration: none; }
    section { margin-top: 36px; scroll-margin-top: 24px; }
    h2 { font-size: 1.4rem; }
    ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 14px; list-style: none; padding: 0; }
    .lesson { position: relative; display: flex; flex-direction: column; gap: 8px; height: 100%; padding: 22px 42px 22px 22px; border: 1px solid #dfe1eb; border-radius: 14px; background: white; color: inherit; text-decoration: none; }
    .lesson > span:first-child { color: #626779; font-size: .85rem; }
    .lesson strong { font-size: 1.05rem; overflow-wrap: anywhere; }
    .arrow { position: absolute; top: 20px; right: 20px; color: #5245b5; }
    a:hover { border-color: #7769cf; background: #f0edff; }
    a:focus-visible { outline: 3px solid #6452ca; outline-offset: 4px; }
    footer { margin-top: 48px; color: #626779; font-size: .9rem; }
  </style>
</head>
<body>
  <main>
    <header><p class="eyebrow">MENTORY / HOMEWORKS</p><h1>Учебные задания</h1><p class="intro">Практика по React и TypeScript. Выберите урок — каждое задание открывается по отдельной ссылке, которую можно отправить на проверку.</p></header>
    <nav aria-label="Модули">${modules.map((module) => `<a href="#module-${module}">Модуль ${module}</a>`).join('')}</nav>
    ${sections}
    <footer>Заданий: ${lessons.length} · Модулей: ${modules.length}</footer>
  </main>
</body>
</html>
`);
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`\nBuilt catalog and ${lessons.length} lessons in ${output}`);
