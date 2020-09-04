import * as svgjs from '@svgdotjs/svg.js';

export abstract class Widget {
  public abstract _getRoot(): svgjs.Element;
}
