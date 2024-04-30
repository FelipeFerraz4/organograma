function cpfValidation(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');

    if (formatValidation(cpf) && (!equalNumberValidation(cpf)) && firstDigitValidation(cpf) && secondDigitValidation(cpf)) {
        return true;
    }
    return false
}

export default cpfValidation;

function formatValidation(cpf) {
    // const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    const regex = /^\d{11}$/;
    return regex.test(cpf);
}

function equalNumberValidation(cpf) {
    const regex = /^(\d)\1{10}$/;
    return regex.test(cpf);
}

function firstDigitValidation(cpf) {
    let sum = 0
    for (let i = 0; i < 9; i++){
        sum += parseInt(cpf[i]) * (10 - i);
    }
    
    let rest = sum % 11;
    
    let digit;
    if (rest < 2) {
        digit = 0;
    } else {
        digit = 11 - rest; 
    }
    return (parseInt(cpf[9]) === digit)
}

function secondDigitValidation(cpf) {
    let sum = 0
    for (let i = 0; i < 10; i++){
        sum += parseInt(cpf[i]) * (11 - i);
    }
    
    let rest = sum % 11;
    
    let digit;
    if (rest < 2) {
        digit = 0;
    } else {
        digit = 11 - rest; 
    }
    return (parseInt(cpf[10]) === digit)
}