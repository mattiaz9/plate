import type { DOMNode } from 'slate-dom';

import { DOMEditor } from 'slate-dom';

import type { Editor } from '../../interfaces/editor';

export const hasEditorDOMNode = (
  editor: Editor,
  target: DOMNode,
  options?: Parameters<typeof DOMEditor.hasDOMNode>[2]
) => {
  try {
    return DOMEditor.hasDOMNode(editor as any, target, options);
  } catch (error) {}

  return false;
};
