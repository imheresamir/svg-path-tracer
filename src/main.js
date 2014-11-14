/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var RenderNode = famous.core.RenderNode;
var Timer = famous.utilities.Timer;

// create the main context
var mainContext = Engine.createContext();
var rn = new RenderNode();

// your app here

// Build spark
for (var i = 0; i < 50; i++) {
	var mycircle = new Surface({
	    properties: {
	      //background:'-webkit-linear-gradient(bottom, #ffffff 0%,#ed9017 100%)'
	      background:'-webkit-repeating-linear-gradient(bottom, white, yellow, orange, darkorange, orangered'
	  	}
	});

	var centerSpinModifier = new Modifier({
	    origin: [0.5, 1],
	    align: [0, 0],
	});

	centerSpinModifier.sizeFrom(function(){
		return [1.5*Math.random(),15+Math.random()*15];
	});

	centerSpinModifier.setTransform(Transform.rotateZ(i*25/(2*Math.PI)))

	rn.add(centerSpinModifier).add(mycircle);
};

// Set initial position
move = new Modifier({
	transform: Transform.translate(25, 5, 0)
});

mainContext.add(move).add(rn);

// Begin spark motion

move.setTransform(
  Transform.translate(252, 5, 0),
  { duration : 600, curve: 'linear' }
);

move.setTransform(
  Transform.translate(252, 490, 0),
  { duration : 1200, curve: 'linear' }
);

move.setTransform(
  Transform.translate(5, 490, 0),
  { duration : 750, curve: 'linear' }
);

move.setTransform(
	Transform.translate(5, 5, 0),
	{ duration : 1150, curve: 'linear' }
);

move.setTransform(
	Transform.translate(25, 5, 0),
	{ duration : 50, curve: 'linear' }
);

move.setTransform(Transform.translate(8, 37, 0), {duration: 0});

move.setTransform(
  Transform.translate(245, 37, 0),
  { duration : 600, curve: 'linear' }
);

move.setTransform(
  Transform.translate(245, 454, 0),
  { duration : 900, curve: 'linear' }
);

move.setTransform(
  Transform.translate(25, 454, 0),
  { duration : 563, curve: 'linear' }
);

move.setTransform(
  Transform.translate(8, 37, 0),
  { duration : 863, curve: 'linear' }
);

move.setTransform(
  Transform.translate(97, 464, 0),
  {duration : 0}
);

move.setTransform(
  Transform.translate(156, 464, 0),
  { duration : 900, curve: 'linear' }
);

move.setTransform(
  Transform.translate(156, 480, 0),
  { duration : 600, curve: 'linear' }
);

move.setTransform(
  Transform.translate(97, 480, 0),
  { duration : 563, curve: 'linear' }
);

move.setTransform(
  Transform.translate(97, 464, 0),
  { duration : 863, curve: 'linear' },
  function() {
  	rn.render = function(){ return null; };
  }
);



