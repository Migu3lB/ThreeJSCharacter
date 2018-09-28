var perspectiveCamera, scene, renderer;
var geometry, material, meshHead, meshBody, meshlegLeft, meshlegRight , meshFootRight, meshFootLeft, axis;
var meshCentralBody, meshEyeLeft, meshEyeRight, meshRetinaRight, meshRetinaLeft;
var meshArmRight, meshArmLeft, meshHandLeft, meshHandRight, meshTail;
var meshAntennasRight, meshAntennasLeft, meshAntennasLeft2, meshAntennasRight2, planoGeometria ;

function init() {
	createScene();
	createRenderer();
	createPerspectiveCamera();
	createSphereGeometryHead();
	createSphereGeometryBody();
	createCylinderGeometrylegLeft();
	createCylinderGeometrylegRight();
	createCubeGeometryRightFoot();
	createCubeGeometryLeftFoot();
	createSphereGeometryBodyC();
	createSphereGeometryReye();
	createSphereGeometryLeye();
	createSphereGeometryLretina();
	createSphereGeometryRretina();
	createCubeGeometryRarm();
	createCubeGeometryLarm();
	createSphereGeometryLHand();
	createSphereGeometryRHand();
	createConeGeometryTail();
	createAntennasGeometryRight();
	createAntennasGeometryRLeft();
	createSplineCurve();
	createPlane();
	//createAxisHelper();
}

function createRenderer() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function createScene() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
}

function createAxisHelper () {
	axis = THREE.AxisHelper(60);
	axis.position.z = -100;
	scene.add(axis);
}

function createPerspectiveCamera() {
	perspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
}

function createSphereGeometryHead() {
	material = new THREE.MeshBasicMaterial({
		color: 0xf7c600
	});
	geometry = new THREE.SphereGeometry(15, 32, 32);
	meshHead = new THREE.Mesh(geometry, material);
	meshHead.position.z = -100;
	meshHead.position.y = -5;
	scene.add(meshHead);
}

function createCylinderGeometrylegLeft() {
	material = new THREE.MeshBasicMaterial({
		color: 0x783006
	});
	geometry = new THREE.CylinderGeometry( 1, 0.7, 8, 44, 1, false );
	meshlegLeft = new THREE.Mesh(geometry, material);
	meshlegLeft.position.z = -60;
	meshlegLeft.position.y = -15;
	meshlegLeft.position.x = -1.9;
	scene.add(meshlegLeft);
}

function createCylinderGeometrylegRight() {
	material = new THREE.MeshBasicMaterial({
		color: 0x783006
	});
	geometry = new THREE.CylinderGeometry( 1, 0.7, 8, 44, 1, false );
	meshlegRight = new THREE.Mesh(geometry, material);
	meshlegRight.position.z = -60;
	meshlegRight.position.y = -15;
	meshlegRight.position.x = 1.9;
	scene.add(meshlegRight);
}

function createSphereGeometryBody() {
	material = new THREE.MeshBasicMaterial({
		color: 0xf7c600
	});
	geometry = new THREE.SphereGeometry(17, 32, 32);
	meshBody = new THREE.Mesh(geometry, material);
	meshBody.position.z = -100;
	meshBody.position.y = 20;
	scene.add(meshBody);
}

function createCubeGeometryRightFoot() {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.CubeGeometry(6,2,3);
	meshFootRight = new THREE.Mesh(geometry, material);
	meshFootRight.position.z = -60;
	meshFootRight.position.y = -18;
	meshFootRight.position.x = -3.5
	scene.add(meshFootRight);
}

function createCubeGeometryLeftFoot() {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.CubeGeometry(6,2,3);
	meshFootLeft = new THREE.Mesh(geometry, material);
	meshFootLeft.position.z = -60;
	meshFootLeft.position.y = -18;
	meshFootLeft.position.x = 3.5
	scene.add(meshFootLeft);
}

function createSphereGeometryBodyC () {
	material = new THREE.MeshBasicMaterial({
		color: 0x783006
	});
	geometry = new THREE.SphereGeometry(14, 32, 32);
	meshCentralBody = new THREE.Mesh(geometry, material);
	meshCentralBody.position.z = -100;
	scene.add(meshCentralBody);
}

function createSphereGeometryReye () {
	material = new THREE.MeshBasicMaterial({
		color: 0xffffff
	});
	geometry = new THREE.SphereGeometry(3, 32, 32);
	meshEyeRight = new THREE.Mesh(geometry, material);
	meshEyeRight.position.z = -60;
	meshEyeRight.position.y = 17;
	meshEyeRight.position.x = -3.5;
	scene.add(meshEyeRight);
}

function createSphereGeometryLeye () {
	material = new THREE.MeshBasicMaterial({
		color: 0xffffff
	});
	geometry = new THREE.SphereGeometry(3, 32, 32);
	meshEyeLeft = new THREE.Mesh(geometry, material);
	meshEyeLeft.position.z = -60;
	meshEyeLeft.position.y = 17;
	meshEyeLeft.position.x = 3.5;
	scene.add(meshEyeLeft);
}

function createSphereGeometryLretina () {
	material = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	geometry = new THREE.SphereGeometry(1, 32, 32);
	meshRetinaLeft = new THREE.Mesh(geometry, material);
	meshRetinaLeft.position.z = -50;
	meshRetinaLeft.position.y = 13;
	meshRetinaLeft.position.x = 3;
	scene.add(meshRetinaLeft);
}

function createSphereGeometryRretina () {
	material = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	geometry = new THREE.SphereGeometry(1, 32, 32);
	meshRetinaRight = new THREE.Mesh(geometry, material);
	meshRetinaRight.position.z = -50;
	meshRetinaRight.position.y = 13;
	meshRetinaRight.position.x = -3;
	scene.add(meshRetinaRight);
}

function createCubeGeometryRarm () {
	material = new THREE.MeshBasicMaterial({
		color: 0x783006
	});
	geometry = new THREE.CubeGeometry(14,2.5,3);
	meshArmRight = new THREE.Mesh(geometry, material);
	meshArmRight.position.z = -60;
	meshArmRight.position.y = 2.5;
	meshArmRight.position.x = 14
	scene.add(meshArmRight);
}

function createCubeGeometryLarm () {
	material = new THREE.MeshBasicMaterial({
		color: 0x783006
	});
	geometry = new THREE.CubeGeometry(14,2.5,3);
	meshArmLeft = new THREE.Mesh(geometry, material);
	meshArmLeft.position.z = -60;
	meshArmLeft.position.y = 2.5;
	meshArmLeft.position.x = -14
	scene.add(meshArmLeft);
}

function createSphereGeometryLHand () {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.SphereGeometry(1.5, 32, 32);
	meshHandLeft = new THREE.Mesh(geometry, material);
	meshHandLeft.position.z = -50;
	meshHandLeft.position.y = 2.1;
	meshHandLeft.position.x = -17;
	scene.add(meshHandLeft);
}

function createSphereGeometryRHand () {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.SphereGeometry(1.5, 32, 32);
	meshHandRight = new THREE.Mesh(geometry, material);
	meshHandRight.position.z = -50;
	meshHandRight.position.y = 2.1;
	meshHandRight.position.x = 17;
	scene.add(meshHandRight);
}

function createConeGeometryTail () {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.ConeGeometry(3,8,26,false);
	meshTail = new THREE.Mesh(geometry, material);
	meshTail.position.z = -100;
	meshTail.position.y = -20;
	//meshTail.position.x = -14;
	meshTail.rotation.z = -1 * Math.PI;
	scene.add(meshTail);
}

function createAntennasGeometryRight() {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.CubeGeometry(7,1,1);
	meshAntennasRight = new THREE.Mesh(geometry, material);
	meshAntennasRight.position.z = -59;
	meshAntennasRight.position.y = 25;
	meshAntennasRight.position.x = 3.8

	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.SphereGeometry(1.2, 32, 32);
	meshAntennasRight2 = new THREE.Mesh(geometry, material);
	meshAntennasRight2.position.z = -62;
	meshAntennasRight2.position.y = 29.6;
	meshAntennasRight2.position.x = 6.1;
	meshAntennasRight.rotation.z = 1;
	scene.add(meshAntennasRight2);
	scene.add(meshAntennasRight);
}

function createAntennasGeometryRLeft() {
	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.CubeGeometry(7,1,1);
	meshAntennasLeft = new THREE.Mesh(geometry, material);
	meshAntennasLeft.position.z = -59;
	meshAntennasLeft.position.y = 25;
	meshAntennasLeft.position.x = -3.8

	material = new THREE.MeshBasicMaterial({
		color: 0x00000
	});
	geometry = new THREE.SphereGeometry(1.2, 32, 32);
	meshAntennasLeft2 = new THREE.Mesh(geometry, material);
	meshAntennasLeft2.position.z = -62;
	meshAntennasLeft2.position.y = 29.6;
	meshAntennasLeft2.position.x = -6.1;
	meshAntennasLeft.rotation.z = -1;
	scene.add(meshAntennasLeft2);
	scene.add(meshAntennasLeft);
}

function createSplineCurve () {
// Create a sine-like wave
var curve = new THREE.SplineCurve( [
	new THREE.Vector2( -10, 0 ),
	new THREE.Vector2( -5, -5 ),
	new THREE.Vector2( 0, 0 ),
] );

var points = curve.getPoints( 500 );
var geometrya = new THREE.BufferGeometry().setFromPoints( points );

var materiala = new THREE.LineBasicMaterial( { color : 0x000000 } );

// Create the final object to add to the scene
var splineObject = new THREE.Line( geometrya, materiala );
splineObject.position.z = -85;
splineObject.position.x = 5;
splineObject.position.y = 15;
scene.add(splineObject);
}

function createPlane() {
	material = new THREE.MeshBasicMaterial( {color: 0x77ab59} );
	geometry = new THREE.PlaneGeometry( 205, 27, 50 );
	plano = new THREE.Mesh(geometry, material);
	plano.position.z = -80;
	plano.position.y = -34;
	//plano.position.x = -10;
	scene.add(plano);
}

function animate() {

	//meshBody.rotation.x += 0.02;
	//meshBody.rotation.y += 0.02;
	renderer.render(scene, perspectiveCamera);
	requestAnimationFrame(animate);
}

init();
requestAnimationFrame(animate);
