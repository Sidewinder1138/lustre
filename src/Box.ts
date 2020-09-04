import * as svgjs from '@svgdotjs/svg.js';
import { IRect } from "./Common";
import { Widget } from './Widget';

export interface BoxInputs {
  rect?: IRect;
  color?: string;
}

export class Box extends Widget {

  private root: svgjs.Rect;

  constructor(inputs?: BoxInputs) {
    super();

    if (!inputs) {
      inputs = {};
    }
    if (!inputs.rect) {
      inputs.rect = { size: {width: 50, height: 50}, pos: {x: 0, y: 0}};
    }
    if (!inputs.color) {
      inputs.color = '#f06';
    }

    this.root = svgjs.SVG()
      .rect(inputs.rect.size.width, inputs.rect.size.height)
      .attr({ fill: inputs.color});

    this.root.move(inputs.rect.pos.x, inputs.rect.pos.y);
  }

  public _getRoot(): svgjs.Element {
    return this.root;
  }
}
