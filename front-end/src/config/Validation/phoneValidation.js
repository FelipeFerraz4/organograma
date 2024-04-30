function phoneValidation(phone) {
    const regex = /^(?:\+\d{2}\s?)?(?:\(?\d{2}\)?\s?)?(?:9\s?)?\d{4,5}-?\d{4}$/;

    return regex.test(phone);
}

export default phoneValidation;