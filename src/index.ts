import * as _ from "lodash";
import { printMe } from './print';
import * as svgjs from '@svgdotjs/svg.js';
import { Main } from "./Main";
import { Box } from "./Box";

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

const main = new Main();
const box = new Box({ size: {width: 220, height: 50}, pos: {x: 150, y: 50}});
main.addWidget(box);
