const successMessage = { status: 'success' };
const errorMessage = { status: 'error' };

const status = {
    succes: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    require: 403,
    created: 201,
    bad: 400,
    nocontent: 204,
    conflict: 409
}

module.exports = {
    successMessage,
    errorMessage,
    status
}
