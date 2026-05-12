import assert from "node:assert/strict";
import test from "node:test";

import { shouldSubmitPromptOnKeyDown } from "../src/lib/chatInput.ts";

test("does not submit while the user is composing text with an IME", () => {
  assert.equal(
    shouldSubmitPromptOnKeyDown({
      key: "Enter",
      shiftKey: false,
      nativeEvent: { isComposing: true },
    }),
    false,
  );
});

test("submits on Enter when the user is not composing text", () => {
  assert.equal(
    shouldSubmitPromptOnKeyDown({
      key: "Enter",
      shiftKey: false,
      nativeEvent: { isComposing: false },
    }),
    true,
  );
});

test("does not submit browser IME process key events", () => {
  assert.equal(
    shouldSubmitPromptOnKeyDown({
      key: "Enter",
      keyCode: 229,
      shiftKey: false,
    }),
    false,
  );
});

test("does not submit on Shift+Enter", () => {
  assert.equal(
    shouldSubmitPromptOnKeyDown({
      key: "Enter",
      shiftKey: true,
      nativeEvent: { isComposing: false },
    }),
    false,
  );
});
