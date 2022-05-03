import Vue from "vue";

function information(type, title, text) {
    var sweetAlert = new Vue().$swal;

    sweetAlert({
        icon: type,
        title: title,
        text: text,
        confirmButtonColor: "#002984",
        animate: true,
    });
}
function confirm(title, text) {
    var sweetAlert = new Vue().$swal;

    sweetAlert({
        icon: "question",
        title: title,
        text: text,
        confirmButtonColor: "#002984",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        animate: true,
    })
    .then((result) => {
        return (result.isConfirmed)
    });
}

export default {
    information,
    confirm
};
