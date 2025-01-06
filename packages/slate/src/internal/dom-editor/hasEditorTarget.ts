import { DOMEditor } from 'slate-dom';

import type { Editor } from '../../interfaces/editor';

export const hasEditorTarget = (
  editor: Editor,
  target: EventTarget | null
): target is Node => {
  try {
    return DOMEditor.hasTarget(editor as any, target);
  } catch (error) {}

  return false;
};
