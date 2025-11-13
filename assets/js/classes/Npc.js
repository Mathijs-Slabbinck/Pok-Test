class Npc extends Entity {
    constructor(
        id,
        name,
        gender,
        dialogues = []
    ) {
        super(id, name, gender);
        this._dialogues = dialogues;
    }

    get Dialogues() {
        return this._dialogues;
    }
}