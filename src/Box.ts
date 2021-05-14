import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { Widget } from './Widget';

export class Box extends Widget {

  // TODO: move mouse interaction to a special MouseArea widget, or what?
  //public click: Observable<void>;

  private _bg: svgjs.Rect;
  private _color: string;
  private _radius: number;

  constructor(freeze = false) {
    super(freeze);

    this._bg = new svgjs.Rect();
    this._group.add(this._bg);

    this.size = { width: 50, height: 50 };
    this.color = '#f06';

    // TODO: see TODO above
    // this.click = new Subject<void>();
    // this._group.click(() => {
    //   (this.click as Subject<void>).next();
    // });
  }

  public get color(): string { return this._color; }
  public set color(val: string) {
    this._color = val;
    this._bg.fill(this._color);
  }

  public get radius(): number { return this._radius; }
  public set radius(val: number) {
    this._radius = val;
    this._bg.radius(this._radius);
  }

  protected _layoutSelf() {
    this._bg.size(this._size.width, this._size.height);
  }
  
}
