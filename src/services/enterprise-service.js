import api from "./api";

function getAll() {
    return new Promise((resolve, reject) => {
        return api
            .get("enterprise")
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        return api
            .get(`/enterprise/${id}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function saveEnterprise(enterprise) {
    return new Promise((resolve, reject) => {
        return api
            .put(`/enterprise/${enterprise.id}`, enterprise)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function create(enterprise) {
    return new Promise((resolve, reject) => {
        console.log('create');
        return api
            .post(`/enterprise`, enterprise)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

export default {
    getAll,
    getById,
    saveEnterprise,
    create
};
