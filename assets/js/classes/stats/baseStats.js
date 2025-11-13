class BaseStats extends Stats {
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
        if (newHp < 1) {
            throw new Error("HP cannot be less than 1");
        }
        else if (newHp > 255) {
            throw new Error("HP cannot be greater than 255");
        }
        else {
            this._hp = newHp;
        }
    }

    get Attack() {
        return this._attack;
    }
    set Attack(newAttack) {
        if (newAttack < 1) {
            throw new Error("Attack cannot be less than 1");
        }
        else if (newAttack > 255) {
            throw new Error("Attack cannot be greater than 255");
        }
        else {
            this._attack = newAttack;
        }
    }

    get Defense() {
        return this._defense;
    }
    set Defense(newDefense) {
        if (newDefense < 1) {
            throw new Error("Defense cannot be less than 1");
        }
        else if (newDefense > 255) {
            throw new Error("Defense cannot be greater than 255");
        }
        else {
            this._defense = newDefense;
        }
    }

    get SpecialAttack() {
        return this._specialAttack;
    }
    set SpecialAttack(newSpecialAttack) {
        if (newSpecialAttack < 1) {
            throw new Error("Special Attack cannot be less than 1");
        }
        else if (newSpecialAttack > 255) {
            throw new Error("Special Attack cannot be greater than 255");
        }
        else {
            this._specialAttack = newSpecialAttack;
        }
    }

    get SpecialDefense() {
        return this._specialDefense;
    }
    set SpecialDefense(newSpecialDefense) {
        if (newSpecialDefense < 1) {
            throw new Error("Special Defense cannot be less than 1");
        }
        else if (newSpecialDefense > 255) {
            throw new Error("Special Defense cannot be greater than 255");
        }
        else {
            this._specialDefense = newSpecialDefense;
        }
    }

    get Speed() {
        return this._speed;
    }
    set Speed(newSpeed) {
        if (newSpeed < 1) {
            throw new Error("Speed cannot be less than 1");
        }
        else if (newSpeed > 255) {
            throw new Error("Speed cannot be greater than 255");
        }
        else {
            this._speed = newSpeed;
        }
    }
}