//adapted from example code 'benskitchen.com'

var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront()
{
	document.getElementById('frontCamera').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('backCamera').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('leftCamera').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('rightCamera').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('topCamera').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('bottomCamera').setAttribute('bind', 'true');
}