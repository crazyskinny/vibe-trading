import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const rehypePlugins = [rehypeHighlight];

export function MarkdownContent({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none leading-relaxed prose-table:border prose-table:border-border/50 prose-th:bg-muted/30 prose-th:px-3 prose-th:py-1.5 prose-td:px-3 prose-td:py-1.5 prose-th:text-left prose-th:text-xs prose-th:font-medium prose-td:text-xs">
      <ReactMarkdown rehypePlugins={rehypePlugins}>
        {String(children ?? "")}
      </ReactMarkdown>
    </div>
  );
}
