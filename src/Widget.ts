import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, ISize } from './Common';

export abstract class Widget {

  private _parent: Widget;
  private _children: Widget[] = [];

  private _pos: IPosition = { x: 0, y: 0 };
  private _size: ISize = { width: 0, height: 0 };

  public get position(): IPosition { return {...this._pos}; }
  public set position(pos: IPosition) {
    this._pos = {...pos};
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

  private _layout() {
    this._root().css(
      'transform',
      `translate(${this._pos.x}px, ${this._pos.y}px)`
    );
    this._root().size(this._size.width, this._size.height);
    this._layoutSelf();
  }

  // ------------------------------------------------------------------------------------
  // Required Overrides:
  // ------------------------------------------------------------------------------------
  protected abstract _root(): svgjs.Element;

  // ------------------------------------------------------------------------------------
  // Optional Overrides:
  // ------------------------------------------------------------------------------------
  protected _layoutSelf() {}

}
