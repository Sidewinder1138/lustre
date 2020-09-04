import * as _ from "lodash";
import { printMe } from './print';

import * as svgjs from '@svgdotjs/svg.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack', 'chris'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

let draw = svgjs.SVG().addTo('body').size(300, 300);
let rect = draw.rect(100, 100).attr({ fill: '#f06' });
rect.move(50, 50);
