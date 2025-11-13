class Base {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get Id() {
        return this._id;
    }

    get Name() {
        return this._name;
    }
    set Name(newName) {
        this._name = newName;
    }
}