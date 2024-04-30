function universityIdentifierValidation(universityIdentifier) {
    const regex = /^[0-9]+$/;

    return regex.test(universityIdentifier);
}

export default universityIdentifierValidation;