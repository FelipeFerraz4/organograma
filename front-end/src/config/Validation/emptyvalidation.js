function emptyValidation(text) {
    if (text.trim() === '') {
        return false;
    } else {
        return true;
    }
}

export default emptyValidation;