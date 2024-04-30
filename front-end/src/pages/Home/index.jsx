import { useState } from 'react';
import AddEmployee from '../../components/AddEmployee';
import EmployeeCards from '../../components/EmployeesCards';
import Header from '../../components/Header';
import './style.css';

function Home() {
    const [employees, setEmployees] = useState([]);

    return (
        <>
            <Header />
            <main>
                <AddEmployee employees={employees} setEmployees={setEmployees} />
                <EmployeeCards employees={employees} />
            </main>
        </>
    );
}

export default Home;
