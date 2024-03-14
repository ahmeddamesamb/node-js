const pagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? limit * (page - 1) : 0;
    return { limit, offset };
}

const getPaginationDetails = (data, page, limit) => {
    const { count: totalItems, rows: items } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, items, totalPages, currentPage };
}

module.exports = { pagination, getPaginationDetails };