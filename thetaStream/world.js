var theCanvas;
var theContxt;

var container2, mesh;


var worldCamera, scene, renderer;
var effect, controls;
var element, container;
var objects = [], plane;


var clock = new THREE.Clock();

// init();
// animate();


var videoGo = function() {
	console.log("loaded");

/////// communication / compatibility jig /////
	window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

	// The video element on the page to display the webcam
	myCamera = document.getElementById('theta');

	// if we have the method
	if (navigator.getUserMedia) {
		navigator.getUserMedia({video: true}, function(stream) {
				myCamera.src = window.URL.createObjectURL(stream) || stream;
				myCamera.play();
				//call draw after get video info
				draw();

			}, function(error) {alert("Failure " + error.code);});
	}
	theCanvas = document.getElementById('theCanvas');
 	theContxt = theCanvas.getContext('2d');

} //end of videoGo

var draw = function() {
//ANYTHING DRAWN ON CANVAS WILL BE EMITTED YOU FOOL!
 	theContxt.drawImage(myCamera,100,50,512,288);
	// theContxt.strokeRect(0,0,theCanvas.width,theCanvas.height)
	// theContxt.fillStyle = "green";
	// draw every 6 seconds
 	setTimeout(draw,100);
}

window.addEventListener('load', videoGo);
//
// function init() {
// 	renderer = new THREE.WebGLRenderer();
// 	renderer.setClearColor( 0xf0f0f0 );
// 	renderer.setPixelRatio( window.devicePixelRatio );
//
// 	element = renderer.domElement;
// 	container = document.getElementById('cardBoredGo');
// 	container.appendChild(element);
//
// 	//this makes it stereo/cardbored-able
// 		effect = new THREE.StereoEffect(renderer);
// 		scene = new THREE.Scene();
//
// 	worldCamera = new THREE.PerspectiveCamera( 90, 1, 0.001, 700);
// 	worldCamera.position.set(0, 15, 0);
// 	scene.add(worldCamera);
//
// ////// device controls ////////
// 		controls = new THREE.OrbitControls(worldCamera, element);
// 		controls.rotateUp(Math.PI / 4);
// 		controls.rotateLeft(-Math.PI / 8);
// 		controls.target.set(
// 			worldCamera.position.x + 0.1,
// 			worldCamera.position.y,
// 			worldCamera.position.z - 0.1
// 		);
// 		controls.noZoom = true;
// 		controls.noPan = true;
//
// 			function setOrientationControls(e) {
// 				if (!e.alpha) {
// 					return;
// 				}
//
// 			controls = new THREE.DeviceOrientationControls(worldCamera, true);
// 			controls.connect();
// 			controls.update();
// 			//event is "click", fullscreen = callbackfunction
// 			element.addEventListener('click', fullscreen);
// 			window.removeEventListener('deviceorientation', setOrientationControls, true);
// 		}
// 		window.addEventListener('deviceorientation', setOrientationControls, true);
//
// 		window.addEventListener('resize', resize, false);
// 		setTimeout(resize, 1);
// 		////////////// SPHERE THAT IS WORLD!!!!!/////////////////////
// 	var worldGeometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
// 		worldGeometry.scale( - 1,1,1 );
//
// 	//////////////////// TILDEN VIDEO WORLD //////////////////////
// 	var video = document.createElement( 'video' );
// 		video.width = 640;
// 		video.height = 360;
// 		video.muted = true;
// 		video.autoplay = true;
// 		video.loop = true;
// 		video.src = "_vidTest2.m4v";
//
//
// 		var worldTexture = new THREE.VideoTexture( video );
// 		worldTexture.minFilter = THREE.LinearFilter;
// 		worldTexture.format = THREE.RGBFormat;
//
// 		var worldMaterial   = new THREE.MeshBasicMaterial( { map : worldTexture } );
// 		worldMesh = new THREE.Mesh( worldGeometry, worldMaterial );
// 		scene.add( worldMesh );
//
// 	container2 = document.getElementById( 'container' );
//
//
// } ///THIS IS THE END OF INIT
//
//
//
// function resize() {
// 	var width = container.offsetWidth;
// 	var height = container.offsetHeight;
//
// 	worldCamera.aspect = width / height;
// 	worldCamera.updateProjectionMatrix();
//
// 	renderer.setSize(width, height);
// 	effect.setSize(width, height);
// }
//
//
// function update(dt) {
// 	resize();
// 	worldCamera.updateProjectionMatrix();
//
// 	controls.update(dt);
// }
//
// function render(dt) {
//
// 	effect.render(scene, worldCamera);
//
// }
// function animate() {
// 	requestAnimationFrame( animate );
//
// 	// update(clock.getDelta());
// 	render(clock.getDelta());
// }
//
// function fullscreen() {
// 	if (container.requestFullscreen) {
// 		container.requestFullscreen();
// 	} else if (container.msRequestFullscreen) {
// 		container.msRequestFullscreen();
// 	} else if (container.mozRequestFullScreen) {
// 		container.mozRequestFullScreen();
// 	} else if (container.webkitRequestFullscreen) {
// 		container.webkitRequestFullscreen();
// 	}
// }
