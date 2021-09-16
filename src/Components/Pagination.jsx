import React, { useEffect, useState } from "react";

const Pagination = ({ totalRows, rowPage, paginate }) => {
    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        let arr = [];
        for (let i = 1; i <= Math.ceil(totalRows / rowPage); i++) {
            arr.push(i);
        }
        setPageNumbers(arr)
    }, [totalRows, rowPage]);
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className='page-item' key={number} >
                            <a className='page-link' href="!#" onClick={() => paginate(number - 1)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Pagination