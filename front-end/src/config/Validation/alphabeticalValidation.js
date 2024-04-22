function alphabeticalValidation(text) {
    const regex = /^[a-zA-ZÀ-ú\s]+$/;

    return regex.test(text);
}

export default alphabeticalValidation;