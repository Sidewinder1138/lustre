import { Button } from "./Button";
import { Page } from "./Page";

export class Page2 extends Page {

  constructor() {
    super();

    let btn = new Button();
    this.add(btn);
    btn.x = 50; btn.y = 50;
    btn.label = 'Hey there!';
  }

}
