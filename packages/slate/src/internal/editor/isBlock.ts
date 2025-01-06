import { isBlock as isBlockBase } from 'slate';

import type { Editor } from '../../interfaces/editor/editor';

import { type TElement, isElement } from '../../interfaces/element';

export const isBlock = (editor: Editor, value: any): value is TElement =>
  isElement(value) && isBlockBase(editor as any, value);
