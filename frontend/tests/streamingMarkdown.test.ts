import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const agentPage = readFileSync(new URL("../src/pages/Agent.tsx", import.meta.url), "utf8");

test("streaming assistant text is rendered with the shared Markdown renderer", () => {
  assert.match(agentPage, /<MarkdownContent>\s*\{streamingText\}\s*<\/MarkdownContent>/);
});
