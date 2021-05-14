import * as svgjs from '@svgdotjs/svg.js';
import { Box } from './Box';
import { Button } from './Button';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

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


    const pages: Box[] = [];

    let pos = { x: 10, y: 60 };
    let page = new Page1(); this.add(page); pages.push(page); page.position = pos;
    page = new Page2(); this.add(page); pages.push(page); page.position = pos;

    pos = { x: 10, y: 10 };
    let btnPage1 = null;
    for (let index = 0; index < pages.length; index++) {
      let btn = new Button(); this.add(btn);
      if (!btnPage1) { btnPage1 = btn; }
      btn.label = `Page ${index + 1}`;
      btn.position = pos;
      btn.click.subscribe(() => {
        for (const page of pages) {
          page.visible = false;
        }
        pages[index].visible = true;
      });
      pos.x += btn.width + 10;
    }
    btnPage1.doClick();
  }
}
