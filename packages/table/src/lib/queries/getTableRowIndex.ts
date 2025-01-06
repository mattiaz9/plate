import type { Editor, TElement } from '@udecode/plate-common';

import { Path } from 'slate';

/** Get table row index of a cell node. */
export const getTableRowIndex = (editor: Editor, cellNode: TElement) => {
  const path = editor.api.findPath(cellNode);

  if (!path) return 0;

  const rowPath = Path.parent(path);

  return rowPath.at(-1)!;
};
