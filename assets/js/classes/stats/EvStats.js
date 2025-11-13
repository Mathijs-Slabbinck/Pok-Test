class EvStats extends Stats {
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
            throw new Error("HP EV cannot be less than 0");
        }
        else if (newHp > 252) {
            throw new Error("HP EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newHp - this._hp > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._hp = newHp;
        }
    }

    get Attack() {
        return this._attack;
    }
    set Attack(newAttack) {
        if (newAttack < 0) {
            throw new Error("Attack EV cannot be less than 0");
        }
        else if (newAttack > 252) {
            throw new Error("Attack EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newAttack - this._attack > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._attack = newAttack;
        }
    }

    get Defense() {
        return this._defense;
    }
    set Defense(newDefense) {
        if (newDefense < 0) {
            throw new Error("Defense EV cannot be less than 0");
        }
        else if (newDefense > 252) {
            throw new Error("Defense EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newDefense - this._defense > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._defense = newDefense;
        }
    }

    get SpecialAttack() {
        return this._specialAttack;
    }
    set SpecialAttack(newSpecialAttack) {
        if (newSpecialAttack < 0) {
            throw new Error("Special Attack EV cannot be less than 0");
        }
        else if (newSpecialAttack > 252) {
            throw new Error("Special Attack EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newSpecialAttack - this._specialAttack > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._specialAttack = newSpecialAttack;
        }
    }

    get SpecialDefense() {
        return this._specialDefense;
    }
    set SpecialDefense(newSpecialDefense) {
        if (newSpecialDefense < 0) {
            throw new Error("Special Defense EV cannot be less than 0");
        }
        else if (newSpecialDefense > 252) {
            throw new Error("Special Defense EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newSpecialDefense - this._specialDefense > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._specialDefense = newSpecialDefense;
        }
    }

    get Speed() {
        return this._speed;
    }
    set Speed(newSpeed) {
        if (newSpeed < 0) {
            throw new Error("Speed EV cannot be less than 0");
        }
        else if (newSpeed > 252) {
            throw new Error("Speed EV cannot be greater than 252");
        }
        else {
            if (this.#getTotalEvs() + newSpeed - this._speed > 510) {
                throw new Error("Total EVs cannot exceed 510");
            }
            this._speed = newSpeed;
        }
    }

    #getTotalEvs() {
        return this._hp + this._attack + this._defense + this._specialAttack + this._specialDefense + this._speed;
    }
}