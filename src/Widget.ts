import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, ISize } from './Common';

export abstract class Widget {

  private _parent: Widget;
  private _children: Widget[] = [];
  private _pos: IPosition = { x: 0, y: 0 }; // _pos is relative to parent Widget
  private _absPos: IPosition = { x: 0, y: 0 };
  private _size: ISize = { width: 0, height: 0 };

  public getPosition(): IPosition { return {...this._pos}; }
  public getAbsPosition(): IPosition { return {...this._absPos}; }
  public setPosition(pos: IPosition): Widget {
    this._pos = {...pos};
    this._absPos = this._pos;
    if (this._parent) {
      this._absPos.x += this._parent._absPos.x;
      this._absPos.y += this._parent._absPos.y;
    }
    this._layout();
    return this;
  }

  public getSize(): ISize { return {...this._size}; }
  public setSize(size?: ISize): Widget {
    this._size = {...size};
    this._layout();
    return this;
  }

  public addChild(child: Widget) {
    child._parent = this;
    this._children.push(child);
    child.setPosition(child._pos);
    this._handleNewChild(child);
    return this; //TODO: maybe return child instead?
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
