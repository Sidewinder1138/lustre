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
    box.setColor(`hsl(${hue}, 50%, 50%)`);
    box.setPosition({ x, y });
    main.addChild(box);
    y += 60; hue += 30;
  }
}

// Buttons
{
  let x = 150;
  let y = 20;
  let btn = new Button();
  btn.setLabel('Click me');
  btn.setPosition({ x, y });
  btn.click.subscribe(() => {
    console.log('Thanks!');
  });
  main.addChild(btn); y += 50;

  btn = new Button();
  btn.setLabel("I'm a Big Boy!");
  btn.setPosition({ x, y });
  btn.setSize({ width: 180, height: 60 });
  btn.click.subscribe(() => {
    if (btn.getLabel().includes('Boy')) {
      btn.setLabel('Yes I am!');
    }
    else {
      btn.setLabel("I'm a Big Boy!");
    }
  });
  main.addChild(btn);
}

// Box with Children
{
  let x = 420;
  let y = 20;

  const parent = new Box();
  parent.setColor('lightgreen');
  parent.setSize({ width: 350, height: 300 });
  parent.setPosition({ x, y });
  main.addChild(parent);

  let box = new Box();
  box.setColor('green');
  box.setPosition({ x: 20, y: 20 });
  parent.addChild(box);

  let btn = new Button();
  btn.setLabel('Nudge ->');
  btn.setPosition({ x: 100, y: 100 });
  parent.addChild(btn);
  btn.click.subscribe(() => {
    x += 20;
    parent.setPosition({ x, y });
  });

  btn = new Button();
  btn.setLabel('<- Nudge');
  btn.setPosition({ x: 100, y: 160 });
  parent.addChild(btn);
  btn.click.subscribe(() => {
    x -= 20;
    parent.setPosition({ x, y });
  });
}
