import { Main } from "./Main";
import { Box } from "./Box";
import { Button } from "./Button";

const main = new Main();
const box = new Box({
  rect: { size: {width: 140, height: 100}, pos: {x: 400, y: 400}},
  color: '#3aa'
});
main.addWidget(box);
let ticktock = false;
box.click.subscribe(() => {
  console.log('You clicked on the Box!');
  if (ticktock) {
    box.setColor('#3aa');
  }
  else {
    box.setColor('#f06');
  }
  ticktock = !ticktock;
});

const btn = new Button();
btn.data = { ticktock: false }
btn.move({ x: 100, y: 50 });
btn.label('Click me');
btn.click.subscribe(() => {
  if (btn.data.ticktock) {
    btn.label('Click me');
  }
  else {
    btn.label('Thanks!');
  }
  btn.data.ticktock = !btn.data.ticktock;
});

main.addWidget(btn);
