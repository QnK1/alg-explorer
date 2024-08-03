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





const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight);
camera.position.set( 10, 10, 25 );
camera.lookAt( scene.position );

const renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true} );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );
			

const ambientLight = new THREE.AmbientLight( 'white', 3);
    scene.add( ambientLight );

const constants = {
    eps: 0.0001,
    piece_len: 2,
    piece_dist: 0.2,
    offset_x: -2.2,
    offset_y: 2.2,
    offset_z: 2.2,
};

const group = new THREE.Group();

const Cube = {
    
    pieces: {
        ULF_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.white,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        UF_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.white,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        URF_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.white,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        URF_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.white,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        LF_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        F_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        LF_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        F_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        RF_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.green,
                materials.inner,
            ]
        ),
        DLF_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.yellow,
                materials.green,
                materials.inner,
            ]
        ),
        DRF_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.green,
                materials.inner,
            ]
        ),
        DF_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.green,
                materials.inner,
            ]
        ),
        UL_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.white,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        ),
        U_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.white,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        ),
        UR_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.white,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        ),
        L_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        ),
        R_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        ),
        DL_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.inner,
            ]
        ),
        D_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.inner,
            ]
        ),
        ULB_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.white,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        DR_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.inner,
            ]
        ),
        UB_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.white,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        URB_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.white,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        LB_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        B_center: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        RB_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.blue,
            ]
        ),
        DLB_corner:  new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.orange,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.blue,
            ]
        ),
        DB_edge: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.blue,
            ]
        ),
        DRB_corner: new THREE.Mesh(
            new THREE.BoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len),
            [
                materials.red,
                materials.inner,
                materials.inner,
                materials.yellow,
                materials.inner,
                materials.blue,
            ]
        ),
    },
    
    faces: {
        U_face: [],
        R_face: [],
        D_face: [],
        L_face: [],
        F_face: [],
        B_face: [],
        M_face: [],
        S_face: [],
        E_face: [],
    },
    

    updateFaces(){
    
        this.faces.U_face = [];
        this.faces.R_face = [];
        this.faces.D_face = [];
        this.faces.L_face = [];
        this.faces.F_face = [];
        this.faces.B_face = [];
        this.faces.M_face = [];
        this.faces.S_face = [];
        this.faces.E_face = [];
    for(let [key, piece] of Object.entries(this.pieces)){

        if(Math.abs(piece.position.y - constants.offset_y) < constants.eps)
            this.faces.U_face.push(piece);
        if(Math.abs(piece.position.y - (-(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y)) < constants.eps)
            this.faces.D_face.push(piece);
        if(Math.abs(piece.position.x - constants.offset_x) < constants.eps)
            this.faces.L_face.push(piece);
        if(Math.abs(piece.position.x - ((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x)) < constants.eps)
            this.faces.R_face.push(piece);
        if(Math.abs(piece.position.z - (-(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z)) < constants.eps)
            this.faces.B_face.push(piece);
        if(Math.abs(piece.position.z - constants.offset_z) < constants.eps)
            this.faces.F_face.push(piece);
        if(Math.abs(piece.position.x - ((constants.piece_len + constants.piece_dist) + constants.offset_x)) < constants.eps)
            this.faces.M_face.push(piece);
        if(Math.abs(piece.position.z - (-(constants.piece_len + constants.piece_dist) + constants.offset_z)) < constants.eps)
            this.faces.S_face.push(piece)
        if(Math.abs(piece.position.y - (-(constants.piece_len + constants.piece_dist) + constants.offset_y)) < constants.eps)
            this.faces.E_face.push(piece);
            
    }
    },

    init(){
        this.pieces.ULF_corner.position.set(constants.offset_x, constants.offset_y, constants.offset_z);
        scene.add(this.pieces.ULF_corner);

        this.pieces.UF_edge.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, 0 + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.UF_edge);


        this.pieces.URF_corner.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, 0 + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.URF_corner);


        this.pieces.LF_edge.position.set(0 + constants.offset_x, -(constants.piece_len + constants.piece_dist)+ constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.LF_edge);


        this.pieces.F_center.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.F_center);


        this.pieces.RF_edge.position.set((2 * (constants.piece_len + constants.piece_dist))  + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.RF_edge);

        this.pieces.DLF_corner.position.set(0 + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.DLF_corner);


        this.pieces.DF_edge.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.DF_edge);

        this.pieces.DRF_corner.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, 0 + constants.offset_z);
        scene.add(this.pieces.DRF_corner);

        this.pieces.UL_edge.position.set(0 + constants.offset_x, 0 + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.UL_edge);

        this.pieces.U_center.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, 0 + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.U_center);

        this.pieces.UR_edge.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, 0 + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.UR_edge);

        this.pieces.L_center.position.set(0 + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.L_center);

        this.pieces.R_center.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.R_center);

        this.pieces.DL_edge.position.set(0 + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.DL_edge);

        this.pieces.D_center.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.D_center);

        this.pieces.DR_edge.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(constants.piece_len + constants.piece_dist) + constants.offset_z);
        scene.add(this.pieces.DR_edge);

        this.pieces.ULB_corner.position.set(0 + constants.offset_x, 0 + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.ULB_corner);

        this.pieces.UB_edge.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, 0 + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.UB_edge);

        this.pieces.URB_corner.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, 0 + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.URB_corner);

        this.pieces.LB_edge.position.set(0 + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.LB_edge);

        this.pieces.B_center.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.B_center);

        this.pieces.RB_edge.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, -(constants.piece_len + constants.piece_dist) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.RB_edge);

        this.pieces.DLB_corner.position.set(0 + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.DLB_corner);

        this.pieces.DB_edge.position.set((constants.piece_len + constants.piece_dist) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.DB_edge);

        this.pieces.DRB_corner.position.set((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y, -(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z);
        scene.add(this.pieces.DRB_corner);

        this.updateFaces();
    },

    self: this,

    loop_R(){
        let self = this;

        if(group.rotation.x > - Math.PI / 2){
            group.rotation.x -= Math.PI / 200;
            renderer.render(scene, camera);
            requestAnimationFrame(function(){
                self.loop_R();
            });
        }
        else{
            
            group.rotation.x = - Math.PI / 2;
            
        }

    },

    move_R(type) {
        group.clear();
        scene.remove(group);
        this.updateFaces();
        this.faces.R_face.forEach((p) => {
            scene.attach(p);
        });
        
        this.faces.R_face.forEach((p) => {
            group.attach(p);
        });
        scene.add(group);
    
        
        switch(type){
            case 0:
                // group.rotation.x = -Math.PI / 2;
                this.loop_R();
                
            break;
            case 1:
                group.rotation.x = Math.PI / 2;
            break;
            case 2:
                group.rotation.x = Math.PI;
            break;
        }
        
        
        
    },

};


Cube.init();
Cube.move_R(0);
// Cube.move_R(1);
const vector = new THREE.Vector3();
setTimeout(() => {Cube.pieces.URF_corner.getWorldPosition(vector); console.log(vector);}, 5000);
console.log(vector);
// Cube.faces.R_face.forEach((p) => {
//     group.attach(p);
// });
// scene.add(group);
// Cube.loop_R();


