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
  private _overlay: svgjs.Rect;

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

    this._overlay = new svgjs.Rect()
      .size(size.width, size.height)
      .radius(5)
      .fill('#00000000');
    this._root.add(this._overlay);

    // CSS
    this._label.css('user-select', 'none');
    this._overlay.css('cursor', 'pointer');

    // TODO: see bug: https://github.com/svgdotjs/svg.js/issues/1076
    this._bg.css('box-shadow', '9px 10px 34px 0px rgba(0,0,0,0.34);');


    // Events
    this.click = new Subject<void>();
    this._overlay.click((e: MouseEvent) => { this._onClick(); });
    this._overlay.mouseover((e: MouseEvent) => { this._onMouseEnter(); });
    this._overlay.mouseout((e: MouseEvent) => { this._onMouseExit(); });
    this._overlay.mousedown((e: MouseEvent) => {
      e.preventDefault();
      this._onMouseDown();
    });
    this._overlay.mouseup((e: MouseEvent) => {
      e.preventDefault();
      this._onMouseUp();
    });
  }

  private _onClick() {
    (this.click as Subject<void>).next();
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
