import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { IPosition, IRect, ISize } from './Common';
import { Widget } from "./Widget";

export interface ButtonInputs {
  rect?: IRect;
}

export class Button extends Widget {

  public click: Observable<void>;

  public data: any = {};

  private _root: svgjs.G;
  private _bg: svgjs.Rect;
  private _label: svgjs.Text;

  private _pos: IPosition = { x: 0, y: 0 };

  constructor() {
    super();

    const size: ISize = { width: 140, height: 40 };
    const bgColor = 'hsl(210, 100%, 60%)';

    this._root = new svgjs.G();

    this._bg = new svgjs.Rect()
      .size(size.width, size.height)
      .radius(5)
      .fill(bgColor)
    this._root.add(this._bg);

    this._label = new svgjs.Text()
      .font({
        family: 'sans-serif',
        size: 20,
      })
      .fill('white');

    this._root.add(this._label);

    this._label.plain('Button');
    this._label.center(0.5 * this._bg.width(), 0.5 * this._bg.height());

    // Apply some CSS:
    this._label.css('cursor', 'pointer');
    this._label.css('user-select', 'none');
    this._bg.css('cursor', 'pointer');

    // Events
    this.click = new Subject<void>();
    this._bg.click(() => { this._emitClick(); });
    this._label.click(() => { this._emitClick(); });
  }

  private _emitClick() {
    (this.click as Subject<void>).next();
  }

  public move(pos: IPosition) {
    this._pos = pos;
    this._root.move(pos.x, pos.y);
  }

  public label(label: string): Button {
    this._label.plain(label);

    this._root.move(0, 0);
    this._label.center(0.5 * this._bg.width(), 0.5 * this._bg.height());
    this._root.move(this._pos.x, this._pos.y);

    return this;
  }

  public _getRoot(): svgjs.Element {
    return this._root;
  }
}
