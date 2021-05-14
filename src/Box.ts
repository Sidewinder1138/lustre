import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { Widget } from './Widget';

export class Box extends Widget {

  public click: Observable<void>;

  private _bg: svgjs.Rect;
  private _color: string;

  constructor() {
    super();

    this._bg = new svgjs.Rect();
    this._group.add(this._bg);

    this.size = { width: 50, height: 50 };
    this.color = '#f06';

    this.click = new Subject<void>();
    this._group.click(() => {
      (this.click as Subject<void>).next();
    });
  }

  public get color(): string { return this._color; }
  public set color(color: string) {
    this._color = color;
    this._bg.fill(this._color);
  }

  protected _layoutSelf() {
    this._bg.size(this._size.width, this._size.height);
  }
  
}
