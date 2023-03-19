export default class Player {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    moveUp(tempMap) {
        tempMap[this.posY][this.posX] = 'S'
        this.posY -= 1;
        tempMap[this.posY][this.posX] = 'P'
        console.log("what now?")
        return tempMap;
    }

    moveDown(tempMap) {
        tempMap[this.posY][this.posX] = 'S'
        this.posY += 1;
        tempMap[this.posY][this.posX] = 'P'
        console.log("what now?")
        return tempMap;
    }

    moveLeft(tempMap) {
        tempMap[this.posY][this.posX] = 'S'
        this.posX -= 1;
        tempMap[this.posY][this.posX] = 'P'
        console.log("what now?")
        return tempMap;
    }

    moveRight(tempMap) {
        tempMap[this.posY][this.posX] = 'S'
        this.posX += 1;
        tempMap[this.posY][this.posX] = 'P'
        console.log("what now?")
        return tempMap;
    }
}