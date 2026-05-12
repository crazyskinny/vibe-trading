import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const agentPage = readFileSync(new URL("../src/pages/Agent.tsx", import.meta.url), "utf8");

test("session history requests an instant bottom jump after messages render", () => {
  assert.match(agentPage, /setPendingHistoryScroll\(true\)/);
  assert.match(agentPage, /scrollToBottomInstant\(\)/);
  assert.match(agentPage, /el\.scrollTop = el\.scrollHeight/);
});
