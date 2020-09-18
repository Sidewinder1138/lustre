import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { ISize } from "./Common";
import { Widget } from './Widget';

export class Box extends Widget {

  click: Observable<void>;

  private _root: svgjs.G;
  private _bg: svgjs.Rect;

  constructor() {
    super();

    this._root = new svgjs.G();
    this._bg = new svgjs.Rect();
    this._root.add(this._bg);

    this.size({ width: 50, height: 50 });
    this.color('#f06');

    this.click = new Subject<void>();
    this._root.click(() => {
      (this.click as Subject<void>).next();
    });
  }

  public color(color: string) {
    this._bg.fill(color);
    return this;
  }

  // ------------------------------------------------------------------------------------
  // Widget overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element { return this._root; }

  public _resize(size: ISize): void {
    this._bg.size(size.width, size.height);
  }

  public _addChild(child: Widget): void {
    this._root.add(child._getRoot());
  }
}
