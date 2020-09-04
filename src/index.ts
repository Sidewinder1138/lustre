import { Main } from "./Main";
import { Box } from "./Box";

const main = new Main();
const box = new Box({
  rect: { size: {width: 220, height: 80}, pos: {x: 50, y: 50}},
  color: '#3aa'
});
main.addWidget(box);
box.click.subscribe(() => {
  console.log('You clicked on original box!');
  box.setColor('green');
});

const box2 = new Box({
  rect: { size: {width: 220, height: 80}, pos: {x: 50, y: 150}},
  color: '#a3a'
});
main.addWidget(box2);
box2.click.subscribe(() => {
  console.log('You clicked on box2!');
  box2.setColor('red');
});
