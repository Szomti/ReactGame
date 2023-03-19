export default class Player {
    constructor(posY, posX) {
        this.posX = posX;
        this.posY = posY;
        this.moves = 0;
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
        let updatePos = true;
        switch(tile){
            case ' ':
                return;
            case 'S':
                updatePos = this.moveNormal(newPosY, newPosX, tempMap);
                break;
            case 'R':
                updatePos = this.moveRock(newPosY, newPosX, tempMap);
                break;
            case 'P':
                break;
            default:
                return;
        }
        if(updatePos){
            this.posX = newPosX;
            this.posY = newPosY;
            this.moves += 1;
            console.log(this.moves);
        }
    }

    moveRock(newPosY, newPosX, tempMap) {
        let rockPosY = newPosY+(newPosY-this.posY);
        let rockPosX = newPosX+(newPosX-this.posX);
        if(tempMap[rockPosY][rockPosX] === 'S'){
            this.setSpace(this.posY, this.posX, tempMap);
            this.setPlayer(newPosY, newPosX, tempMap);
            tempMap[rockPosY][rockPosX] = 'R';
            return true;
        }
        return false;
    }

    moveNormal(newPosY, newPosX, tempMap) {
        this.setSpace(this.posY, this.posX, tempMap);
        this.setPlayer(newPosY, newPosX, tempMap);
        return true;
    }

    setSpace(posY, posX, map) {
        map[posY][posX] = 'S';
    }

    setPlayer(posY, posX, map) {
        map[posY][posX] = 'P';
    }
}