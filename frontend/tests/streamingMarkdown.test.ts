import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const agentPage = readFileSync(new URL("../src/pages/Agent.tsx", import.meta.url), "utf8");

test("streaming assistant text is rendered with the shared Markdown renderer", () => {
  assert.match(agentPage, /<MarkdownContent>\s*\{streamingText\}\s*<\/MarkdownContent>/);
});

test("chat markdown renderer does not load Safari-incompatible GFM regexes", () => {
  const markdownContent = readFileSync(new URL("../src/components/chat/MarkdownContent.tsx", import.meta.url), "utf8");
  const runDetail = readFileSync(new URL("../src/pages/RunDetail.tsx", import.meta.url), "utf8");

  assert.doesNotMatch(markdownContent, /remark-gfm/);
  assert.doesNotMatch(runDetail, /remark-gfm/);
});
