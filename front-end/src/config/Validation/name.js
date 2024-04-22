function nameValidation(name) {
    const regex = /^[a-zA-ZÀ-ú\s]+$/;

    return regex.test(name);
}

export default nameValidation;