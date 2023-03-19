export default class Player {
    constructor(posY, posX) {
        this.posX = posX;
        this.posY = posY;
        this.moves = 0;
        this.freeSpace = ['S', 'T', 'F'];
        this.prevTile = 'S';
    }

    moveUp(tempMap) {
        this.checkTile(this.posY-1, this.posX, tempMap);
    }

    moveDown(tempMap) {
        this.checkTile(this.posY+1, this.posX, tempMap);
    }

    moveLeft(tempMap) {
        this.checkTile(this.posY, this.posX-1, tempMap);
    }

    moveRight(tempMap) {
        this.checkTile(this.posY, this.posX+1, tempMap);
    }

    checkTile(newPosY, newPosX, tempMap) {
        let tile = tempMap[newPosY][newPosX];
        let update = true;
        switch(tile){
            case ' ':
                return;
            case 'S':
                update = this.moveNormal(newPosY, newPosX, tempMap);
                break;
            case 'T':
                update = this.moveNormal(newPosY, newPosX, tempMap);
                break;
            case 'F':
                update = this.moveNormal(newPosY, newPosX, tempMap);
                break;
            case 'R':
                update = this.moveRock(newPosY, newPosX, tempMap);
                break;
            case 'P':
                break;
            default:
                return;
        }
        if(update){
            this.posX = newPosX;
            this.posY = newPosY;
            this.moves += 1;
        }
    }

    moveRock(newPosY, newPosX, tempMap) {
        let rockPosY = newPosY+(newPosY-this.posY);
        let rockPosX = newPosX+(newPosX-this.posX);
        if(this.freeSpace.includes(tempMap[rockPosY][rockPosX])){
            this.setBack(this.posY, this.posX, tempMap);
            this.prevTile = 'S';
            this.setPlayer(newPosY, newPosX, tempMap);
            if(tempMap[rockPosY][rockPosX] === 'T'){
                tempMap[rockPosY][rockPosX] = 'L';
            }else{
                tempMap[rockPosY][rockPosX] = 'R';
            }
            return true;
        }
        return false;
    }

    moveNormal(newPosY, newPosX, tempMap) {
        this.setBack(this.posY, this.posX, tempMap);
        this.prevTile = tempMap[newPosY][newPosX];
        this.setPlayer(newPosY, newPosX, tempMap);
        return true;
    }

    setBack(posY, posX, map) {
        map[posY][posX] = this.prevTile;
    }

    setPlayer(posY, posX, map) {
        map[posY][posX] = 'P';
    }
}