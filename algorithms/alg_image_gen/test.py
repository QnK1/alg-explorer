from cube import Cube
from make_image import makeImage

cube = Cube()
cube.executeAlg("B2 F2 L' U2 L' B2 L F2 L F2 U R D B' U L F' L' R B'")
cube.executeAlg("z2")
cube.executeAlg("L U' R F' U' D")
cube.executeAlg("L U L'")
cube.executeAlg("U R U' R' U R' U2 R")
cube.executeAlg("y' R U' R2 U' R")
cube.executeAlg("U' R U' R' U2 R U' R'")
makeImage(cube)