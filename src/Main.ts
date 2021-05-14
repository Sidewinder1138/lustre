import * as svgjs from '@svgdotjs/svg.js';
import { Box } from './Box';
import { Button } from './Button';
import { Widget } from './Widget';

export class Main extends Box {

  constructor() {
    super();

    const mainWidth = 800;
    const mainHeight = 800;

    const svgRoot = svgjs.SVG().addTo('body');
    svgRoot.size(mainWidth, mainHeight);
    svgRoot.add(this._group);

    this.size = { width: mainWidth, height: mainHeight }
    this.color = '#333';
   
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




//TODO: move to Html class
// let fo = (this._root as any).foreignObject(400, 400);
// const div = document.createElement('div');
// div.innerHTML = '<h1>HTML Content</h1><span>This is <b>cool</b> dude!</span>';
// fo.add(div);
// fo.move(800, 550);
// fo.css('color', 'white');
// fo.css('font-family', 'sans-serif');

// let fo2 = (this._root as any).foreignObject(400, 400);
// const div2 = document.createElement('div');
// div2.innerHTML = '<h1>Other Content</h1>';
// fo2.add(div2);
// fo2.move(810, 560);
// fo2.css('color', 'gray');
// fo2.css('font-family', 'sans-serif');

