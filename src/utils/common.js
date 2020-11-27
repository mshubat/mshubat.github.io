const isEmpty = (value) => {
    return (value === null || value === undefined || value.length === 0);
}

const isNotEmpty = (value) => {
    return (value !== null && value !== undefined && value.length !== 0);
}