import * as svgjs from '@svgdotjs/svg.js';
import { Observable, Subject } from 'rxjs';
import { Box } from './Box';

export class Button extends Box {

  public click: Observable<void>;

  public data: any = {}; // TODO: look at svgjs, they have 'memory', and also another mechanism, both look like this...

  private _label: svgjs.Text;
  private _overlay: svgjs.Rect;

  private _bgColor = 'hsl(210, 100%, 60%)';
  private _bgColorHighlight = 'hsl(210, 100%, 70%)';
  private _bgColorPressed = 'hsl(210, 100%, 50%)';

  private _labelText = '';

  constructor() {
    super(true);

    this.color = this._bgColor;

    this._overlay = new svgjs.Rect().radius(5).fill('#00000000');
    this._label = new svgjs.Text()
      .font({
        family: 'sans-serif',
        size: 20,
      })
      .fill('white');

    this._group.add(this._label);
    this._group.add(this._overlay);

    this.label = 'Button';
    this.size = { width: 140, height: 40 };
    this.radius = 5.0;

    // CSS
    this._label.css('user-select', 'none');
    this._overlay.css('cursor', 'pointer');

    // Accessibility
    this._group.attr('role', 'button');
    this._overlay.attr('focusable', 'true');

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

    this.unfreeze();
  }

  private _onClick() { (this.click as Subject<void>).next(); }
  private _onMouseEnter() { this.color = this._bgColorHighlight; }
  private _onMouseExit() { this.color = this._bgColor; }
  private _onMouseDown() { this.color = this._bgColorPressed; }
  private _onMouseUp() { this.color = this._bgColorHighlight; }

  public get label(): string { return this._labelText; }
  public set label(label: string) {
    this._labelText = label;
    this._overlay.attr('aria-label', this._labelText);
    this._label.attr('aria-label', this._labelText);
    this._label.plain(this._labelText);
    this._layout();
  }

  public doClick() { this._onClick(); }

  protected _layoutSelf() {
    super._layoutSelf();
    this._overlay.size(this._size.width, this._size.height);
    this._label.center(
      (0.5 * this._size.width),
      (0.5 * this._size.height)
    );
  }

}
