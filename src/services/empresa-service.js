import api from "./api";

function obterTodas() {
    return new Promise((resolve, reject) => {
        return api
            .get("enterprise")
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function obterPorCNPJ(id) {
    return new Promise((resolve, reject) => {
        return api
            .get(`/enterprise/${id}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

export default {
    obterTodas,
    obterPorCNPJ,
};
