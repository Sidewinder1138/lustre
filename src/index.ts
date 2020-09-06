import { Main } from "./Main";
import { Box } from "./Box";
import { Button } from "./Button";

const main = new Main();

const box = new Box().color('#3aa')
  .size({ width: 140, height: 100 })
  .move({ x: 400, y: 400 });
main.addWidget(box);
let ticktock = false;
box.click.subscribe(() => {
  console.log('You clicked on the Box!');
  if (ticktock) {
    box.color('#3aa');
  }
  else {
    box.color('#f06');
  }
  ticktock = !ticktock;
});

let btn = new Button()
  .label('Click me')
  .size({ width: 200, height: 60 })
  .move({ x: 100, y: 50 })
  ;
btn.click.subscribe(() => {
  console.log('Thanks!');
});
main.addWidget(btn);

btn = new Button()
  .label('Touch Me!')
  .move({ x: 100, y: 150 })
  ;
btn.click.subscribe(() => {
  btn.label('I Like That!');
});
main.addWidget(btn);
