import * as svgjs from '@svgdotjs/svg.js';
import { Box } from './Box';
import { Widget } from './Widget';

export class Main extends Box {

  constructor() {
    super();

    const mainWidth = 640;
    const mainHeight = 480;

    const svgRoot = svgjs.SVG().addTo('body');
    svgRoot.size(mainWidth, mainHeight);
    svgRoot.add(this._group);

    this.size = { width: mainWidth, height: mainHeight }
    this.color = '#333';
    
    // Play with some widgets:
    const b = new Box();
    b.width = 100;
    b.height = 100;
    b.color = 'cornflowerblue';
    this.add(b);
    b.x = 50;
    b.y = 50;

    const b2 = new Box();
    b.add(b2);
    b2.width = 60;
    b2.height = 40;
    b2.x = 15;
    b2.y = 15;
    b2.color = 'pink';
    
    const b3 = new Box();
    b2.add(b3);
    b3.width = 10;
    b3.height = 10;
    b3.color = 'red';
    b3.x = 20;
    b3.y = 10;
    
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

