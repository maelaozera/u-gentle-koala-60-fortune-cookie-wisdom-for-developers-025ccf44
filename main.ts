// Fortune Cookie Wisdom for Developers.
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt, where the judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The bug you cannot reproduce is teaching you patience; " +
  "the one you can is teaching you humility.";

// The gate requires 1 to 120 characters of UTF-8 text, not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune is ${FORTUNE.length} characters; the gate allows 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
