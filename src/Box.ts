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

    this.setSize({ width: 50, height: 50 });
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
  // Widget Overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element { return this._root; }

  protected _layout(): void {
    this._bg.size(
      this.getSize().width,
      this.getSize().height
    );
    this._root.move(
      this.getAbsPosition().x,
      this.getAbsPosition().y
    );
  }

}
