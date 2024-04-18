import { useState } from 'react';
import { maritalStatus, roles } from '../../config/db';
import SelectInput from '../SelcctInput';
import TextInput from '../TextInput';
import './style.css';

function AddForm() {
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
        </form>
    )
}

export default AddForm;
