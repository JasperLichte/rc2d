import BaseWidget from "./BaseWidget.js";
import Size from "../types/Size.js";
import Coordinates from "../types/Coordinates.js";
import Style from "../types/Style.js";

export default abstract class Widget extends BaseWidget {
  protected size: Size = {width: 0, height: 0};
  protected position: Coordinates = {x: 0, y: 0, zIndex: 0};
  protected style: Style = {
    bgColor: 'black',
  };
  protected children: this[] = [];
  protected parent: this|null = null;

  public getSize(): Size {
    return this.size;
  }

  public setSize(size: Size): this {
    this.size = size;
    return this;
  }

  public getPosition(): Coordinates {
    return this.position;
  }

  public setPosition(position: Coordinates): this {
    this.position = position;
    return this;
  }

  public getStyle(): Style {
    return this.style;
  }

  public setStyle(style: Style): this {
    this.style = style;
    return this;
  }

  public append(child: this): this {
    this.children.push(child);
    return this;
  }

  public getParent(): this|null {
    return this.parent;
  }

  public setParent(parent: this): this {
    this.parent = parent;
    return this;
  }

  public abstract build(): void;

  public construct(): this {
    if (this.buildFunc != null) {
      this.buildFunc(this);
    } else {
      this.build();
    }
    this.buildChildren();
    return this;
  }

  public render(): void {
    this.children.map(w => w.render());
  }

  private buildChildren(): this {
    this.children.map(w => w
      .setContext(this.context)
      .setParent(this)
      .construct()
      .setPosition({
        ...w.position,
        x: w.position.x + this.position.x,
        y: w.position.y + this.position.y
      })
    );
    return this;
  }

}
