import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { Widget } from "./Widget";

export class Button extends Widget {

  public click: Observable<void>;

  public data: any = {}; // TODO: look at svgjs, they have 'memory', and also another mechanism, both look like this...

  private _root: svgjs.G;
  private _bg: svgjs.Rect;
  private _label: svgjs.Text;
  private _overlay: svgjs.Rect;

  private _bgColor = 'hsl(210, 100%, 60%)';
  private _bgColorHighlight = 'hsl(210, 100%, 70%)';
  private _bgColorPressed = 'hsl(210, 100%, 50%)';

  private _labelText = '';

  constructor() {
    super();

    this._root = new svgjs.G();

    this._bg = new svgjs.Rect().radius(5).fill(this._bgColor);
    this._overlay = new svgjs.Rect().radius(5).fill('#00000000');
    this._label = new svgjs.Text()
      .font({
        family: 'sans-serif',
        size: 20,
      })
      .fill('white');

    this._root.add(this._bg);
    this._root.add(this._label);
    this._root.add(this._overlay);

    this.label = 'Button';

    this.size = { width: 140, height: 40 };

    // CSS
    this._label.css('user-select', 'none');
    this._overlay.css('cursor', 'pointer');

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

  private _onClick() { (this.click as Subject<void>).next(); }
  private _onMouseEnter() { this._bg.fill(this._bgColorHighlight); }
  private _onMouseExit() { this._bg.fill(this._bgColor); }
  private _onMouseDown() { this._bg.fill(this._bgColorPressed); }
  private _onMouseUp() { this._bg.fill(this._bgColorHighlight); }

  public get label(): string { return this._labelText; }
  public set label(label: string) {
    this._labelText = label;
    this._label.plain(this._labelText);
    this._layout();
  }

  public doClick() { this._onClick(); }

  // ------------------------------------------------------------------------------------
  // Widget Overrides:
  // ------------------------------------------------------------------------------------
  public _getRoot(): svgjs.Element { return this._root; }

  protected _layout() {
    this._root.move(this.absPosition.x, this.absPosition.y);
    this._bg.size(this.size.width, this.size.height);
    this._overlay.size(this.size.width, this.size.height);
    this._label.center(
      (0.5 * this._bg.width()) + this._bg.x(),
      (0.5 * this._bg.height()) + this._bg.y()
    );
  }

}
