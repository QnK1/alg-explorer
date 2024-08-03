import * as THREE from "three";


const colors = {
    green: new THREE.Color(0x009b48),
    red: new THREE.Color(0xb90000),
    blue: new THREE.Color(0x0045ad),
    orange: new THREE.Color(0xff5900),
    white: new THREE.Color(0xffffff),
    yellow: new THREE.Color(0xffd500),
    inner: new THREE.Color(0xd9d9d9),
};

const materials = {
    green: new THREE.MeshPhongMaterial({color: colors.green}),
    red: new THREE.MeshPhongMaterial({color: colors.red}),
    blue: new THREE.MeshPhongMaterial({color: colors.blue}),
    orange: new THREE.MeshPhongMaterial({color: colors.orange}),
    white: new THREE.MeshPhongMaterial({color: colors.white}),
    yellow: new THREE.MeshPhongMaterial({color: colors.yellow}),
    inner: new THREE.MeshPhongMaterial({color: colors.inner}),
};

const piece_len = 2;
const piece_dist = 0.2;
const offset_x = -2.2;
const offset_y = 2.2;
const offset_z = 2.2;



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight);
camera.position.set( 10, 10, 25 );
camera.lookAt( scene.position );

const renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true} );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );
			

const ambientLight = new THREE.AmbientLight( 'white', 3);
    scene.add( ambientLight );





const ULF_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.white,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
ULF_corner.position.set(offset_x, offset_y, offset_z);
scene.add(ULF_corner);

const UF_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.white,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
UF_edge.position.set((piece_len + piece_dist) + offset_x, 0 + offset_y, 0 + offset_z);
scene.add(UF_edge);

const URF_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.white,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
URF_corner.position.set((2 * (piece_len + piece_dist)) + offset_x, 0 + offset_y, 0 + offset_z);
scene.add(URF_corner);

const LF_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
LF_edge.position.set(0 + offset_x, -(piece_len + piece_dist)+ offset_y, 0 + offset_z);
scene.add(LF_edge);

const F_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
F_center.position.set((piece_len + piece_dist) + offset_x, -(piece_len + piece_dist) + offset_y, 0 + offset_z);
scene.add(F_center);

const RF_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.green,
        materials.inner,
    ]
);
RF_edge.position.set((2 * (piece_len + piece_dist))  + offset_x, -(piece_len + piece_dist) + offset_y, 0 + offset_z);
scene.add(RF_edge);

const DLF_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.yellow,
        materials.green,
        materials.inner,
    ]
);
DLF_corner.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);
scene.add(DLF_corner);

const DF_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.green,
        materials.inner,
    ]
);
DF_edge.position.set((piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);
scene.add(DF_edge);

const DRF_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.green,
        materials.inner,
    ]
);
DRF_corner.position.set((2 * (piece_len + piece_dist)) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, 0 + offset_z);
scene.add(DRF_corner);

const UL_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.white,
        materials.inner,
        materials.inner,
        materials.inner,
    ]
);
UL_edge.position.set(0 + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(UL_edge);

const U_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.white,
        materials.inner,
        materials.inner,
        materials.inner,
    ]
);
U_center.position.set((piece_len + piece_dist) + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(U_center);

const UR_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.white,
        materials.inner,
        materials.inner,
        materials.inner,
    ]
);
UR_edge.position.set((2 * (piece_len + piece_dist)) + offset_x, 0 + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(UR_edge);

const L_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
    ]
);
L_center.position.set(0 + offset_x, -(piece_len + piece_dist) + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(L_center);

const R_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
    ]
);
R_center.position.set((2 * (piece_len + piece_dist)) + offset_x, -(piece_len + piece_dist) + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(R_center);

const DL_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.inner,
    ]
);
DL_edge.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(DL_edge);

const D_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.inner,
    ]
);
D_center.position.set((piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(D_center);

const DR_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.inner,
    ]
);
DR_edge.position.set((2 * (piece_len + piece_dist)) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(piece_len + piece_dist) + offset_z);
scene.add(DR_edge);

const ULB_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.white,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
ULB_corner.position.set(0 + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(ULB_corner);

const UB_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.white,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
UB_edge.position.set((piece_len + piece_dist) + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(UB_edge);

const URB_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.white,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
URB_corner.position.set((2 * (piece_len + piece_dist)) + offset_x, 0 + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(URB_corner);

const LB_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
LB_edge.position.set(0 + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(LB_edge);

const B_center = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
B_center.position.set((piece_len + piece_dist) + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(B_center);

const RB_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.inner,
        materials.blue,
    ]
);
RB_edge.position.set((2 * (piece_len + piece_dist)) + offset_x, -(piece_len + piece_dist) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(RB_edge);

const DLB_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.orange,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.blue,
    ]
);
DLB_corner.position.set(0 + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(DLB_corner);

const DB_edge = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.inner,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.blue,
    ]
);
DB_edge.position.set((piece_len + piece_dist) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(DB_edge);

const DRB_corner = new THREE.Mesh(
    new THREE.BoxGeometry( piece_len, piece_len, piece_len),
    [
        materials.red,
        materials.inner,
        materials.inner,
        materials.yellow,
        materials.inner,
        materials.blue,
    ]
);
DRB_corner.position.set((2 * (piece_len + piece_dist)) + offset_x, -(2 * (piece_len + piece_dist)) + offset_y, -(2 * (piece_len + piece_dist)) + offset_z);
scene.add(DRB_corner);


const pieces = [UB_edge, UF_edge, ULB_corner, ULF_corner, UL_edge, URB_corner, URF_corner, UR_edge, U_center, RB_edge,
    RF_edge, R_center, DB_edge, DF_edge, DLB_corner, DLF_corner, DL_edge, DRB_corner, DRF_corner, DR_edge, D_center, LB_edge, 
LF_edge, L_center, F_center, B_center];


let U_face = [];
let R_face = [];
let D_face = [];
let L_face = [];
let F_face = [];
let B_face = [];
let M_face = [];
let S_face = [];
let E_face = [];

const updateFaces = function(){
    const eps = 0.0001;
    
    U_face = [];
    R_face = [];
    D_face = [];
    L_face = [];
    F_face = [];
    B_face = [];
    M_face = [];
    S_face = [];
    E_face = [];
    for(let piece of pieces){
        
        if(Math.abs(piece.position.y - offset_y) < eps)
            U_face.push(piece);
        if(Math.abs(piece.position.y - (-(2 * (piece_len + piece_dist)) + offset_y)) < eps)
            D_face.push(piece);
        if(Math.abs(piece.position.x - offset_x) < eps)
            L_face.push(piece);
        if(Math.abs(piece.position.x - ((2 * (piece_len + piece_dist)) + offset_x)) < eps)
            R_face.push(piece);
        if(Math.abs(piece.position.z - (-(2 * (piece_len + piece_dist)) + offset_z)) < eps)
            B_face.push(piece);
        if(Math.abs(piece.position.z - offset_z) < eps)
            F_face.push(piece);
        if(Math.abs(piece.position.x - ((piece_len + piece_dist) + offset_x)) < eps)
            M_face.push(piece);
        if(Math.abs(piece.position.z - (-(piece_len + piece_dist) + offset_z)) < eps)
            S_face.push(piece)
        if(Math.abs(piece.position.y - (-(piece_len + piece_dist) + offset_y)) < eps)
            E_face.push(piece);
            
    }
};



const move_R = (type) => {
    const group = new THREE.Group();
    R_face.forEach((p) => {
        group.attach(p);
    });
    scene.add(group);

    
    switch(type){
        case 0:
            group.rotation.x = -Math.PI / 2;
        break;
        case 1:
            group.rotation.x = Math.PI / 2;
        break;
        case 2:
            group.rotation.x = Math.PI;
        break;
    }

    
    R_face.forEach((p) => {
        scene.attach(p);
    });
    group.clear();
    scene.remove(group);
    updateFaces();
};




updateFaces();
move_R(0);

const loop = () => {
    
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
};

loop();















renderer.render(scene, camera);