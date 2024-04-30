import PropTypes from 'prop-types';
import AddForm from '../AddForm';
import './style.css';

function AddEmployee({employees, setEmployees}) {
    return (
        <section className="">
            <h3 className="my-5">Cadastrar Funcionario</h3>
            <AddForm employees={employees} setEmployees={setEmployees} />
        </section>
    )
}

export default AddEmployee;

AddEmployee.propTypes = {
    employees: PropTypes.array, 
    setEmployees: PropTypes.func
}