import { Box } from "./Box";
import { Button } from "./Button";
import { Page } from "./Page";

export class Page1 extends Page {

  constructor() {
    super();

    // Boxes
    {
      let x = 20;
      let y = 20;
      let boxes: Box[] = [];
      for (let i = 0; i < 10; i++) {
        let box = new Box();
        boxes.push(box);
        box.position = { x, y };
        this.add(box);
        y += 60;
      }
      let hue = 0;
      const updateHue = () => {
        let hueOffset = 0;
        for (let i = 0; i < boxes.length; i++) {
          let box = boxes[i];
          box.color = `hsl(${hue + hueOffset}, 100%, 70%)`;
          hueOffset += 20;
        }
        hue -= 0.7;
      }
      updateHue();
      setInterval(updateHue, 10);
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
      this.add(btn); y += 50;

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
      this.add(btn);
    }

    // Box with Children
    {
      let x = 420;
      let y = 20;

      const parent = new Box();
      parent.color = '#ddd';
      parent.size = { width: 350, height: 300 };
      parent.position = { x, y };
      this.add(parent);

      let btn = new Button();
      btn.label = 'Nudge ->';
      btn.position = { x: 100, y: 20 };
      parent.add(btn);
      btn.click.subscribe(() => {
        x += 20;
        parent.x = x;
      });

      btn = new Button();
      btn.label = '<- Nudge';
      btn.position = { x: 100, y: 70 };
      parent.add(btn);
      btn.click.subscribe(() => {
        x -= 20;
        parent.x = x;
      });

      // Visibility Test
      {
        let x = 20;
        let y = 160;
        let hue = 290;

        let box = new Box(); parent.add(box);
        box.color = `hsl(${hue}, 50%, 50%)`;
        box.position = { x, y };

        let btn = new Button(); parent.add(btn);
        btn.label = 'Δ Hue';
        btn.position = { x: x + box.width + 10, y };
        btn.click.subscribe(() => {
          hue += 15;
          if (hue >= 360) { hue -= 360; }
          box.color = `hsl(${hue}, 50%, 50%)`;
        });

        y += box.size.height + 10;

        let toglBtn = new Button(); parent.add(toglBtn);
        toglBtn.position = { x, y };
        toglBtn.label = 'Toggle Visibility';
        toglBtn.width = 200;
        toglBtn.click.subscribe(() => {
          box.visible = !box.visible;
          btn.visible = !btn.visible;
        });
      }
    }

  }
}
