import { useState } from 'react';
import AddEmployee from '../../components/AddEmployee';
import Header from '../../components/Header';

function Home() {
    const [employees, setEmployees] = useState([]);

    console.log(employees);

    return (
        <>
            <Header />
            <AddEmployee employees={employees} setEmployees={setEmployees} />
            <h1>Hello World</h1>
            {employees.map((item) => (
                <p key={item.name}>{item.name}</p>
            ))}
        </>
    );
}

export default Home;
