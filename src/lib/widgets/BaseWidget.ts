import Scene from "../Scene.js";
import Widget from "./Widget.js";

export default abstract class BaseWidget {
  protected buildFunc: ((widget: Widget) => void)|null;
  protected context!: CanvasRenderingContext2D;
  protected scene!: Scene;

  public constructor(buildFunc: ((widget: Widget) => void)|null = null) {
    this.buildFunc = buildFunc;
  }

  public setContext(context: CanvasRenderingContext2D): this {
    this.context = context;
    return this;
  }

  public getScene(): Scene {
    return this.scene;
  }

  public setScene(scene: Scene): this {
    this.scene = scene;
    return this;
  }

}
