class TrainerNpc extends Npc {
    constructor(
        id,
        name,
        gender,
        dialogues,
        lostBattleDialogues,
        trainerType,
        pokemonList,
        averageMoneyFromDefeat,
        battleItems
    ) {
        super(id, name, gender, dialogues);
        this._lostBattleDialogues = lostBattleDialogues;
        this._trainerType = trainerType;
        this._pokemonList = pokemonList;
        this._averageMoneyFromDefeat = averageMoneyFromDefeat;
        this._battleItems = battleItems;
    }

    get TrainerType() {
        return this._trainerType;
    }

    get PokemonList() {
        return this._pokemonList;
    }

    get AverageMoneyFromDefeat() {
        return this._averageMoneyFromDefeat;
    }

    get BattleItems() {
        return this._battleItems;
    }
}