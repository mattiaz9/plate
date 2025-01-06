import type { Editor, ValueOf } from '../interfaces';
import type { InsertNodesOptions } from '../interfaces/editor/editor-types';

import { getQueryOptions } from '../utils';
import { insertElements } from './insertElements';

export const insertEmptyElement = <E extends Editor>(
  editor: E,
  type: string,
  options?: InsertNodesOptions<ValueOf<E>>
) => {
  insertElements(
    editor,
    {
      children: [{ text: '' }],
      type,
    },
    getQueryOptions(editor, options)
  );
};
