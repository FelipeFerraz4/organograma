import { useState } from 'react';
import TextInput from '../TextInput';
import './style.css';

function AddForm() {
    const [name, setName] = useState('');
    return(
        <form action="" className="form">
            <TextInput 
                label="Nome"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                setValue={setName}
                required
            />
            <TextInput 
                label="Nome"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                setValue={setName}
                required
            />
            <TextInput 
                label="Nome"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                setValue={setName}
                required
            />
        </form>
    )
}

export default AddForm;
