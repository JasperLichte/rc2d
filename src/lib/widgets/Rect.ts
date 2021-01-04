import Widget from "./Widget.js";

export default class Rect extends Widget {
  
  public build(): void {
  }

  public render(): void {
    this.context.fillStyle = this.style.bgColor;
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    
    super.render();
  }

}