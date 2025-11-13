class Region extends Base {
    constructor(id, name, locations) {
        super(id, name);
        this._locations = locations;
    }

    get Locations() {
        return this._locations;
    }
}