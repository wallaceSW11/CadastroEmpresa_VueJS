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

export default {
    getAll,
    getById,
};
