import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const colors = {
    green: new THREE.Color(0x2f663e),
    red: new THREE.Color(0xc8102e),
    blue: new THREE.Color(0x003366),
    orange: new THREE.Color(0xff6f00),
    white: new THREE.Color(0xf5f5dc),
    yellow: new THREE.Color(0xffd700),
    inner: new THREE.Color(0x101010),
};

const materials = {
    g: new THREE.MeshPhongMaterial({color: colors.green}),
    r: new THREE.MeshPhongMaterial({color: colors.red}),
    b: new THREE.MeshPhongMaterial({color: colors.blue}),
    o: new THREE.MeshPhongMaterial({color: colors.orange}),
    w: new THREE.MeshPhongMaterial({color: colors.white}),
    y: new THREE.MeshPhongMaterial({color: colors.yellow}),
    inner: new THREE.MeshPhongMaterial({color: colors.inner}),
};


const scene = new THREE.Scene();


let currMoveIndex = 0;
const moveElements = [...document.querySelectorAll('.move')];

const ambientLight = new THREE.AmbientLight( 'white', 3);
    scene.add( ambientLight );

const constants = {
    eps: 0.0001,
    piece_len: 50,
    piece_dist: 2,
    offset_x: -52,
    offset_y: 52,
    offset_z: 52,
    rotation_step: Math.PI / 175,
    axes: {
        X: new THREE.Vector3(1, 0, 0),
        Y: new THREE.Vector3(0, 1, 0),
        Z: new THREE.Vector3(0, 0, 1),
    },
    
};

const group = new THREE.Group();
let speedFactor = 1;

const Cube = {
    pieces: {
        
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
        u_face: [],
        r_face: [],
        d_face: [],
        l_face: [],
        f_face: [],
        b_face: [],
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
        this.faces.u_face = [];
        this.faces.r_face = [];
        this.faces.d_face = [];
        this.faces.l_face = [];
        this.faces.f_face = [];
        this.faces.b_face = [];
        for(let [key, piece] of Object.entries(this.pieces)){

            if(Math.abs(piece.position.y - constants.offset_y) < constants.eps)
                this.faces.U_face.push(piece);
            else if(Math.abs(piece.position.y - (-(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_y)) < constants.eps)
                this.faces.D_face.push(piece);
            if(Math.abs(piece.position.x - constants.offset_x) < constants.eps)
                this.faces.L_face.push(piece);
            else if(Math.abs(piece.position.x - ((2 * (constants.piece_len + constants.piece_dist)) + constants.offset_x)) < constants.eps)
                this.faces.R_face.push(piece);
            if(Math.abs(piece.position.z - (-(2 * (constants.piece_len + constants.piece_dist)) + constants.offset_z)) < constants.eps)
                this.faces.B_face.push(piece);
            else if(Math.abs(piece.position.z - constants.offset_z) < constants.eps)
                this.faces.F_face.push(piece);
            if(Math.abs(piece.position.x - ((constants.piece_len + constants.piece_dist) + constants.offset_x)) < constants.eps)
                this.faces.M_face.push(piece);
            if(Math.abs(piece.position.z - (-(constants.piece_len + constants.piece_dist) + constants.offset_z)) < constants.eps)
                this.faces.S_face.push(piece)
            if(Math.abs(piece.position.y - (-(constants.piece_len + constants.piece_dist) + constants.offset_y)) < constants.eps)
                this.faces.E_face.push(piece);
                
        }
        this.faces.u_face = [...this.faces.U_face, ...this.faces.E_face];
        this.faces.d_face = [...this.faces.D_face, ...this.faces.E_face];
        this.faces.r_face = [...this.faces.R_face, ...this.faces.M_face];
        this.faces.l_face = [...this.faces.L_face, ...this.faces.M_face];
        this.faces.f_face = [...this.faces.F_face, ...this.faces.S_face];
        this.faces.b_face = [...this.faces.B_face, ...this.faces.S_face];
    },

    loadState(state){
        const regex = /^[wyrogb]{54}$/;

        if(state.match(regex) === null)
            state = "wwwwwwwwwyyyyyyyyyrrrrrrrrrooooooooogggggggggbbbbbbbbb";
        
        this.pieces.ULF_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[29]],
                materials[state[6]],
                materials.inner,
                materials[state[36]],
                materials.inner,
            ]
        );

        this.pieces.UF_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials[state[7]],
                materials.inner,
                materials[state[37]],
                materials.inner,
            ]
        );

        this.pieces.URF_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[18]],
                materials.inner,
                materials[state[8]],
                materials.inner,
                materials[state[38]],
                materials.inner,
            ]
        );

        this.pieces.LF_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[32]],
                materials.inner,
                materials.inner,
                materials[state[39]],
                materials.inner,
            ]
        );

        this.pieces.F_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[40]],
                materials.inner,
            ]
        );

        this.pieces.RF_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[21]],
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[41]],
                materials.inner,
            ]
        );

        this.pieces.DLF_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[35]],
                materials.inner,
                materials[state[9]],
                materials[state[42]],
                materials.inner,
            ]
        );

        this.pieces.DRF_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[24]],
                materials.inner,
                materials.inner,
                materials[state[11]],
                materials[state[44]],
                materials.inner,
            ]
        );

        this.pieces.DF_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[10]],
                materials[state[43]],
                materials.inner,
            ]
        );

        this.pieces.UL_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[28]],
                materials[state[3]],
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.U_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials[state[4]],
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.UR_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[19]],
                materials.inner,
                materials[state[5]],
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.L_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[31]],
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.R_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[22]],
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.DL_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[34]],
                materials.inner,
                materials[state[12]],
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.D_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[13]],
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.ULB_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[27]],
                materials[state[0]],
                materials.inner,
                materials.inner,
                materials[state[47]],
            ]
        );

        this.pieces.DR_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[25]],
                materials.inner,
                materials.inner,
                materials[state[14]],
                materials.inner,
                materials.inner,
            ]
        );

        this.pieces.UB_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials[state[1]],
                materials.inner,
                materials.inner,
                materials[state[46]],
            ]
        );

        this.pieces.URB_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[20]],
                materials.inner,
                materials[state[2]],
                materials.inner,
                materials.inner,
                materials[state[45]],
            ]
        );
        
        this.pieces.LB_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[30]],
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[50]],
            ]
        );

        this.pieces.B_center = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[49]],
            ]
        );

        this.pieces.RB_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[23]],
                materials.inner,
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[48]],
            ]
        );

        this.pieces.DLB_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials[state[33]],
                materials.inner,
                materials[state[15]],
                materials.inner,
                materials[state[53]],
            ]
        );

        this.pieces.DB_edge = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials.inner,
                materials.inner,
                materials.inner,
                materials[state[16]],
                materials.inner,
                materials[state[52]],
            ]
        );

        this.pieces.DRB_corner = new THREE.Mesh(
            new RoundedBoxGeometry( constants.piece_len, constants.piece_len, constants.piece_len, constants.piece_len * 0.12, 7),
            [
                materials[state[26]],
                materials.inner,
                materials.inner,
                materials[state[17]],
                materials.inner,
                materials[state[51]],
            ]
        );
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

    move_steps: {
        "R" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "R'" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "R2" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "R2'" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "U" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "U'" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "U2" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "U2'" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "F" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "F'" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "F2" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
        "F2'" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "L" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "L'" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "L2" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "L2'" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "D" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "D'" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "D2" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "D2'" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "B" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "B'" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "B2" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "B2'" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
        "M" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "M'" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "M2" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "M2'" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "S" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "S'" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "S2" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
        "S2'" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "E" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "E'" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "E2" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "E2'" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "x" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "x'" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "x2" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "x2'" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "y" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "y'" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "y2" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "y2'" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "z" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "z'" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "z2" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
        "z2'" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "r" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "r'" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "r2" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "r2" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "u" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "u'" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "u2" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "u2" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "f" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "f'" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "f2" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
        "f2" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "l" : {axis: constants.axes.X, step: (constants.rotation_step)},
        "l'" : {axis: constants.axes.X, step: (-constants.rotation_step)},
        "l2" : {axis: constants.axes.X, step: (1.15 * constants.rotation_step)},
        "l2'" : {axis: constants.axes.X, step: (-1.15 * constants.rotation_step)},
        "d" : {axis: constants.axes.Y, step: (constants.rotation_step)},
        "d'" : {axis: constants.axes.Y, step: (-constants.rotation_step)},
        "d2" : {axis: constants.axes.Y, step: (1.15 * constants.rotation_step)},
        "d2'" : {axis: constants.axes.Y, step: (-1.15 * constants.rotation_step)},
        "b" : {axis: constants.axes.Z, step: (constants.rotation_step)},
        "b'" : {axis: constants.axes.Z, step: (-constants.rotation_step)},
        "b2" : {axis: constants.axes.Z, step: (1.15 * constants.rotation_step)},
        "b2'" : {axis: constants.axes.Z, step: (-1.15 * constants.rotation_step)},
    },

    animating: false,
    isPaused: false,
    stack: [],
    currTop: -1,
    prevTop: -1,
    
    move(type, ex_next, instant = false){
        if(this.animating || (typeof type !== "string") || !(type in this.move_steps))
            return;

        let symbolIndex;        
        if(this.currTop < this.prevTop || this.prevTop == -1){
            symbolIndex = this.stack.length - this.currTop - 2;
        }
        else{
            symbolIndex = this.stack.length - this.currTop - 1;
        }

        moveElements[symbolIndex].classList.add('current-move');
        moveElements[symbolIndex].classList.toggle('done-move');
        this.prevTop = this.currTop;

        this.animating = true;
        const self = this;
        let totalRotaion = 0;
        const maxAbsRotation = type.includes("2") ? Math.PI : Math.PI / 2;

        const curr_face = (type.includes("x") || type.includes("z") || type.includes("y"))
            ? Object.values(this.pieces) : this.faces[`${type[0]}_face`];

        curr_face.forEach((p) => {
            group.attach(p);
        });
        scene.add(group);

        let prevTimeStamp;
        let currRotation;
        function frame(timeStamp){
            if(prevTimeStamp === undefined)
                prevTimeStamp = timeStamp;
            
            if(totalRotaion < maxAbsRotation){
                if(totalRotaion < 0.1 * maxAbsRotation)
                    currRotation = 0.735 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else if(totalRotaion < 0.125 * maxAbsRotation)
                    currRotation = 0.805 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else if(totalRotaion < 0.15 * maxAbsRotation)
                    currRotation = 0.835 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else if(totalRotaion < 0.175 * maxAbsRotation)
                    currRotation = 0.905 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else if(totalRotaion < 0.2 * maxAbsRotation)
                    currRotation = 0.955 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else if(totalRotaion < 0.225 * maxAbsRotation)
                    currRotation = 0.985 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                else
                    currRotation = 1 * speedFactor * 144 * self.move_steps[type].step * ((timeStamp - prevTimeStamp) / 1000);
                
                group.rotateOnWorldAxis(self.move_steps[type].axis, currRotation);
                totalRotaion += Math.abs(currRotation);
                renderer.render(scene, camera);

                requestAnimationFrame(frame);
            }
            else{
                group.rotateOnWorldAxis(self.move_steps[type].axis, 
                    Math.sign(self.move_steps[type].step) * (maxAbsRotation - totalRotaion));
                renderer.render(scene, camera);
    
                curr_face.forEach((p) => {
                    scene.attach(p);
                });
                self.updateFaces();
                group.clear();
                self.animating = false;

                moveElements[symbolIndex].classList.remove('current-move');

                if(!self.isPaused && ex_next){
                    if(ex_next === "forward" && self.currTop >= 0){
                        self.move(self.stack[self.currTop--], "forward");
                    }
                    else if(ex_next === "back" && self.currTop < self.stack.length - 1){
                        self.move(self.reverseMoveSign(self.stack[++self.currTop]), "back");
                    }
                }
                    
            };

            prevTimeStamp = timeStamp;
        };

        requestAnimationFrame(frame);

        
    },

    reverseMoveSign(move){
        if(move.includes("'"))
            return move.slice(0, -1);
        else
            return `${move}'`;
    },

    forward(){
        if(this.currTop >= 0 && !this.animating){
            speedFactor = 1;
            this.move(this.stack[this.currTop--], false);
        }
            
    },

    back(){
        if(this.currTop < this.stack.length - 1 && !this.animating){
            speedFactor = 1;
            this.move(this.reverseMoveSign(this.stack[++this.currTop]), false);
        }
            
    },

    play(){
        if(this.currTop >= 0 && !this.animating){
            speedFactor = 1;
            this.isPaused = false;
            this.move(this.stack[this.currTop--], "forward");
        }
            
    },

    playBack(){
        if(this.currTop < this.stack.length - 1 && !this.animating){
            speedFactor = 10;
        this.isPaused = false;
            this.move(this.reverseMoveSign(this.stack[++this.currTop]), "back");
        }
            
    },

    pause(){
        this.isPaused = true;
    },



    loadAlg(alg){
        const regex = /^( |\n|\/\/[^\n]*)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|\/\/[^\n]*)+)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|\/\/[^\n]*)*){1}$/m;

        if((typeof alg != "string") || alg.match(regex) === null)
            return;

        this.stack = alg.trim().replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '').trim().split(/[\s]+/).reverse();
        this.currTop = this.stack.length - 1;
    },

    execute(alg){
        this.loadAlg(alg);
        this.play();
    },


};

const camera = new THREE.PerspectiveCamera( 29, 1);
camera.position.set( 300, 300, 300 );
camera.lookAt( scene.position );

const cubeContainer = document.querySelector('.alg-cube');

const renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true} );
renderer.setSize( 800, 800 );



const algCard = document.querySelector('.alg-card');

const cubeState = algCard.dataset.cubeState;

Cube.loadState(cubeState);
Cube.init();
Cube.loadAlg(algContent);


renderer.render(scene, camera);


const forwardBtn = document.querySelector('.forward');
const backBtn = document.querySelector('.back');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const playBackBtn = document.querySelector('.playBack');



forwardBtn.addEventListener('click', () => {
    Cube.forward();
});

backBtn.addEventListener('click', () => {
    Cube.back();
});

playBtn.addEventListener('click', () => {
    Cube.play();
});

pauseBtn.addEventListener('click', () => {
    Cube.pause();
});

playBackBtn.addEventListener('click', () => {
    Cube.playBack();
});


cubeContainer.appendChild(renderer.domElement);
