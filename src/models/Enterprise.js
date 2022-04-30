export default class Enterprise {
    constructor(obj) {
        obj = obj || {}

        this.id = obj.id;
        this.identification = obj.identification;
        this.name = obj.name;
        this.city = obj.city;
        this.provider = obj.provider;
    }

    modelValid(){
        return !!(
            this.id &&
            this.identification &&
            this.name &&
            this.city &&
            this.provider
        )
    }
}