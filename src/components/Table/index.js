import React from 'react';

function Table(props) {
    return (
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">role</th>
                    <th scope="col">startDate</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map(employee => (
                        <tr key={employee.id}>
                            <td scope="row">{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.role}</td>
                            <td>{employee.startDate}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Table;