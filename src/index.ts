import { Main } from "./Main";
import { Box } from "./Box";
import { Button } from "./Button";

const main = new Main();

// Boxes
{
  let x = 20;
  let y = 20;
  let hue = 200;
  for (let i = 0; i < 10; i++) {
    let box = new Box();
    box.color = `hsl(${hue}, 50%, 50%)`;
    box.position = { x, y };
    main.add(box);
    y += 60; hue += 30;
  }
}

// Buttons
{
  let x = 150;
  let y = 20;
  let btn = new Button();
  btn.label = 'Click me';
  btn.position = { x, y };
  btn.click.subscribe(() => {
    console.log('Thanks!');
  });
  main.add(btn); y += 50;

  btn = new Button();
  btn.label = "I'm a Big Boy!";
  btn.position = { x, y };
  btn.size = { width: 180, height: 60 };
  btn.click.subscribe(() => {
    if (btn.label.includes('Boy')) {
      btn.label = 'Yes I am!';
    }
    else {
      btn.label = "I'm a Big Boy!";
    }
  });
  main.add(btn);
}

// Box with Children
{
  let x = 420;
  let y = 20;

  const parent = new Box();
  parent.color = 'lightgreen';
  parent.size = { width: 350, height: 300 };
  parent.position = { x, y };
  main.add(parent);

  let box = new Box();
  box.color = 'green';
  box.position = { x: 20, y: 20 };
  parent.add(box);

  let btn = new Button();
  btn.label = 'Nudge ->';
  btn.position = { x: 100, y: 100 };
  parent.add(btn);
  btn.click.subscribe(() => {
    x += 20;
    parent.position = { x, y };
  });

  btn = new Button();
  btn.label = '<- Nudge';
  btn.position = { x: 100, y: 160 };
  parent.add(btn);
  btn.click.subscribe(() => {
    x -= 20;
    parent.position = { x, y };
  });
}
