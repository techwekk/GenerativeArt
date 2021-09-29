// https://github.com/dataarts/dat.gui
let options = {
  color: 0,
};

window.onload = function() {
  const gui = new dat.GUI();
  gui.add(options, 'color').min(1).max(3).step(1).listen();
};