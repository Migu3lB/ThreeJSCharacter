function render () {
	renderer.render( scene, perspectiveCamera);
}

function createPerspectiveCamera (fov, aspect, near, far) {
	return new THREE.PerspectiveCamera( fov, aspect, near, far );
}

function createScene () {
	return new THREE.Scene();
}

function createRendeder () {
	return new THREE.WebGLRenderer();
}

function createCubeGeometry (a,b,c) {
	return new THREE.BoxGeometry(a,b,c);
}

function createSphereGeometry (radius,widthSeg,heightSeg) {
	return new THREE.SphereGeometry(radius,widthSeg,heightSeg);
}

function createMeshBasicMaterial (customColor) {
	return new THREE.MeshBasicMaterial({color: customColor});
}

function createMesh (geometry, material) {
	return new THREE.Mesh( geometry, material);
}