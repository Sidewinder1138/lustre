import { Main } from "./Main";
import { Box } from "./Box";
//import { Button } from "./Button";

const main = new Main();

// const box = new Box().color('#3aa')
//   .size({ width: 140, height: 100 })
//   .move({ x: 400, y: 400 });
// main.addWidget(box);
// let ticktock = false;
// box.click.subscribe(() => {
//   console.log('You clicked on the Box!');
//   if (ticktock) {
//     box.color('#3aa');
//   }
//   else {
//     box.color('#f06');
//   }
//   ticktock = !ticktock;
// });

// let btn = new Button()
//   .label('Click me')
//   .size({ width: 200, height: 60 })
//   .move({ x: 100, y: 50 })
//   ;
// btn.click.subscribe(() => {
//   console.log('Thanks!');
// });
// main.addWidget(btn);

// btn = new Button()
//   .label('Touch Me!')
//   .move({ x: 100, y: 150 })
//   ;
// btn.click.subscribe(() => {
//   btn.label('I Like That!');
// });
// main.addWidget(btn);


{
  const boxParent = new Box().color('lightgreen')
    .setSize({ width: 280, height: 150 })
    //.move({ x: 20, y: 250 });
  main.addWidget(boxParent);

  // const boxChild1 = new Box().color('blue')
  //   .size({ width: 50, height: 50 })
  //   .move({ x: 10, y: 10 });
  //   ;
  // boxParent.addChild(boxChild1);
  
  // boxParent.position.x = 200;
  // console.log(boxParent.position);
  

  //boxParent.move({ x: 20, y: 250 });
  //boxChild1.move({ x: 20, y: 20 });

}