import { Main } from "./Main";
import { Box } from "./Box";
import { Button } from "./Button";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

const main = new Main();

// const pageCount = 2;
// const pages: Box[] = [];

// let pos = { x: 10, y: 10 };

// let btnPage1 = null;

// for (let index = 0; index < pageCount; index++) {
//   let btn = new Button(); main.add(btn);
//   if (!btnPage1) { btnPage1 = btn; }
//   btn.label = `Page ${index + 1}`;
//   btn.position = pos;
//   btn.click.subscribe(() => {
//     for (const page of pages) {
//       page.visible = false;
//     }
//     pages[index].visible = true;
//   });
//   pos.x += btn.width + 10;
// }

// pos = { x: 10, y: 60 };

// let page = new Page1(); main.add(page); pages.push(page); page.position = pos;
// page = new Page2(); main.add(page); pages.push(page); page.position = pos;

// btnPage1.doClick();
