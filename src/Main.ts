import * as svgjs from '@svgdotjs/svg.js';
import { Widget } from './Widget';
import { Widget2 } from './Widget2';

export class Main extends Widget2 {

  //private _root: svgjs.Svg;
  //private _bg: svgjs.Rect; //TODO: can probably just have user use a Box, or make Main inherit from Box?

  constructor() {
    super();

    const mainWidth = 640;
    const mainHeight = 480;

    let svgRoot = svgjs.SVG().addTo('body');
    svgRoot.size(mainWidth, mainHeight);

    //let bgRect = new svgjs.Rect();
    //bgRect.size(mainWidth, mainHeight);
    //bgRect.fill('#333');
    svgRoot.add(this.__getRoot());
    this.bgColor = '#333';
    this.size = { width: mainWidth, height: mainHeight };



   

    // const g = new svgjs.G();
    // svgRoot.add(g);
    // const b = new svgjs.Rect().fill('#ff0000');
    // g.add(b);
    // b.size(50, 25);
    // b.size(100, 25);
    // g.css('transform' , 'translate(10px, 10px)');    




    let w = new Widget2();
    w.bgColor = 'hsl(210, 100%, 60%)';
    w.x = 10;
    w.y = 10;
    w.size = { width: 120, height: 80 };
    this.add(w);

    let w2 = new Widget2();
    w.add(w2);
    w2.bgColor = 'red';
    w2.size = { width: 50, height: 50 };
    w2.x = 15;
    w2.y = 15;

    let w3 = new Widget2();
    w2.add(w3);
    w3.size = { width: 15, height: 15 };
    w3.bgColor = '#0aa';
    w3.x = 5;
    w3.y = 5;
    
    
    
    

    

  }

  // ------------------------------------------------------------------------------------
  // Widget Overrides:
  // ------------------------------------------------------------------------------------
  // public _getRoot(): svgjs.Element {
  //   return this._root;
  // }

  // protected _layout(): void {
  //   this._root.size(
  //     this.size.width,
  //     this.size.height
  //   );
  //   this._bg.size(
  //     this.size.width,
  //     this.size.height
  //   );
  // }
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

