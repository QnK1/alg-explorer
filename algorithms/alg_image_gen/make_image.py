import xml.dom.minidom
from pathlib import Path

from cube import Cube
from colors import COLORS_HEX, Colors

def makeImage(cube : Cube):
    CURR_DIR = Path(__file__).resolve().parent
    DEFAULT_IMAGE_URL = CURR_DIR / 'default.svg'
    
    cube.moveR(0)
    cube.moveU(0)
    cube.moveR(1)
    cube.moveU(1)
    cube.moveR(1)
    cube.moveF(0)
    cube.moveR(2)
    cube.moveU(1)
    cube.moveR(1)
    cube.moveU(1)
    cube.moveR(0)
    cube.moveU(0)
    cube.moveR(1)
    cube.moveF(1)
    
    
    with xml.dom.minidom.parse(str(DEFAULT_IMAGE_URL)) as doc:
        tiles = doc.getElementsByTagName('path')
        tiles_f = tiles[0:9]
        tiles_r = tiles[9:18]
        tiles_u = tiles[18:27]

        for i, c in enumerate(cube.f):
            tiles_f[i].setAttribute('fill', COLORS_HEX[c])
        
        for i, c in enumerate(cube.r):
            tiles_r[i].setAttribute('fill', COLORS_HEX[c])
        
        for i, c in enumerate(cube.u):
            tiles_u[i].setAttribute('fill', COLORS_HEX[c])
        
        doc.writexml(open(CURR_DIR / 'new.svg', 'w'))
        

cube = Cube()
makeImage(cube)    