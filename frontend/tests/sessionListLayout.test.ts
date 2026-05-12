import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync(new URL("../src/components/layout/Layout.tsx", import.meta.url), "utf8");

test("session titles leave room for edit and delete actions", () => {
  assert.match(layout, /<span className="min-w-0 flex-1 truncate">/);
  assert.match(layout, /className="pointer-events-auto p-1 text-muted-foreground/);
  assert.match(layout, /className="absolute right-1 flex shrink-0/);
});
