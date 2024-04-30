import alphabeticalValidation from '../../config/Validation/alphabeticalValidation';
import cpfValidation from '../../config/Validation/cpfValidation';
import dateValidation from '../../config/Validation/dateValidation';
import emailValidation from '../../config/Validation/emailValidation';
import emptyValidation from '../../config/Validation/emptyvalidation';
import phoneValidation from '../../config/Validation/phoneValidation';
import universityIdentifierValidation from '../../config/Validation/universityIdentifierValidation';

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
        return 'O Nome não é válido, não pode conter números ou caracteres especiais';
    } else if (!emptyValidation(date)) {
        return 'O campo Data de entrada na empresa está vazio';
    } else if (!dateValidation(date)) {
        return 'A Data de entrada na empresa não é válido, padrão Ano-dia-mês';
    } else if (!emptyValidation(email)) {
        return 'O campo E-mail está vazio';
    } else if (!emailValidation(email)) {
        return 'O E-mail não é válido';
    } else if (!emptyValidation(phone)) {
        return 'O campo Telefone está vazio';
    } else if (!phoneValidation(phone)) {
        return 'O Telefone não é válido';
    } else if (!emptyValidation(cpf)) {
        return 'O campo CPF está vazio';
    } else if (!cpfValidation(cpf)) {
        return 'O CPF não é Válido';
    } else if (!emptyValidation(birthday)) {
        return 'O campo Data de aniversário está vazio';
    } else if (!dateValidation(birthday)) {
        return 'A Data de aniversário não é válido, padrão Ano-dia-mês';
    } else if (!emptyValidation(universityIdentifier)) {
        return 'O campo Identificação da universidade está vazio';
    } else if (!universityIdentifierValidation(universityIdentifier)) {
        return 'A Identificação da universidade não é válido';
    } else if (!emptyValidation(nationality)) {
        return 'O campo Nacionalidade está vazio';
    } else if (!alphabeticalValidation(nationality)) {
        return 'A Nacionalidade não é válido, não pode conter números ou caracteres especiais';
    } else if (!emptyValidation(role)) {
        return 'O campo Cargo está vazio';
    } else if (!emptyValidation(maritalStatu)) {
        return 'O campo Estado Cívil está vazio';
    } else {
        return 'valido';
    }
}


export default additionEmployeeValidation;