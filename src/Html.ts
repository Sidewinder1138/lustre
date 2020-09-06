import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, IRect, ISize } from "./Common";
import { Widget } from './Widget';
import { Observable, Subject } from 'rxjs';

export class Html extends Widget {

  private root: svgjs.Rect;

  constructor() {
    super();

    const fo = svgjs.SVG()

  }


  public _getRoot(): svgjs.Element {
    return this.root;
  }
  public _resize(size: ISize): void {
    //TODO
  }
}
