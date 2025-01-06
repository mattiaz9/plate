import { marks } from 'slate';

import type { Editor } from '../../interfaces/editor/editor';
import type { MarksOf } from '../../interfaces/text/TText';

export const getMarks = <E extends Editor>(editor: E) =>
  marks(editor as any) as MarksOf<E> | null;
