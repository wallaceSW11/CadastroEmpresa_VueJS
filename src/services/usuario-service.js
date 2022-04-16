import api from "./api";

function login(codigo, senha){
   //return !(codigo && senha);

   return (codigo == 'wallace' && senha == 'senhas');

    // return new Promise((resolve, reject) => {
    //     return api.post(`/login`, { codigo, senha})
    //     .then(response => resolve(response))
    //     .catch(error => reject(error));
    // });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/usuario/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    login,
    obterPorId
}