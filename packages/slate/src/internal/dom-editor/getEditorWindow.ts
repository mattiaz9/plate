import { DOMEditor } from 'slate-dom';

import type { Editor } from '../../interfaces/editor';

export const getEditorWindow = (editor: Editor) => {
  try {
    return DOMEditor.getWindow(editor as any);
  } catch (error) {}
};
