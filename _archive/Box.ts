import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { Widget } from './Widget';

export class Box extends Widget {

  click: Observable<void>;

  private _root: svgjs.G;
  private _bg: svgjs.Rect;
  private _color: string;

  constructor() {
    super();

    this._root = new svgjs.G();
    this._bg = new svgjs.Rect();
    this._root.add(this._bg);

    this.size = { width: 50, height: 50 };
    this.color = '#f06';

    this.click = new Subject<void>();
    this._root.click(() => {
      (this.click as Subject<void>).next();
    });
  }

  public get color(): string { return this._color; }
  public set color(color: string) {
    this._color = color;
    this._bg.fill(this._color);
  }

  // ------------------------------------------------------------------------------------
  // Widget Overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element { return this._root; }

  protected _layout(): void {
    this._bg.size(
      this.size.width,
      this.size.height
    );
    this._root.move(
      this.absPosition.x,
      this.absPosition.y
    );
  }

}
