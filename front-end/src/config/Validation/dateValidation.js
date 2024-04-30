function dateValidation(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    return regex.test(date);
}

export default dateValidation;