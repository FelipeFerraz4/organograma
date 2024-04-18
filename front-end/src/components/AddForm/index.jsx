import { useState } from 'react';
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
                placeholder=""
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
                placeholder=""
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
        </form>
    )
}

export default AddForm;
