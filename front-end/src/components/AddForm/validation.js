import alphabeticalValidation from '../../config/Validation/alphabeticalValidation';
import dateValidation from '../../config/Validation/dateValidation';
import emptyValidation from '../../config/Validation/emptyValidation';

function additionEmployeeValidation(
    name,
    date,
    email,
    phone,
    cpf,
    universityIdentifier,
    birthday,
    role,
    maritalStatu,
    nationality
) {
    if (!emptyValidation(name)) {
        return 'O campo Nome está vazio';
    } else if (!alphabeticalValidation(name)) {
        return 'O campo Nome não é válido, não pode conter números ou caracteres especiais';
    } else if (!emptyValidation(date)) {
        return 'O campo Data de entrada na empresa está vazio';
    } else if (!dateValidation(date)) {
        return 'O campo Data de entrada na empresa não é válido, padrão Ano-dia-mês';
    } else if (!emptyValidation(email)) {
        return 'O campo E-mail está vazio';
    } else if (!emptyValidation(phone)) {
        return 'O campo Telefone está vazio';
    } else if (!emptyValidation(cpf)) {
        return 'O campo CPF está vazio';
    } else if (!emptyValidation(birthday)) {
        return 'O campo Data de aniversário está vazio';
    } else if (!dateValidation(birthday)) {
        return 'O campo Data de aniversário não é válido, padrão Ano-dia-mês';
    } else if (!emptyValidation(universityIdentifier)) {
        return 'O campo Identificação da universidade está vazio';
    } else if (!emptyValidation(nationality)) {
        return 'O campo Nacionalidade está vazio';
    } else if (!alphabeticalValidation(nationality)) {
        return 'O campo Nacionalidade não é válido, não pode conter números ou caracteres especiais';
    } else if (!emptyValidation(role)) {
        return 'O campo Cargo está vazio';
    } else if (!emptyValidation(maritalStatu)) {
        return 'O campo Estado Cívil está vazio';
    } else {
        return 'valido';
    }
}


export default additionEmployeeValidation;