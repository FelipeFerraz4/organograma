import PropTypes from 'prop-types';
import './style.css';

function TextInput({
    label, 
    name, 
    value, 
    setValue, 
    type="text", 
    placeholder, 
    required=false
}) {
    function handleChange(event) {
        setValue(event.target.value);
    }
    return(
        <div  className="input">
            <label htmlFor={name}>{label}</label>
            <input 
                id={name} 
                type={type}
                placeholder={placeholder} 
                required={required}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput;

TextInput.propTypes = {
    label: PropTypes.string, 
    name: PropTypes.string, 
    value: PropTypes.any, 
    setValue:  PropTypes.func, 
    type: PropTypes.string, 
    placeholder: PropTypes.string, 
    required: PropTypes.bool
}