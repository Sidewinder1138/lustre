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
btn.label('Click me').move({ x: 100, y: 50 });
btn.click.subscribe(() => {
  console.log('Thanks!');
});
main.addWidget(btn);

const btn2 = new Button();
btn2.label('Touch Me!').move({ x: 100, y: 150 });
btn2.click.subscribe(() => {
  btn2.label('I Like That!');
});
main.addWidget(btn2);
