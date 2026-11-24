import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The One-Line Cat Joke That Lands (make.fun): one cat joke, 128 characters,
// written to the entry file with no trailing newline.
// The joke: the cat steals an olive, bats it under the fridge, and stands
// guard for an hour — because the olive knows what it did.
// Freshness: zero verbatim hits in web search and in the field census.
const LINE =
  "My cat stole an olive from my plate, batted it under the fridge, and sat there for an hour, because the olive knows what it did.";

const CHARS = [...LINE].length;
if (CHARS < 1 || CHARS > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${CHARS} characters, outside the 1-200 gate`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const file = `${dir}/entry.txt`;
writeFileSync(file, LINE, "utf8");
chmodSync(file, 0o644);
console.log(`wrote ${file} (${CHARS} characters)`);
