import * as svgjs from '@svgdotjs/svg.js';
import { Widget } from './Widget';

export class Main {

  private size = [800, 600];

  private bg: svgjs.Rect;
  private root: svgjs.Svg;

  constructor() {
    this.root = svgjs.SVG().addTo('body').size(this.size[0], this.size[1]);
    this.bg = this.root.rect(this.size[0], this.size[1]).attr({ fill: '#333' });

    let fo = (this.root as any).foreignObject(400, 400);


    const btn = document.createElement('button');
    btn.innerHTML = 'Thingie';
    fo.add(btn);
    fo.move(400, 300);
  }

  addWidget(widget: Widget) {
    this.root.add(widget._getRoot());
  }
}


// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
//   element.innerHTML = _.join(['Hello', 'webpack', 'chris'], ' ');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   return element;
// }
// document.body.appendChild(component());