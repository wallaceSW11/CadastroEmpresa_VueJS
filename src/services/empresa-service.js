import api from "./api";

function obterTodas() {
    return new Promise((resolve, reject) => {
        return api
            .get("/empresa")
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function obterPorCNPJ(cnpj) {
    return new Promise((resolve, reject) => {
        return api
            .get(`/empresa/${cnpj}`)
            .then((respose) => resolve(respose))
            .catch((error) => reject(error));
    });
}

export default {
    obterTodas,
    obterPorCNPJ
}
