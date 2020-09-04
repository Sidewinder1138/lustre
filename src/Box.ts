import * as svgjs from '@svgdotjs/svg.js';
import { IRect } from "./Common";
import { Widget } from './Widget';
import { Observable, Subject } from 'rxjs';

export interface BoxInputs {
  rect?: IRect;
  color?: string;
}

export class Box extends Widget {

  click: Observable<void>;

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

    this.root = new svgjs.Rect()
      .size(inputs.rect.size.width, inputs.rect.size.height)
      .move(inputs.rect.pos.x, inputs.rect.pos.y)
      .attr({ fill: inputs.color});

    this.click = new Subject<void>();

    this.root.click(() => {
      (this.click as Subject<void>).next();
    });
  }

  public _getRoot(): svgjs.Element {
    return this.root;
  }
}
