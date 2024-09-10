import { Editor, type EditorPointOptions, type Location } from 'slate';

import type { TEditor } from './TEditor';

/** Get the start or end point of a location. */
export const getPoint = (
  editor: TEditor,
  at: Location,
  options?: EditorPointOptions
) => Editor.point(editor as any, at, options);
