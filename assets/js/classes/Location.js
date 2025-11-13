class Location extends Base {
    constructor(
        id,
        name,
        npcList
    ) {
        super(id, name);
        this._npcList = npcList;
    }

    get NpcList() {
        return this._npcList;
    }
}