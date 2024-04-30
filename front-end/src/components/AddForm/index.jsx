import PropTypes from 'prop-types';
import { useState } from 'react';
import { maritalStatus, roles } from '../../config/db';
import dateFormatting from '../../config/formatting/date';
import SelectInput from '../SelcctInput';
import TextInput from '../TextInput';
import './style.css';
import additionEmployeeValidation from './validation';

function AddForm({employees, setEmployees}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [universityIdentifier, setUniversityIdentifier] = useState('');
    const [birthday, setBirthday] = useState('');
    const [role, setRole] = useState('');
    const [maritalStatu, setMaritalStatu] = useState('');
    const [nationality, setNationality] = useState('');

    function handleSubmit() {
        const validation = additionEmployeeValidation(
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
        )

        if (validation != "valido"){
            console.log(validation)
        } else {
            const newEmployee = {
                id: employees.length + 1,
                name: name.trim(),
                nationality: nationality.trim(),
                maritalStatu: maritalStatu.trim(),
                cpf: cpf.trim(),
                birthday: dateFormatting(birthday.trim()),
                universityIdentifier: universityIdentifier.trim(),
                date: dateFormatting(date.trim()),
                role: role.trim(),
                email: email.trim(),
                phone: phone.trim(),
            };
            setEmployees([...employees, newEmployee]);
        }
    }

    return(
        <form action="" className="form">
            <TextInput 
                label="Nome"
                name="name"
                type='text'
                placeholder="Digite seu nome"
                value={name}
                setValue={setName}
                required
            />
            <TextInput 
                label="Data de entrada na empresa"
                name="data"
                type='date'
                placeholder="dd/mm/yyyy"
                value={date}
                setValue={setDate}
                required
            />
            <TextInput 
                label="E-mail"
                name="email"
                type='email'
                placeholder="Digite seu e-mail"
                value={email}
                setValue={setEmail}
                required
            />
            <TextInput 
                label="Telefone"
                name="phone"
                type="tel"
                placeholder="Digite seu telefone"
                value={phone}
                setValue={setPhone}
                required
            />
            <TextInput 
                label="CPF"
                name="cpf"
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                setValue={setCpf}
                required
            />
            <TextInput 
                label="Data de aniversário"
                name="birthday"
                type="date"
                placeholder="dd/mm/yyyy"
                value={birthday}
                setValue={setBirthday}
                required
            />
            <TextInput 
                label="Identificação da universidade"
                name="universityId"
                type="text"
                placeholder="Digite seu número de identificação da universidade"
                value={universityIdentifier}
                setValue={setUniversityIdentifier}
                required
            />
            <TextInput 
                label="Nacionalidade"
                name="nacionality"
                type="text"
                placeholder="Digite sua nacionalidade"
                value={nationality}
                setValue={setNationality}
                required
            />
            <SelectInput 
                label="Cargo"
                name="role"
                value={role}
                setValue={setRole}
                options={roles}
                placeholder="Qual seu cargo"
                required
            />
            <SelectInput 
                label="Estado Cívil"
                name="maritalStatus"
                value={maritalStatu}
                setValue={setMaritalStatu}
                options={maritalStatus}
                placeholder="Qual seu estado cívil"
                required
            />
            <button 
                onClick={handleSubmit} 
                className="register" 
                type="button">
                    Cadastrar
            </button>
        </form>
    )
}

export default AddForm;

AddForm.propTypes = {
    employees: PropTypes.array, 
    setEmployees: PropTypes.func
}