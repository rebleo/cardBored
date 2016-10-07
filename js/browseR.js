//http://www.oldobjectsnewideas.com/browseR/
//this is coubled together from a bunch of examples//
//needs work. will work on it. will make do better.

var camera, scene, renderer;
var effect, controls;
var element, container;
var objects = [], plane;

var clock = new THREE.Clock();

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setClearColor( 0x000000 );
	element = renderer.domElement;
	container = document.getElementById('example');
	container.appendChild(element);

//this makes it stereo/cardbored-able
	effect = new THREE.StereoEffect(renderer);

	scene = new THREE.Scene();

// camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
	camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700)
	camera.position.set(0, 15, 0);
	scene.add(camera);

/////

	controls = new THREE.OrbitControls(camera, element);
	// controls.rotateUp(Math.PI / 4);
	// controls.rotateLeft(-Math.PI / 8);
	controls.target.set(
		camera.position.x + 0.1,
		camera.position.y,
		camera.position.z - 0.1
	);
	controls.noZoom = true;
	controls.noPan = true;

		function setOrientationControls(e) {
			if (!e.alpha) {
				return;
			}

		controls = new THREE.DeviceOrientationControls(camera, true);
		controls.connect();
		controls.update();

		element.addEventListener('click', fullscreen, false);

		window.removeEventListener('deviceorientation', setOrientationControls, true);
	}
	window.addEventListener('deviceorientation', setOrientationControls, true);




	window.addEventListener('resize', resize, false);
	setTimeout(resize, 1);


//// WORLD  ///////////////
	var world = new THREE.SphereGeometry( 500, 60, 40 );
	world.scale( - 1, 1, 1 );
	var terrain = new THREE.MeshBasicMaterial( {
				map: THREE.ImageUtils.loadTexture( 'assests/patterns/IMG_6153.JPG' )
						} );

	var object = new THREE.Mesh( world, terrain );
		// 	object.rotation.y = - Math.PI / 2;
		scene.add( object );

	// //spot light
		var light = new THREE.PointLight(0x999999, 2, 100);
		light.position.set(50, 50, 50);
		scene.add(light);

		var lightScene = new THREE.PointLight(0x999999, 2, 100);
		lightScene.position.set(0, 5, 0);
		scene.add(lightScene);
	//
	// //ambient light
		var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
		scene.add(light);

} //this is the end of init()

function resize() {
	var width = container.offsetWidth;
	var height = container.offsetHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
	effect.setSize(width, height);
}

function update(dt) {
	resize();

	camera.updateProjectionMatrix();

	controls.update(dt);
}

function render(dt) {
	effect.render(scene, camera);
}

function animate(t) {
	requestAnimationFrame(animate);

	update(clock.getDelta());
	render(clock.getDelta());
}

function fullscreen() {
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.msRequestFullscreen) {
		container.msRequestFullscreen();
	} else if (container.mozRequestFullScreen) {
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) {
		container.webkitRequestFullscreen();
	}
}
