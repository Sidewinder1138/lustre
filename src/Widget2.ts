import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, ISize } from './Common';

export class Widget2 {

  private _parent: Widget2;
  private _children: Widget2[] = [];
  private _pos: IPosition = { x: 0, y: 0 }; // _pos is relative to parent Widget
  // private _absPos: IPosition = { x: 0, y: 0 };
  private _size: ISize = { width: 0, height: 0 };
  private _visible = true;

  private _root: svgjs.G;
  private _bg: svgjs.Rect;

  private _bgColor = 'white';

  constructor() {
    this._root = new svgjs.G();
    this._bg = new svgjs.Rect().fill(this._bgColor);
    this._root.add(this._bg);
  }

  public get bgColor(): string { return this._bgColor; }
  public set bgColor(color: string) {
    this._bgColor = color;
    this._bg.fill(this._bgColor);
  }

  public get visible(): boolean { return this._visible; }
  public set visible(val: boolean) {
    this._visible = val;
    this._visible ? this._root.show() : this._root.hide();
  }

  // public get absPosition(): IPosition { return {...this._absPos}; }
  public get position(): IPosition { return {...this._pos}; }
  public set position(pos: IPosition) {
    this._pos = {...pos};
    // if (!this._parent) return;
    // this._absPos = {
    //   x: this._parent._absPos.x + this._pos.x,
    //   y: this._parent._absPos.y + this._pos.y
    // };
    this._layout();
  }
  public get x(): number { return this.position.x; }
  public set x(val: number) {
    this.position = { x: val, y: this.position.y };
  }
  public get y(): number { return this.position.y; }
  public set y(val: number) {
    this.position = { x: this.position.x, y: val }
  }

  // private _updateAbsPos() {
  //   if (this._parent) {
  //     this._absPos.x += this._parent._absPos.x;
  //     this._absPos.y += this._parent._absPos.y;
  //   }
  //   // TODO: This is BAD for performance... and, seems like it's not necessary since
  //   // the underlying SVG elements already store their abs position... need to leverage
  //   // that in a better way somehow... like instead of caching _absPos, just set/get
  //   // it from the _getRoot() element...
  //   for (const child of this._children) {
  //     child._updateAbsPos();
  //   }
  // }

  public get size(): ISize { return {...this._size}; }
  public set size(size: ISize) {
    this._size = {...size};
    this._layout();
  }
  public get width(): number { return this.size.width; }
  public set width(val: number) {
    this.size = { width: val, height: this.size.height };
  }
  public get height(): number { return this.size.height; }
  public set height(val: number) {
    this.size = { width: this.size.width, height: val };
  }

  public add(child: Widget2): void {
    child._parent = this;
    this._children.push(child);
    this._root.add(child.__getRoot());
    child.position = child._pos; // Triggers a layout.
    //this._handleNewChild(child);
  }

  private _layout() {
    //this._root.move(this._absPos.x, this._absPos.y);
    this._bg.size(this.size.width, this.size.height);
    this._root.css(
      'transform',
      `translate(${this._pos.x}px, ${this._pos.y}px)`
    );  
  }

  // WARNING: Only for internal use!!!
  public __getRoot() {
    return this._root;
  }

  // ------------------------------------------------------------------------------------
  // Overridables:
  // ------------------------------------------------------------------------------------
  // public abstract _getRoot(): svgjs.Element;
  // protected _handleNewChild(child: Widget): void {
  //   this._getRoot().add(child._getRoot());
  // }
  // protected _layout(): void {}
}
