import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, IRect, ISize } from './Common';
import { Widget } from "./Widget";

export interface ButtonInputs {
  rect?: IRect;
}

export class Button extends Widget {

  private root: svgjs.G;
  private bg: svgjs.Rect;
  private label: svgjs.Text;

  constructor() {
    super();

    const size: ISize = { width: 140, height: 40 };
    const bgColor = 'hsl(210, 100%, 60%)';

    this.root = new svgjs.G();

    this.bg = new svgjs.Rect()
      .size(size.width, size.height)
      .radius(5)
      .fill(bgColor)
    this.root.add(this.bg);

    this.label = new svgjs.Text()
      .font({
        family: 'sans-serif',
        size: 20,
      })
      .plain('Click me!')
      .fill('white')

    this.root.add(this.label);
    this.label.center(0.5 * size.width, 0.5 * size.height)
  }

  public move(pos: IPosition) {
    this.root.move(pos.x, pos.y);
  }

  public _getRoot(): svgjs.Element {
    return this.root;
  }
}
