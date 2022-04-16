export default class Empresa {
    constructor(obj) {
        obj = obj || {}

        this.cnpj = obj.cnpj;
        this.razaoSocial = obj.razaoSocial;
        this.cidade = obj.cidade;
        this.provedor = obj.provedor;
        this.ativa = obj.ativa;
    }
}