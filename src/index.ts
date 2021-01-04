import Rc2d from './lib/Rc2d.js';
import Scene from './lib/Scene.js';
import Rect from './lib/widgets/Rect.js';

const scene = new Scene();
const renderer = (new Rc2d(window, scene)).getRenderer();


const bg = new Rect((widget) => {
  widget.setSize({
      width: widget.getScene().getSize().width - 20,
      height: widget.getScene().getSize().height - 20
    })
    .setPosition({...widget.getPosition(),
      x: 10,
      y: 10
    })
    .setStyle({...widget.getStyle, bgColor: '#222'})
});

const red = new Rect((widget) => {
  const parent = widget.getParent();
  widget.setSize({
      width: parent != null ? (parent.getSize().width - 20) / 2 : 40,
      height: parent != null ? parent.getSize().height - 20 : 40
    })
    .setPosition({...widget.getPosition(),
      x: 10,
      y: 10
    })
    .setStyle({...widget.getStyle, bgColor: '#f22'})
});

bg.append(red);

scene.addWidget(bg);

renderer.render();
