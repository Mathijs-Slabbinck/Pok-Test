class Entity extends Base {
    constructor(id, name, gender) {
        super(id, name);
        this._gender = gender;
    }

    get Gender() {
        return this._gender;
    }
}