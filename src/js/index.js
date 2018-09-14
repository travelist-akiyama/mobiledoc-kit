import Editor from './editor/editor';
import * as UI from './editor/ui';
import ImageCard from './cards/image';
import Range from './utils/cursor/range';
import Position from './utils/cursor/position';
import Error from './utils/mobiledoc-error';
import VERSION from './version';

import mobiledocRenderer from './renderers/mobiledoc';
import HTMLParser from './parsers/html';
import DOMParser from './parsers/dom';
import Builder from './models/post-node-builder';

const Mobiledoc = {
  Editor,
  UI,
  ImageCard,
  Range,
  Position,
  Error,
  HTMLParser,
  DOMParser,
  mobiledocRenderer,
  Builder,
  VERSION
};

export function registerGlobal(global) {
  global.Mobiledoc = Mobiledoc;
}

export { Editor, UI, Range, Position, HTMLParser, DOMParser, mobiledocRenderer, Builder };
export default Mobiledoc;
