import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { ISize } from "./Common";
import { Widget } from './Widget';

export class Box extends Widget {

  click: Observable<void>;

  private _root: svgjs.Rect;

  constructor() {
    super();

    this._root = new svgjs.Rect();

    this.size({ width: 50, height: 50 });
    this.color('#f06');

    this.click = new Subject<void>();
    this._root.click(() => {
      (this.click as Subject<void>).next();
    });
  }

  public color(color: string) {
    this._root.fill(color);
    return this;
  }

  // ------------------------------------------------------------------------------------
  // Widget overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element { return this._root; }

  public _resize(size: ISize): void {
    this._root.size(size.width, size.height);
  }
}
