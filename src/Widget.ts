import * as svgjs from '@svgdotjs/svg.js';
import { IPosition, ISize } from './Common';

export abstract class Widget {

  protected _pos: IPosition = { x: 0, y: 0 };
  protected _size: ISize = { width: 0, height: 0 };

  public move(pos: IPosition) {
    this._pos = pos;
    this._getRoot().move(pos.x, pos.y);
    return this;
  }

  public size(size: ISize) {
    this._resize(size);
    this._size = size;
    return this;
  }

  public addChild(child: Widget) {
    child.move({
      x: child._pos.x + this._pos.x,
      y: child._pos.y + this._pos.y
    });
    this._addChild(child);

    return this;
  }

  // ------------------------------------------------------------------------------------
  // Overridables:
  // ------------------------------------------------------------------------------------
  public abstract _getRoot(): svgjs.Element;
  public abstract _resize(size: ISize): void;
  public _addChild(child: Widget): void {}

}
