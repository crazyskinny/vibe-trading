import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const agentPage = readFileSync(new URL("../src/pages/Agent.tsx", import.meta.url), "utf8");

test("composer badges keep text from overlapping the close button", () => {
  assert.match(agentPage, /className="truncate"/);
  assert.match(agentPage, /aria-label="Clear swarm mode"/);
  assert.match(agentPage, /aria-label="Remove attachment"/);
  assert.match(agentPage, /className="shrink-0 .*hover:text-destructive/);
});
