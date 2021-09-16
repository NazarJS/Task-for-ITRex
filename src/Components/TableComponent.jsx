import { useEffect, useState } from 'react';
import './table.css';
function TableComponent({ searchValue, data, selectRow, setData, currentRow, setCurrentPage, currentPage, rowPage }) {

    const [sortColumn, setSortColumn] = useState({ name: null, direction: false })
    // function sorts the columns
    const sort = itemName => {
        setSortColumn({ name: itemName, direction: itemName === sortColumn.name ? !sortColumn.direction : true });
        let newData = [...data];
        let direction = sortColumn.direction;
        newData.sort((a, b) => {
            var nameA = a[itemName].toUpperCase();
            var nameB = b[itemName].toUpperCase();

            return (direction ? nameA > nameB : nameA < nameB) ? -1 : 1;
        });
        setData(newData)
    }



    const displaySort = (sortName) => sortColumn.name === sortName ? sortColumn.direction ? '▲' : '▼' : null;

    return (
        <table className='table_list'>
            <tbody>
                <tr>
                    <th>id</th>
                    <th onClick={() => sort('firstName')}>First name {displaySort('firstName')}</th>
                    <th onClick={() => sort('lastName')}>Last name {displaySort('lastName')}</th>
                    <th onClick={() => sort('email')}>Email {displaySort('email')}</th>
                    <th onClick={() => sort('phone')}>Phone {displaySort('phone')}</th>
                    <th >State</th>
                </tr>

                {
                    //Filters the table by name
                    data && data.filter(item =>
                        item.firstName
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()))
                        .slice(currentPage * rowPage, (1 + currentPage) * rowPage)
                        // Display the table
                        .map(({ id, phone, firstName, lastName, email, adress }) => (
                            <tr key={id + phone} onClick={() => selectRow(id)} className="tableRow">
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{adress.state}</td>
                            </tr>
                        ))}
            </tbody>
        </table>

    );
}

export default TableComponent;
