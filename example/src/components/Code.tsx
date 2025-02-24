'use client';

import { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { cn } from '@/lib/utils';

interface CodeProps {
  code: string;
  className?: string;
}

export function Code({ code, className }: CodeProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('Loading...');

  useEffect(() => {
    async function highlightCode() {
      const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
          theme: 'dark-plus',
          transformers: [
            transformerCopyButton({
              visibility: 'always',
              feedbackDuration: 3000,
            }),
          ],
        })
        .use(rehypeStringify)
        .process(code);

      setHighlightedCode(String(file));
    }

    highlightCode();
  }, [code]);

  return (
    <section
      className={cn(
        'relative border overflow-auto shadow-sm',
        className
      )}
    >
      <pre className="w-full text-sm leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </section>
  );
}
