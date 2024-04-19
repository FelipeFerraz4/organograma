import PropTypes from 'prop-types';
import './style.css';

function EmployeeCards({employees}) {
    return (
        <>
            <h2 className="titleEmployee">Funcionarios Cadastrados</h2>
            <section className="employeeCards">
                {employees.map((item) => (
                    <div key={item.id} className="card cardHome">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                {item.nationality}, {item.maritalStatu}, com número do CPF {item.cpf}
                                </h6>
                            <p className="card-text">
                                Funcionario nasceu em {item.birthday}, possui código da universidade {item.universityIdentifier}; ingressou na empresa na data {item.date}, atualmente desempenha o cargo {item.role}
                            </p>
                            <a href="#" className="card-link">{item.email}</a>
                            <a href="#" className="card-link">{item.phone}</a>
                        </div>
                </div>
                ))}
            </section>
        </>
    )
}

export default EmployeeCards;

EmployeeCards.propTypes = {
    employees: PropTypes.array
}