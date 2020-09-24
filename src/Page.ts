import { Box } from "./Box";

export class Page extends Box {

  constructor() {
    super();
    this.size = { width: 1180, height: 730 };
    this.color = '#444';
    this.visible = false;
  }

}
