import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, an out-of-office auto-reply for
// make.fun competition u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.
// Chosen after scoring 30 candidates against the judges' brief
// (biggest laugh, freshest joke, still reads like a real auto-reply):
// it subverts the most cliched corporate line every office worker knows.
const ENTRY =
  "I'm out of office until Monday. Your email is very important to me, which is why I've ignored it with such dedication.";

// Guardrail: the competition wants exactly one line. Fail loudly instead of
// silently shipping a broken multi-line entry if the text is ever edited.
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("ENTRY must be a single line with no leading/trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars) to ${outDir}`);
