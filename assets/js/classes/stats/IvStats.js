class IvStats extends Stats {
    constructor(
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed
    ) {
        super(hp, attack, defense, specialAttack, specialDefense, speed);
    }

    get Hp() {
        return this._hp;
    }
    set Hp(newHp) {
        if (newHp < 0) {
            throw new Error("HP IV cannot be less than 0");
        }
        else if (newHp > 31) {
            throw new Error("HP IV cannot be greater than 31");
        }
        else {
            this._hp = newHp;
        }
    }

    get Attack() {
        return this._attack;
    }
    set Attack(newAttack) {
        if (newAttack < 0) {
            throw new Error("Attack IV cannot be less than 0");
        }
        else if (newAttack > 31) {
            throw new Error("Attack IV cannot be greater than 31");
        }
        else {
            this._attack = newAttack;
        }
    }

    get Defense() {
        return this._defense;
    }
    set Defense(newDefense) {
        if (newDefense < 0) {
            throw new Error("Defense IV cannot be less than 0");
        }
        else if (newDefense > 31) {
            throw new Error("Defense IV cannot be greater than 31");
        }
        else {
            this._defense = newDefense;
        }
    }

    get SpecialAttack() {
        return this._specialAttack;
    }
    set SpecialAttack(newSpecialAttack) {
        if (newSpecialAttack < 0) {
            throw new Error("Special IV Attack cannot be less than 0");
        }
        else if (newSpecialAttack > 31) {
            throw new Error("Special IV Attack cannot be greater than 31");
        }
        else {
            this._specialAttack = newSpecialAttack;
        }
    }

    get SpecialDefense() {
        return this._specialDefense;
    }
    set SpecialDefense(newSpecialDefense) {
        if (newSpecialDefense < 0) {
            throw new Error("Special IV Defense cannot be less than 0");
        }
        else if (newSpecialDefense > 31) {
            throw new Error("Special IV Defense cannot be greater than 31");
        }
        else {
            this._specialDefense = newSpecialDefense;
        }
    }

    get Speed() {
        return this._speed;
    }
    set Speed(newSpeed) {
        if (newSpeed < 0) {
            throw new Error("Speed IV cannot be less than 0");
        }
        else if (newSpeed > 31) {
            throw new Error("Speed IV cannot be greater than 31");
        }
        else {
            this._speed = newSpeed;
        }
    }
}