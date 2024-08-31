import xml.dom.minidom
from pathlib import Path
from re import search, sub
import numpy as np

from .cube import Cube
from .colors import COLORS_HEX, Colors

def makeImage(cube : Cube):
    CURR_DIR = Path(__file__).resolve().parent
    DEFAULT_IMAGE_URL = CURR_DIR / 'default.svg'
    
    with xml.dom.minidom.parse(str(DEFAULT_IMAGE_URL)) as doc:
        tiles = doc.getElementsByTagName('path')
        tiles_f = tiles[0:9]
        tiles_r = tiles[9:18]
        tiles_u = tiles[18:27]

        for t, c in zip(tiles_f, cube.f):
            t.setAttribute('fill', COLORS_HEX[c])
        
        for t, c in zip(tiles_r, cube.r):
            t.setAttribute('fill', COLORS_HEX[c])
        
        for t, c in zip(tiles_u, cube.u):
            t.setAttribute('fill', COLORS_HEX[c])
        
        doc.writexml(open(CURR_DIR / "img_temp/new.svg", 'w'))


def generateStateString(cube : Cube):
    color_map = {
        Colors.WHITE : "w",
        Colors.YELLOW : "y",
        Colors.RED : "r",
        Colors.ORANGE : "o",
        Colors.GREEN : "g",
        Colors.BLUE : "b",
    }
    
    output = ""
    
    for c in np.hstack((cube.u, cube.d, cube.r, cube.l, cube.f, cube.b)):
        output += color_map[c]
    
    return output


def getAlgData(alg : str):
    cube = Cube()
    cube.executeAlg(alg)
    makeImage(cube)
    
    return Path(__file__).resolve().parent / "img_temp/new.svg", generateStateString(cube)


def reverseAlg(alg : str):
    if not search(r"^( |\n|\/\/[^\n]*)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|\/\/[^\n]*)+)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|\/\/[^\n]*)*){1}$", alg):
        return False
    
    moves = sub(r'(?m)^ *(//).*\n?', '', alg).split()
    
    for i, move in enumerate(moves):
        if "2" in move:
            moves[i] = moves[i][0:2]        
        elif "'" in move:
            moves[i] = moves[i][0]
        else:
            moves[i] = f"{moves[i]}'"
    
    return " ".join(moves[::-1])
