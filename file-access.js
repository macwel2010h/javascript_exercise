const fs = require('fs');
const path = require('path');

const repoRoot = __dirname;
const targetArg = process.argv[2];

if (!targetArg) {
  console.log('Usage: node file-access.js <path-inside-repository>');
  console.log('Example: node file-access.js 01-variables-data-types/script.js');
  process.exit(1);
}

const targetPath = path.resolve(repoRoot, targetArg);
const relativePath = path.relative(repoRoot, targetPath);

if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
  console.error('Error: Path must stay inside this repository.');
  process.exit(1);
}

let stat;
try {
  stat = fs.statSync(targetPath);
} catch {
  console.error('Error: Path does not exist.');
  process.exit(1);
}

if (stat.isDirectory()) {
  const items = fs.readdirSync(targetPath);
  console.log(`Directory: ${targetArg}`);
  items.forEach((item) => console.log(item));
  process.exit(0);
}

const content = fs.readFileSync(targetPath, 'utf8');
console.log(content);
