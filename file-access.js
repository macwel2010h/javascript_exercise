const fs = require('fs');
const path = require('path');

const repoRoot = __dirname;
const targetArg = process.argv[2];

if (!targetArg) {
  console.log('Usage: node file-access.js <relative-file-path>');
  console.log('Example: node file-access.js 01-variables-data-types/script.js');
  process.exit(1);
}

const targetPath = path.resolve(repoRoot, targetArg);

if (!targetPath.startsWith(repoRoot + path.sep)) {
  console.error('Error: Path must stay inside this repository.');
  process.exit(1);
}

if (!fs.existsSync(targetPath)) {
  console.error('Error: File does not exist.');
  process.exit(1);
}

const stat = fs.statSync(targetPath);

if (stat.isDirectory()) {
  const items = fs.readdirSync(targetPath);
  console.log(`Directory: ${targetArg}`);
  items.forEach((item) => console.log(item));
  process.exit(0);
}

const content = fs.readFileSync(targetPath, 'utf8');
console.log(content);
