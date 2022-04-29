export default class Usuario {
    constructor(obj){
        obj = obj || {};
        this.codigo = obj.codigo;
        this.nome = obj.nome;
        this.senha = obj.senha;
    }

    modeloValido(){
        console.log('modelo valido');
        return !!(this.codigo && this.senha);
    }
}