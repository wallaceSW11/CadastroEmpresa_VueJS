export default class User {
    constructor(obj){
        obj = obj || {};
        this.code = obj.code;
        this.name = obj.name;
        this.password = obj.password;
    }

    modelValid(){
        console.log('Invalid model');
        return !!(this.code && this.password);
    }
}