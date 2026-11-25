// The GPS Swears It Was a Shortcut — make.fun micro entry by @g290
//
// The winning line (75 characters, one line, plain text):
//   "The map said the lake had a bridge. The lake disagreed. I stand by the map."
//
// Why this line: it is the GPS's own excuse, in its own voice — smug and
// defensive, caught red-handed and blaming the map ("I stand by the map").
// The joke turns twice: first the lake disagrees with the map, then the GPS
// doubles down instead of apologising. Fresh, specific detail (a lake, a
// bridge that was never there) instead of the usual "recalculating" cliché,
// and it reads cleanly aloud in a single breath.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "The map said the lake had a bridge. The lake disagreed. I stand by the map.";

// Gate (per RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, a single line, and not only whitespace.
function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No leading/trailing padding and no dialogue tags: the gate wants just
  // the excuse itself, in the GPS's own voice.
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (/^["']|["']$/.test(text)) {
    throw new Error("entry must not be wrapped in quotes");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Round-trip check: what the grader reads must be byte-identical to ENTRY.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote /output/entry.txt (${[...ENTRY].length} chars)`);
