import Size from "./types/Size.js";
import { Widget } from "./widgets/index.js";

export default class Scene {
  private context!: CanvasRenderingContext2D;
  private size: Size = {width: 0, height: 0};
  private widgets: Widget[] = [];

  public getSize(): Size {
    return this.size;
  }

  public setSize(size: Size): void {
    this.size = size;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.context;
  }

  public setContext(context: CanvasRenderingContext2D): Scene {
    this.context = context;
    return this;
  }

  public render() {
    this.widgets
      .map(w => w.construct())
      .sort((a, b) => a.getPosition().zIndex - b.getPosition().zIndex)
      .map(w => w.render());
  }

  public addWidget(widget: Widget): Scene {
    this.widgets.push(
      widget
      .setContext(this.context)
      .setScene(this)
    );
    return this;
  }

  public addWidgets(widgets: Widget[]): Scene {
    widgets.map(w => this.addWidget(w));
    return this;
  }

}
