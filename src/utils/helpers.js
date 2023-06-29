export function validateEmail(email) {
    let regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regEx.test(String(email).toLowerCase());
};

export function checkBlank(field) {
    let regEx = /^\s*$/;
    return regEx.test(String(field).toLowerCase());
};