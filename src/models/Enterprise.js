export default class Enterprise {
    constructor(obj) {
        obj = obj || {}

        this.id = obj.id;
        this.identification = obj.identification;
        this.name = obj.name;
        this.city = obj.city;
        this.provider = obj.provider;

        this._invalidDescription = [];
    }

    modelInvalid(){
        this._invalidDescription = [];

        if (!this.identification && (this.identification + '').length != 14) {
            this._invalidDescription.push('The identification must have 14 numbers')
        }

        if (!this.name) {
            this._invalidDescription.push('The name must be informed')
        }

        if (!this.city) {
            this._invalidDescription.push('\nThe city must be informed')
        }

        if (!this.provider) {
            this._invalidDescription.push('\nThe provider must be informed')
        }

        return this._invalidDescription.length > 0;
    }
}