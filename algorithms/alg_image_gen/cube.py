import numpy as np

from colors import Colors


class Cube:
    def __init__(self) -> None:
        self.u = np.array([Colors.WHITE] * 9)
        self.d = np.array([Colors.YELLOW] * 9)
        self.f = np.array([Colors.GREEN] * 9)
        self.r = np.array([Colors.RED] * 9)
        self.l = np.array([Colors.ORANGE] * 9)
        self.b = np.array([Colors.BLUE] * 9)

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
        self.moveR(0)
        self.moveL(1)
        self.rotateX(1)

    def moveS(self, type: int):
        self.moveF(1)
        self.moveB(0)
        self.rotateZ(0)

    def moveE(self, type: int):
        self.moveU(0)
        self.moveD(1)
        self.rotateY(1)
