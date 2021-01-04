import Renderer from "./Renderer.js";
import Scene from "./Scene.js";

export default class Rc2d {
  private canvas: HTMLCanvasElement;
  private wind: Window;
  private doc: Document;
  private renderer: Renderer;

  constructor(wind: Window, scene: Scene) {
    this.wind = wind;
    this.doc = wind.document;

    this.canvas = this.doc.createElement('canvas');
    this.insertCanvas();
    this.renderer = new Renderer(this.canvas, scene);
    this.responsifyCanvas();
  }

  private insertCanvas(): void {
    if (!this.canvas || !this.doc.body) {
      return;
    }

    this.doc.body.setAttribute(
      'style',
      'margin: 0; padding: 0; height: 100vh; width: 100vw'
    );

    this.doc.body.appendChild(this.canvas);
  }

  private responsifyCanvas(): void {
    const fitToWindow = () => {
      const size = {
        width: this.wind.innerWidth,
        height: this.wind.innerHeight
      }
      this.canvas.setAttribute('width', size.width.toFixed());
      this.canvas.setAttribute('height', size.height.toFixed());

      this.renderer.getScene().setSize(size);
      this.renderer.getHasRendered() && this.renderer.render();
    };

    this.wind.addEventListener('resize', fitToWindow);
    fitToWindow();
  }

  public getRenderer(): Renderer {
    return this.renderer;
  }

}