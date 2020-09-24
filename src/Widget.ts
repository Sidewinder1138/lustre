import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, ISize } from './Common';

export abstract class Widget {

  private _parent: Widget;
  private _children: Widget[] = [];
  private _pos: IPosition = { x: 0, y: 0 }; // _pos is relative to parent Widget
  private _absPos: IPosition = { x: 0, y: 0 };
  private _size: ISize = { width: 0, height: 0 };
  private _visible = true;

  public get visible(): boolean { return this._visible; }
  public set visible(val: boolean) {
    this._visible = val;
    this._visible ? this._getRoot().show() : this._getRoot().hide();
  }

  public get absPosition(): IPosition { return {...this._absPos}; }
  public get position(): IPosition { return {...this._pos}; }
  public set position(pos: IPosition) {
    this._pos = {...pos};
    this._absPos = this._pos;
    if (this._parent) {
      this._absPos.x += this._parent._absPos.x;
      this._absPos.y += this._parent._absPos.y;
    }
    this._layout();
  }

  public get size(): ISize { return {...this._size}; }
  public set size(size: ISize) {
    this._size = {...size};
    this._layout();
  }

  public get width(): number { return this._size.width; }
  public set width(val: number) {
    this.size = { width: val, height: this.size.height };
  }

  public get height(): number { return this._size.height; }
  public set height(val: number) {
    this.size = { width: this.size.width, height: val };
  }

  public add(child: Widget): void {
    child._parent = this;
    this._children.push(child);
    child.position = child._pos;
    this._handleNewChild(child);
  }

  // ------------------------------------------------------------------------------------
  // Overridables:
  // ------------------------------------------------------------------------------------
  public abstract _getRoot(): svgjs.Element;
  protected _handleNewChild(child: Widget): void {
    this._getRoot().add(child._getRoot());
  }
  protected _layout(): void {}
}
