import * as svgjs from '@svgdotjs/svg.js';
import { Widget } from './Widget';

// TODO: Main isn't really supporting all the things a Widget can do... but we
// are leveraging Widgget's addChild() function at least...
export class Main extends Widget {

  private size = [800, 600];

  private bg: svgjs.Rect; //TODO: can probably just have user use a Box, or make Main inherit from Box?
  private root: svgjs.Svg;

  constructor() {
    super();

    this.root = svgjs.SVG().addTo('body').size(this.size[0], this.size[1]);
    this.bg = this.root.rect(this.size[0], this.size[1]).attr({ fill: '#333' });

    let fo = (this.root as any).foreignObject(400, 400);
    const div = document.createElement('div');
    div.innerHTML = '<h1>HTML Content</h1><span>This is <b>cool</b> dude!</span>';
    fo.add(div);
    fo.move(400, 200);
    fo.css('color', 'white');
    fo.css('font-family', 'sans-serif');

    let fo2 = (this.root as any).foreignObject(400, 400);
    const div2 = document.createElement('div');
    div2.innerHTML = '<h1>Other Content</h1>';
    fo2.add(div2);
    fo2.move(500, 210);
    fo2.css('color', 'gray');
    fo2.css('font-family', 'sans-serif');
  }

  // ------------------------------------------------------------------------------------
  // Widget Overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element {
    return this.root;
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

