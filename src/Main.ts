import * as svgjs from '@svgdotjs/svg.js';
import { Widget } from './Widget';

export class Main {

  private size = [800, 600];

  private bg: svgjs.Rect;
  private root: svgjs.Svg;

  constructor() {
    this.root = svgjs.SVG().addTo('body').size(this.size[0], this.size[1]);
    this.bg = this.root.rect(this.size[0], this.size[1]).attr({ fill: '#333' });
  }

  addWidget(widget: Widget) {
    this.root.add(widget._getRoot());
  }
}
