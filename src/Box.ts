import * as svgjs from '@svgdotjs/svg.js';
import { IRect } from "./Common";
import { Widget } from './Widget';

export class Box extends Widget {

  private root: svgjs.Rect;

  constructor(rect: IRect) {
    super();
    this.root = svgjs.SVG().rect(rect.size.width, rect.size.height).attr({ fill: '#f06'});
    this.root.move(rect.pos.x, rect.pos.y);
  }

  public _getRoot(): svgjs.Element {
    return this.root;
  }
}
