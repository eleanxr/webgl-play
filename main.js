var container,
    renderer,
    scene,
    camera,
    mesh,
    start = Date.now(),
    fov = 30;

window.addEventListener('load', function () {
    container = document.getElementById("container");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        1,
        10000
    );
    camera.position.z = 100;
    camera.target = new THREE.Vector3(0, 0, 0);

    scene.add(camera);

    material = new THREE.MeshBasicMaterial({
        color: 0xb7ff00,
        wireframe: true
    });

    mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(20, 4),
        material
    );
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    render();
});

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
