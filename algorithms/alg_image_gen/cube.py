import numpy as np

from .colors import Colors


class Cube:
    def __init__(self) -> None:
        self.u = np.array([Colors.WHITE] * 9)
        self.d = np.array([Colors.YELLOW] * 9)
        self.f = np.array([Colors.GREEN] * 9)
        self.r = np.array([Colors.RED] * 9)
        self.l = np.array([Colors.ORANGE] * 9)
        self.b = np.array([Colors.BLUE] * 9)
        
        self.moves_map = {
            "R" : lambda : self.moveR(0),
            "R'" : lambda : self.moveR(1),
            "R2" : lambda : self.moveR(2),
            "L" : lambda : self.moveL(0),
            "L'" : lambda : self.moveL(1),
            "L2" : lambda : self.moveL(2),
            "U" : lambda : self.moveU(0),
            "U'" : lambda : self.moveU(1),
            "U2" : lambda : self.moveU(2),
            "D" : lambda : self.moveD(0),
            "D'" : lambda : self.moveD(1),
            "D2" : lambda : self.moveD(2),
            "F" : lambda : self.moveF(0),
            "F'" : lambda : self.moveF(1),
            "F2" : lambda : self.moveF(2),
            "B" : lambda : self.moveB(0),
            "B'" : lambda : self.moveB(1),
            "B2" : lambda : self.moveB(2),
            "M" : lambda : self.moveM(0),
            "M'" : lambda : self.moveM(1),
            "M2" : lambda : self.moveM(2),
            "S" : lambda : self.moveS(0),
            "S'" : lambda : self.moveS(1),
            "S2" : lambda : self.moveS(2),
            "E" : lambda : self.moveE(0),
            "E'" : lambda : self.moveE(1),
            "E2" : lambda : self.moveE(2),
            "x" : lambda : self.rotateX(0),
            "x'" : lambda : self.rotateX(1),
            "x2" : lambda : self.rotateX(2),
            "z" : lambda : self.rotateZ(0),
            "z'" : lambda : self.rotateZ(1),
            "z2" : lambda : self.rotateZ(2),
            "y" : lambda : self.rotateY(0),
            "y'" : lambda : self.rotateY(1),
            "y2" : lambda : self.rotateY(2),
            "r" : lambda : self.mover(0),
            "r'" : lambda : self.mover(1),
            "r2" : lambda : self.mover(2),
            "l" : lambda : self.movel(0),
            "l'" : lambda : self.movel(1),
            "l2" : lambda : self.movel(2),
            "u" : lambda : self.moveu(0),
            "u'" : lambda : self.moveu(1),
            "u2" : lambda : self.moveu(2),
            "d" : lambda : self.moved(0),
            "d'" : lambda : self.moved(1),
            "d2" : lambda : self.moved(2),
            "f" : lambda : self.movef(0),
            "f'" : lambda : self.movef(1),
            "f2" : lambda : self.movef(2),
            "b" : lambda : self.moveb(0),
            "b'" : lambda : self.moveb(1),
            "b2" : lambda : self.moveb(2),
        }
    

    # 0 - normal, 1 - ', 2 - 2

    def _rotateFaceColors(self, axis, type):
        if type == 0:
            temp0 = axis[0]
            axis[0] = axis[6]
            axis[6] = axis[8]
            axis[8] = axis[2]
            axis[2] = temp0

            temp0 = axis[1]
            axis[1] = axis[3]
            axis[3] = axis[7]
            axis[7] = axis[5]
            axis[5] = temp0
        elif type == 1:
            temp0 = axis[0]
            axis[0] = axis[2]
            axis[2] = axis[8]
            axis[8] = axis[6]
            axis[6] = temp0

            temp0 = axis[1]
            axis[1] = axis[5]
            axis[5] = axis[7]
            axis[7] = axis[3]
            axis[3] = temp0

        elif type == 2:
            self._rotateFaceColors(axis, 0)
            self._rotateFaceColors(axis, 0)

    def rotateY(self, type: int):
        if type == 0:
            tempF = self.f
            self.f = self.r
            self.r = self.b
            self.b = self.l
            self.l = tempF

            self._rotateFaceColors(self.u, 0)
            self._rotateFaceColors(self.d, 1)
        elif type == 1:
            tempF = self.f
            self.f = self.l
            self.l = self.b
            self.b = self.r
            self.r = tempF

            self._rotateFaceColors(self.u, 1)
            self._rotateFaceColors(self.d, 0)
        elif type == 2:
            self.rotateY(0)
            self.rotateY(0)

    def rotateX(self, type: int):
        if type == 0:
            tempU = self.u
            self.u = self.f
            self.f = self.d
            self.d = self.b
            self.b = tempU

            self._rotateFaceColors(self.r, 0)
            self._rotateFaceColors(self.l, 1)

            self._rotateFaceColors(self.b, 2)
            self._rotateFaceColors(self.d, 2)
        elif type == 1:
            tempU = self.u
            self.u = self.b
            self.b = self.d
            self.d = self.f
            self.f = tempU

            self._rotateFaceColors(self.r, 1)
            self._rotateFaceColors(self.l, 0)

            self._rotateFaceColors(self.b, 2)
            self._rotateFaceColors(self.u, 2)
        elif type == 2:
            self.rotateX(0)
            self.rotateX(0)

    def rotateZ(self, type: int):
        if type == 0:
            tempU = self.u
            self.u = self.l
            self.l = self.d
            self.d = self.r
            self.r = tempU

            self._rotateFaceColors(self.f, 0)
            self._rotateFaceColors(self.b, 1)

            self._rotateFaceColors(self.r, 0)
            self._rotateFaceColors(self.d, 0)
            self._rotateFaceColors(self.l, 0)
            self._rotateFaceColors(self.u, 0)
        elif type == 1:
            tempU = self.u
            self.u = self.r
            self.r = self.d
            self.d = self.l
            self.l = tempU

            self._rotateFaceColors(self.f, 1)
            self._rotateFaceColors(self.b, 0)

            self._rotateFaceColors(self.u, 1)
            self._rotateFaceColors(self.r, 1)
            self._rotateFaceColors(self.d, 1)
            self._rotateFaceColors(self.l, 1)
        else:
            self.rotateZ(0)
            self.rotateZ(0)

    def moveU(self, type: int):
        if type == 0:
            self._rotateFaceColors(self.u, 0)

            temp0 = self.f[0]
            self.f[0] = self.r[0]
            self.r[0] = self.b[0]
            self.b[0] = self.l[0]
            self.l[0] = temp0
            temp0 = self.f[1]
            self.f[1] = self.r[1]
            self.r[1] = self.b[1]
            self.b[1] = self.l[1]
            self.l[1] = temp0
            temp0 = self.f[2]
            self.f[2] = self.r[2]
            self.r[2] = self.b[2]
            self.b[2] = self.l[2]
            self.l[2] = temp0
        elif type == 1:
            self._rotateFaceColors(self.u, 1)

            temp0 = self.f[0]
            self.f[0] = self.l[0]
            self.l[0] = self.b[0]
            self.b[0] = self.r[0]
            self.r[0] = temp0

            temp0 = self.f[1]
            self.f[1] = self.l[1]
            self.l[1] = self.b[1]
            self.b[1] = self.r[1]
            self.r[1] = temp0

            temp0 = self.f[2]
            self.f[2] = self.l[2]
            self.l[2] = self.b[2]
            self.b[2] = self.r[2]
            self.r[2] = temp0

        elif type == 2:
            self.moveU(0)
            self.moveU(0)

    def moveR(self, type: int):
        self.rotateZ(1)

        self.moveU(type)

        self.rotateZ(0)

    def moveL(self, type: int):
        self.rotateZ(0)

        self.moveU(type)

        self.rotateZ(1)

    def moveD(self, type: int):
        self.rotateZ(2)

        self.moveU(type)

        self.rotateZ(2)

    def moveF(self, type: int):
        self.rotateX(0)

        self.moveU(type)

        self.rotateX(1)

    def moveB(self, type: int):
        self.rotateX(1)

        self.moveU(type)

        self.rotateX(0)

    def moveM(self, type: int):
        if type == 0:
            self.moveR(0)
            self.moveL(1)
            self.rotateX(1)
        elif type == 1:
            self.moveR(1)
            self.moveL(0)
            self.rotateX(0)
        else:
            self.moveM(0)
            self.moveM(0)

    def moveS(self, type: int):
        self.rotateY(0)
        self.moveM(type)
        self.rotateY(1)

    def moveE(self, type: int):
        self.rotateZ(0)
        self.moveM(type)
        self.rotateZ(1)
        
    
    def mover(self, type : int):
        self.moveL(type)
        self.rotateX(type)
        
    
    def movel(self, type : int):
        if type == 0:
            self.moveR(0)
            self.rotateX(1)
        elif type == 1:
            self.moveR(1)
            self.rotateX(0)
        elif type == 2:
            self.movel(0)
            self.movel(0)
    
    
    def moved(self, type : int):
        if type == 0:
            self.moveU(0)
            self.rotateY(1)
        elif type == 1:
            self.moveU(1)
            self.rotateY(0)
        elif type == 2:
            self.moved(0)
            self.moved(0)
    
    
    def moveu(self, type : int):
        self.moveD(type)
        self.rotateY(type)
        
    
    def movef(self, type : int):
        self.moveB(type)
        self.rotateZ(type)
    
    
    def moveb(self, type : int):
        if type == 0:
            self.moveF(0)
            self.rotateZ(1)
        elif type == 1:
            self.moveF(1)
            self.rotateZ(0)
        elif type == 2:
            self.moveb(0)
            self.moveb(0)
        

    def executeAlg(self, alg : str):
        moves = alg.split()
    
        for move in moves:
            if move in self.moves_map:
                self.moves_map[move]()