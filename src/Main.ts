import * as svgjs from '@svgdotjs/svg.js';
import { Widget } from './Widget';

export class Main extends Widget {

  protected _root(): svgjs.Element {
    return this._bg;
  }

  //private _root: svgjs.Svg;
  private _bg: svgjs.Rect; //TODO: can probably just have user use a Box, or make Main inherit from Box?

  constructor() {
    super();

    const mainWidth = 640;
    const mainHeight = 480;

    let svgRoot = svgjs.SVG().addTo('body');
    svgRoot.size(mainWidth, mainHeight);

    this._bg = new svgjs.Rect();
    this._bg.size(mainWidth, mainHeight);
    this._bg.fill('#333');
    svgRoot.add(this._bg);
    
    
    

    

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

