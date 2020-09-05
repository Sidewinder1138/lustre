import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { IPosition, IRect, ISize } from './Common';
import { Widget } from "./Widget";

export interface ButtonInputs {
  rect?: IRect;
}

export class Button extends Widget {

  public click: Observable<void>;

  public data: any = {}; // TODO: dubious about this feature...

  private _root: svgjs.G;
  private _bg: svgjs.Rect;
  private _label: svgjs.Text;

  private _pos: IPosition = { x: 0, y: 0 };

  private _bgColor = 'hsl(210, 100%, 60%)';
  private _bgColorHighlight = 'hsl(210, 100%, 70%)';
  private _bgColorPressed = 'hsl(210, 100%, 50%)';

  constructor() {
    super();

    const size: ISize = { width: 140, height: 40 };

    this._root = new svgjs.G();

    this._bg = new svgjs.Rect()
      .size(size.width, size.height)
      .radius(5)
      .fill(this._bgColor)
    this._root.add(this._bg);

    this._label = new svgjs.Text()
      .font({
        family: 'sans-serif',
        size: 20,
      })
      .fill('white');

    this._root.add(this._label);

    // TODO: would like to call 'label' but see issue there:
    this._label.plain('Button');
    this._label.center(0.5 * this._bg.width(), 0.5 * this._bg.height());

    // Apply some CSS:
    // TODO: see bug: https://github.com/svgdotjs/svg.js/issues/1076
    (this._label.css as any)({
      cursor: 'pointer',
      'user-select': 'none'
    });
    this._bg.css('cursor', 'pointer');

    // Click Event
    this.click = new Subject<void>();
    this._bg.click(() => { this._emitClick(); });
    this._label.click(() => { this._emitClick(); });

    // Mouse Enter/Exit Events
    this._bg.mouseover(() => { this._onMouseEnter(); });
    this._bg.mouseout(() => { this._onMouseExit(); });
    this._label.mouseover(() => { this._onMouseEnter(); });
    this._label.mouseout(() => { this._onMouseExit(); });

    this._bg.mousedown(() => { this._onMouseDown(); });
    this._bg.mouseup(() => { this._onMouseUp(); });
    this._label.mousedown(() => { this._onMouseDown(); });
    this._label.mouseup(() => { this._onMouseUp(); });
  }

  private _onMouseEnter() {
    this._bg.fill(this._bgColorHighlight);
  }

  private _onMouseExit() {
    this._bg.fill(this._bgColor);
  }

  private _onMouseDown() {
    this._bg.fill(this._bgColorPressed);
  }

  private _onMouseUp() {
    this._bg.fill(this._bgColorHighlight);
  }

  private _emitClick() {
    (this.click as Subject<void>).next();
  }

  public move(pos: IPosition): Button {
    this._pos = pos;
    this._root.move(pos.x, pos.y);
    return this;
  }

  public label(label: string): Button {
    this._label.plain(label);

    //TODO: gotta sort this out
    this._root.move(0, 0);
    this._label.center(0.5 * this._bg.width(), 0.5 * this._bg.height());
    this._root.move(this._pos.x, this._pos.y);

    return this;
  }

  public _getRoot(): svgjs.Element {
    return this._root;
  }
}
