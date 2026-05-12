export type PromptKeyEvent = {
  key: string;
  keyCode?: number;
  shiftKey: boolean;
  isComposing?: boolean;
  nativeEvent?: {
    isComposing?: boolean;
    keyCode?: number;
  };
};

export function shouldSubmitPromptOnKeyDown(event: PromptKeyEvent): boolean {
  if (event.isComposing || event.nativeEvent?.isComposing) return false;
  if (event.keyCode === 229 || event.nativeEvent?.keyCode === 229) return false;
  return event.key === "Enter" && !event.shiftKey;
}
