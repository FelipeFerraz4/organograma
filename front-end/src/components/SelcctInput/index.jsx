import PropTypes from 'prop-types';
import './style.css';

function SelectInput({
    label, 
    name, 
    setValue, 
    value,
    required=false,
    options,
    placeholder
}) {
    console.log(value);
    function handleChange(event) {
        setValue(event.target.value);
    }
    return(
        <div  className="input">
            <label htmlFor={name}>{label}</label>
            <select id={name} className="" onChange={handleChange} value={value} required={required}>
                <option disabled value="">{placeholder}</option>
                {options.map((item) => (
                    <option key={item.id} value={item.option}>{
                        (item.option.charAt(0).toUpperCase() + item.option.slice(1))
                        }</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;

SelectInput.propTypes = {
    label: PropTypes.string, 
    name: PropTypes.string,
    setValue: PropTypes.func,
    value: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    placeholder: PropTypes.string
}