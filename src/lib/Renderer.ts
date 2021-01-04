import NoContextException from "./exceptions/NoContextException.js";
import Scene from "./Scene.js";
import NoSceneException from "./exceptions/NoSceneException.js";

export default class Renderer {
  private scene: Scene;
  private hasRendered: boolean = false;

  constructor(canvas: HTMLCanvasElement, scene: Scene) {
    const context = canvas.getContext('2d');
    if (context == null) {
      throw new NoContextException();
    }
    this.scene = scene.setContext(context);
  }

  public render() {
    if (this.scene == null) {
      throw new NoSceneException
    }

    this.scene.render();

    this.hasRendered = true;
  }

  public getScene(): Scene {
    return this.scene;
  }

  public getHasRendered(): boolean {
    return this.hasRendered;
  }

}
