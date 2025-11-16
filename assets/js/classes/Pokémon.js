import data from "../../data/natures.json" assert { type: "json" };
import Entity from "./Entity.js";

class Pokémon extends Entity {
    constructor(id,
        name,
        generation,
        species,
        kind,
        gender,
        types,
        level,
        abilities,
        cry,
        forms,
        heldItems,
        height,
        weight,
        sprites,
        moves,
        baseStats,
        ivstats,
        evStats,
        nature,
        effects
    ) {
        super(id, name, gender);
        this._generation = generation;
        this._species = species;
        this._kind = kind;
        this._types = types;
        this._level = level;
        this._abilities = abilities;
        this._cry = cry;
        this._forms = forms;
        this._heldItems = heldItems;
        this._height = height;
        this._weight = weight;
        this._sprite = sprites;
        this._moves = moves;
        this._baseStats = baseStats;
        this._IvStats = ivstats;
        this._EvStats = evStats;
        this._nature = nature;
        this._effects = effects;
    }

    get Generation() {
        return this._generation;
    }

    get Species() {
        return this._species;
    }

    get Types() {
        return this._types;
    }

    get Level() {
        return this._level;
    }

    get Abilities() {
        return this._abilities;
    }

    get Cry() {
        return this._cry;
    }

    get Forms() {
        return this._forms;
    }

    get HeldItems() {
        return this._heldItems;
    }

    get Height() {
        return this._height;
    }

    get Weight() {
        return this._weight;
    }

    get Sprites() {
        return this._sprites;
    }

    get Moves() {
        return this._moves;
    }
    set Moves(moves) {
        this._moves = moves;
    }

    get BaseStats() {
        return this._baseStats;
    }
    set BaseStats(baseStats) {
        this._baseStats = baseStats;
    }

    get IvStats() {
        return this._IvStats;
    }
    set IvStats(ivstats) {
        this._IvStats = ivstats;
    }

    get EvStats() {
        return this._EvStats;
    }
    set EvStats(evStats) {
        this._EvStats = evStats;
    }

    get Nature() {
        return this._nature;
    }
    set Nature(nature) {
        this._nature = nature;
    }

    get Effects() {
        return this._effects;
    }
    set Effects(effects) {
        this._effects = effects;
    }

    get CalculatedStats() {
        let attackMultiplier = 1;
        let defenseMultiplier = 1;
        let specialAttackMultiplier = 1;
        let specialDefenseMultiplier = 1;
        let speedMultiplier = 1;

        /* switch (this.Nature) {
            case "adamant":
                attackMultiplier = 1.1;
                specialAttackMultiplier = 0.9;
                break;
            case "bold":
                defenseMultiplier = 1.1;
                attackMultiplier = 0.9;
                break;
            case "brave":
                attackMultiplier = 1.1;
                attackMultiplier = 0.9;
                break;
            case "calm":
                specialDefenseMultiplier = 1.1;
                attackMultiplier = 0.9;
                break;
            case "careful":
                specialDefenseMultiplier = 1.1;
                specialAttackMultiplier = 0.9;
                break;
            case "gentle":
                specialDefenseMultiplier = 1.1;
                defenseMultiplier = 0.9;
                break;
            case "hasty":
                speedMultiplier = 1.1;
                defenseMultiplier = 0.9;
                break;
            case "impish":
                defenseMultiplier = 1.1;
                specialAttackMultiplier = 0.9;
                break;
            case "jolly":
                speedMultiplier = 1.1;
                specialAttackMultiplier = 0.9;
                break;
            case "lax":
                defenseMultiplier = 1.1;
                specialDefenseMultiplier = 0.9;
                break;
            case "lonely":
                attackMultiplier = 1.1;
                defenseMultiplier = 0.9;
                break;
            case "mild":
                specialAttackMultiplier = 1.1;
                defenseMultiplier = 0.9;
                break;
            case "modest":
                specialAttackMultiplier = 1.1;
                attackMultiplier = 0.9;
                break;
            case "naive":
                speedMultiplier = 1.1;
                specialDefenseMultiplier = 0.9;
                break;
            case "naughty":
                attackMultiplier = 1.1;
                specialDefenseMultiplier = 0.9;
                break;
            case "quiet":
                specialAttackMultiplier = 1.1;
                speedMultiplier = 0.9;
                break;
            case "rash":
                specialAttackMultiplier = 1.1;
                specialDefenseMultiplier = 0.9;
                break;
            case "relaxed":
                defenseMultiplier = 1.1;
                speedMultiplier = 0.9;
                break;
            case "sassy":
                specialDefenseMultiplier = 1.1;
                speedMultiplier = 0.9;
                break;
            case "timid":
                speedMultiplier = 1.1;
                attackMultiplier = 0.9;
                break;

        } */

        const natureData = data[this.Nature];

        switch (natureData.increasedStat) {
            case "Attack":
                attackMultiplier = 1.1;
                break;
            case "Defense":
                defenseMultiplier = 1.1;
                break;
            case "SpecialAttack":
                specialAttackMultiplier = 1.1;
                break;
            case "SpecialDefense":
                specialDefenseMultiplier = 1.1;
                break;
            case "Speed":
                speedMultiplier = 1.1;
                break;
        }
        switch (natureData.decreasedStat) {
            case "Attack":
                attackMultiplier = 0.9;
                break;
            case "Defense":
                defenseMultiplier = 0.9;
                break;
            case "SpecialAttack":
                specialAttackMultiplier = 0.9;
                break;
            case "SpecialDefense":
                specialDefenseMultiplier = 0.9;
                break;
            case "Speed":
                speedMultiplier = 0.9;
                break;
        }

        return {
            Hp: Math.floor(((2 * this.BaseStats.Hp + this.IvStats.Hp + (this.EvStats.Hp / 4)) * this.Level) / 100) + this.Level + 10,
            Attack: Math.floor((((2 * this.BaseStats.Attack + this.IvStats.Attack + (this.EvStats.Attack / 4)) * this.Level) / 100) + 5) * this.Nature.Attack * multiplier,
            Defense: Math.floor((((2 * this.BaseStats.Defense + this.IvStats.Defense + (this.EvStats.Defense / 4)) * this.Level) / 100) + 5) * this.Nature.Defense * multiplier,
            SpecialAttack: Math.floor((((2 * this.BaseStats.SpecialAttack + this.IvStats.SpecialAttack + (this.EvStats.SpecialAttack / 4)) * this.Level) / 100) + 5) * this.Nature.SpecialAttack * multiplier,
            SpecialDefense: Math.floor((((2 * this.BaseStats.SpecialDefense + this.IvStats.SpecialDefense + (this.EvStats.SpecialDefense / 4)) * this.Level) / 100) + 5) * this.Nature.SpecialDefense * multiplier,
            Speed: Math.floor((((2 * this.BaseStats.Speed + this.IvStats.Speed + (this.EvStats.Speed / 4)) * this.Level) / 100) + 5) * this.Nature.Speed * multiplier,
        }
    }
}