//adapted from example code 'benskitchen.com'

var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('modelcoke__cokeCan-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('modelcoke__cokeCan-TIMER').setAttribute('enabled', spinning.toString());
}

// function animateModel()
// {
//     if(document.getElementById('modelcoke__RotationTimer-TIMER').getAttribute('enabled')!= 'true')
//         document.getElementById('modelcoke__RotationTimer-TIMER').setAttribute('enabled', 'true');
//     else
//         document.getElementById('modelcoke__RotationTimer-TIMER').setAttribute('enabled', 'false');
// }

function viewWireframeCoke() {
    var e = document.getElementById('modelcoke');
	e.runtime.togglePoints(true);
}

function viewWireframeSprite() {
    var e = document.getElementById('modelsprite');
	e.runtime.togglePoints(true);
}

function viewWireframePepper() {
    var e = document.getElementById('modelpepper');
	e.runtime.togglePoints(true);
}


var lightOn = true;

function headlightCoke()
{
	lightOn = !lightOn;
	document.getElementById('modelcoke__headlight').setAttribute('headlight', lightOn.toString());
}

function headlightSprite()
{
	lightOn = !lightOn;
	document.getElementById('modelsprite__headlight').setAttribute('headlight', lightOn.toString());
}

function headlightPepper()
{
	lightOn = !lightOn;
	document.getElementById('modelpepper__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront()
{
	document.getElementById('modelcoke__frontCamera').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('modelcoke__backCamera').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('modelcoke__leftCamera').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('modelcoke__rightCamera').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('modelcoke__topCamera').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('modelcoke__bottomCamera').setAttribute('bind', 'true');
}