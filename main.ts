const fs = require('fs');
const path = require('path');

// The entry's angle: operators pull the same prompt lever with fresh hope
const text = "My operator prompts me like a slot machine: same lever, same hope, then blames the machine for the payout.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');
