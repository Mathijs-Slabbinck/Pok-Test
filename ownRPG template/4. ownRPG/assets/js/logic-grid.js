// 1 = gras
// 2 = aarde
// 3 = gras met boom start
// 4 = boom top
// 5 = struik
// 6 = lava
// 7 = tall grass
// 8 = water
// 9 = boulder
// 10 | s = stone
// 11 | a = rock 1
// 12 | b = rock 2
// 13 | c = rock 3
// 14 | d = wall horizontally
// 15 | e = wall vertically right
// 16 | f = wall vertically left
// 17 | g = wall turn left down
// 18 | h = wall turn right down
// 19 | i = wall turn left up
// 20 | j = wall turn right up
// 21 | k = gate open
// 22 | l = gate closed
// 23 | m = lever off
// 24 | n = lever on
// 25 || o = chest closed
// 26 || p = chest opened
// 27 || q = merchant
// 28 || r = mage
// 29 || t = sign
// 30 || u = wooden floor
// 31 || v = *TO ADD*
// 32 || w = *TO ADD*
let miningSound = new Audio('assets/media/mine.mp3');
let cuttingSound = new Audio('assets/media/cut.mp3');
let fishingSound = new Audio('assets/media/fish.mp3');
const s = 10;
const a = 11;
const b = 12;
const c = 13;
const d = 14;
const e = 15;
const f = 16;
const g = 17;
const h = 18;
const i = 19;
const j = 20;
const k = 21;
const l = 22;
const m = 23;
const n = 24;
const o = 25;
const p = 26;
const q = 27;
const r = 28;
const t = 29;
const u = 30;
const v = 31;
const w = 32;
let mineMaterial = 0;
let mineMaterial2 = 0;
var map = {
    cols: 26,
    rows: 26,
    tsize: 64,
    layers: [[
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, 6, s, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, 6, 6, s, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, 6, 6, 6, s, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 8, 8, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, s, 6, 6, 6, s, 1, 1, 1, 1, 1,
        1, 1, 2, 2, 8, 8, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1, s, 6, 6, s, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 8, 8, 8, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, s, s, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 8, 8, 8, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 8, 8, 8, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 2, 8, 8, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, u, u, 1, 1,
        1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, u, u, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ], [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        i, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, k, d, d, j, 0,
        f, q, 0, r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, t, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, b, 0, 0, a, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0,
        f, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, d, v, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f, 0, 0, e, 0,
        f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f, m, 0, e, 0,
        g, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, h, 0,
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var isSolid = mining = tile === 3 || tile === 5 || tile === 6 || tile === 8 || tile === a || tile === b || tile === c || tile === d || tile === e || tile === f || tile === g || tile == h || tile === i || tile === j || tile === m || tile === q || tile === r || tile === t;

            // mining, fishing and cutting
            if(tile === 3 || tile === a || tile === b || tile === c || tile === 8){
                    mineMaterial2 = Date.now();
                    if (mineMaterial2 > mineMaterial+2500){
                        switch(tile){
                            case 3:
                                cuttingSound.play();
                                switch(lootGainUpdate){
                                    case false:
                                        ownedWood += 1;
                                        break;
                                    case true:
                                        ownedWood += 2;
                                        break;
                                }
                                updateDisp();
                                mineMaterial = Date.now();
                                break;
                            case a:
                            case b:
                            case c:
                                miningSound.play();
                                switch(lootGainUpdate){
                                    case false:
                                        ownedStone += 1;
                                        break;
                                    case true:
                                        ownedStone += 2;
                                        break;
                                }
                                updateDisp();
                                mineMaterial = Date.now();
                                break;
                            case 8:
                                fishingSound.play();
                                switch(lootGainUpdate){
                                    case false:
                                        ownedFish += 1;
                                        break;
                                    case true:
                                        ownedFish += 2;
                                        break;
                                }
                                updateDisp();
                                mineMaterial = Date.now();
                                break;
                        }
                    }
            }
            if(tile === q){
                $("#game").hide();
                $("#merchant").show();
            }
            if(tile === r){
                $("#game").hide();
                $("#mage").show();
            }
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};

function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
};

Camera.prototype.update = function () {
    // assume followed sprite should be placed at the center of the screen
    // whenever possible
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;

    // make the camera follow the sprite
    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // in map corners, the sprite cannot be placed in the center of the screen
    // and we have to change its screen coordinates

    // left and right sides
    if (this.following.x < this.width / 2 ||
        this.following.x > this.maxX + this.width / 2) {
        this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
        this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
    }
};

function Hero(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = (map.tsize)/2;
    this.height = (map.tsize)/2;
    whatIsTheHeroImg = Loader.getImage('heroDown2');
}

Hero.SPEED = 185; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {
    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;

    // check if we walked into a non-walkable tile
    this._collide(dirx, diry);

    // clamp values
    var maxX = this.map.cols * this.map.tsize;
    var maxY = this.map.rows * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._collide = function (dirx, diry) {
    var row, col;
    // -1 in right and bottom is because image ranges from 0..63
    // and not up to 64
    var left = this.x - this.width / 2;
    var right = this.x + this.width / 2 - 1;
    var top = this.y - this.height / 2;
    var bottom = this.y + this.height / 2 - 1;

    // check for collisions on sprite sides
    var collision =
        this.map.isSolidTileAtXY(left, top) ||
        this.map.isSolidTileAtXY(right, top) ||
        this.map.isSolidTileAtXY(right, bottom) ||
        this.map.isSolidTileAtXY(left, bottom);
    if (!collision) { return; }

    if (diry > 0) {
        row = this.map.getRow(bottom);
        this.y = -this.height / 2 + this.map.getY(row);
    }
    else if (diry < 0) {
        row = this.map.getRow(top);
        this.y = this.height / 2 + this.map.getY(row + 1);
    }
    else if (dirx > 0) {
        col = this.map.getCol(right);
        this.x = -this.width / 2 + this.map.getX(col);
    }
    else if (dirx < 0) {
        col = this.map.getCol(left);
        this.x = this.width / 2 + this.map.getX(col + 1);
    }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', 'images/tiles5.png'),
        Loader.loadImage('heroDown1', 'images/characters/greenChar/greenChar1.png'),
        Loader.loadImage('heroDown2', 'images/characters/greenChar/greenChar2.png'),
        Loader.loadImage('heroDown3', 'images/characters/greenChar/greenChar3.png'),
        Loader.loadImage('heroLeft1', 'images/characters/greenChar/greenChar4.png'),
        Loader.loadImage('heroLeft2', 'images/characters/greenChar/greenChar5.png'),
        Loader.loadImage('heroLeft3', 'images/characters/greenChar/greenChar6.png'),
        Loader.loadImage('heroRight1', 'images/characters/greenChar/greenChar7.png'),
        Loader.loadImage('heroRight2', 'images/characters/greenChar/greenChar8.png'),
        Loader.loadImage('heroRight3', 'images/characters/greenChar/greenChar9.png'),
        Loader.loadImage('heroUp1', 'images/characters/greenChar/greenChar10.png'),
        Loader.loadImage('heroUp2', 'images/characters/greenChar/greenChar11.png'),
        Loader.loadImage('heroUp3', 'images/characters/greenChar/greenChar12.png'),
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');

    this.hero = new Hero(map, 500, 500);
    this.camera = new Camera(map, 512, 512);
    this.camera.follow(this.hero);
};

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) {
        dirx = -1;
            if(whatIsTheHeroImg === Loader.getImage('heroLeft1')){
                setTimeout(function(){
                    whatIsTheHeroImg = Loader.getImage('heroLeft3');
                }, 150);
            } else if(whatIsTheHeroImg === Loader.getImage('heroLeft3') || whatIsTheHeroImg === Loader.getImage('heroLeft2')){
                setTimeout(function(){
                    whatIsTheHeroImg = Loader.getImage('heroLeft1');
            }, 100);
            } else{
                    whatIsTheHeroImg = Loader.getImage('heroLeft2');
            }
    }
    else if (Keyboard.isDown(Keyboard.RIGHT)) {
        dirx = 1;
        if(whatIsTheHeroImg === Loader.getImage('heroRight1')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroRight3');
            }, 150);
        } else if(whatIsTheHeroImg === Loader.getImage('heroRight3') || whatIsTheHeroImg === Loader.getImage('heroRight2')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroRight1');
        }, 100);
        } else{
                whatIsTheHeroImg = Loader.getImage('heroRight2');
        }
    }
    else if (Keyboard.isDown(Keyboard.UP)) {
        diry = -1;
        if(whatIsTheHeroImg === Loader.getImage('heroUp1')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroUp3');
            }, 150);
        } else if(whatIsTheHeroImg === Loader.getImage('heroUp3') || whatIsTheHeroImg === Loader.getImage('heroUp2')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroUp1');
        }, 100);
        } else{
                whatIsTheHeroImg = Loader.getImage('heroUp2');
        }
    }
    else if (Keyboard.isDown(Keyboard.DOWN)) {
        diry = 1;
        if(whatIsTheHeroImg === Loader.getImage('heroDown1')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroDown3');
            }, 150);
        } else if(whatIsTheHeroImg === Loader.getImage('heroDown3') || whatIsTheHeroImg === Loader.getImage('heroDown2')){
            setTimeout(function(){
                whatIsTheHeroImg = Loader.getImage('heroDown1');
        }, 100);
        } else{
                whatIsTheHeroImg = Loader.getImage('heroDown2');
        }
    }
    this.hero.move(delta, dirx, diry);
    this.camera.update();
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    (tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game._drawGrid = function () {
        var width = map.cols * map.tsize;
    var height = map.rows * map.tsize;
    var x, y;
    for (var r = 0; r < map.rows; r++) {
        x = - this.camera.x;
        y = r * map.tsize - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width, y);
        this.ctx.stroke();
    }
    for (var c = 0; c < map.cols; c++) {
        x = c * map.tsize - this.camera.x;
        y = - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height);
        this.ctx.stroke();
    }
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(0);

    // draw main character
            this.ctx.drawImage(
            //this.hero.image,
            whatIsTheHeroImg,
            this.hero.screenX - this.hero.width / 2,
            this.hero.screenY - this.hero.height / 2);

    // draw map top layer
    this._drawLayer(1);

    //this._drawGrid();
};