let TWEEN = require('@tweenjs/tween.js');

let mainView = new PIXI.CanvasRenderer(200, 200);
let container = new PIXI.Container();
let graphic = new PIXI.Graphics();
graphic.beginFill(16119285);
graphic.drawRect(0,0,100,100);
graphic.endFill();
container.addChild(graphic);
console.log(mainView.view)

document.getElementById('content').append(mainView.view);

// // Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update();
    mainView.render(container);
}
requestAnimationFrame(animate);

// var coords = { x: 0, y: 0 }; // Start at (0, 0)
var tween = new TWEEN.Tween(graphic.position) // Create a new tween that modifies 'coords'.
        .to({ x: 100, y: 100 }, 1000) // Move to (300, 200) in 1 second.
        .onUpdate(function() { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            console.log(this.position)
        })
        .start(); // Start the tween immediately.