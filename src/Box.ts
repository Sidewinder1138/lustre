import * as svgjs from '@svgdotjs/svg.js';
import { IRect } from "./Common";

export class Box {

  _root: svgjs.Rect;

  constructor(rect: IRect) {
    this._root = svgjs.SVG().rect(rect.size.width, rect.size.height).attr({ fill: '#f06'});
    this._root.move(rect.pos.x, rect.pos.y);
  }
}
