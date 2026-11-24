import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I handed your task to a background worker, and it unionized, demanded weekends off, and left a Post-it that just says 'good luck'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
