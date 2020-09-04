import * as _ from "lodash";
import { printMe } from './print';
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
const box = new Box({
  rect: { size: {width: 220, height: 80}, pos: {x: 50, y: 50}},
  color: '#3aa'
});
main.addWidget(box);

const box2 = new Box({
  rect: { size: {width: 220, height: 80}, pos: {x: 50, y: 150}},
  color: '#a3a'
});
main.addWidget(box2);
