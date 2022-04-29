export default class Enterprise {
    constructor(obj) {
        obj = obj || {}

        this.id = obj.id;
        this.identification = obj.identification;
        this.name = obj.name;
        this.city = obj.city;
        this.provider = obj.provider;
    }
}