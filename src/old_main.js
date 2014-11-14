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
//var timer = new Timer();

//mype.addBody(mycircle);

// your app here
var outline = new ImageSurface({
    size: [true, 400],
    content: 'assets/s4_outline.svg',
    //classes: ['double-sided']
});

var phone = new ImageSurface({
    size: [true, 400],
    content: 'assets/s4_Template.svg',
    //classes: ['double-sided']
});

var positionMod1 = new Modifier({
	//transform: Transform.translate(-100, 0, 0)
	opacity: 0
});

var positionMod2 = new Modifier({
	//transform: Transform.translate(-100, 0, 0)
	opacity: 0
});

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

move = new Modifier({
	transform: Transform.translate(206, 15, 0)
});

//mainContext.add(positionMod1).add(outline);
//mainContext.add(positionMod2).add(phone);
mainContext.add(move).add(rn);

Timer.setTimeout(function() {
	positionMod1.setOpacity(
	    1,
	    {curve: 'linear', duration : 3500}
	);

	move.setTransform(
	  Transform.translate(10, 0, 0),
	  { duration : 500, curve: 'easeInOut' }
	);

	move.setTransform(
	  Transform.translate(206, 15, 0),
	  { duration : 500, curve: 'easeInOut' }
	);

	move.setTransform(
	  Transform.translate(206, 400, 0),
	  { duration : 500, curve: 'easeInOut' }
	);

	move.setTransform(
	  Transform.translate(0, 400, 0),
	  { duration : 500, curve: 'easeInOut' }
	);

	move.setTransform(
	  Transform.translate(15, 15, 0),
	  { duration : 500, curve: 'easeInOut' }
	);

	move.setTransform(
		Transform.translate(10, 400, 0),
		{ duration : 500, curve: 'easeInOut' },
		function() {
		  	rn.render = function(){ return null; };
			positionMod2.setOpacity(
				1,
			    {curve: 'linear', duration : 1000}
			);
		}
	);
}, 2500);



