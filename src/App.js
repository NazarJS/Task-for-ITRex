import { useEffect, useState } from 'react';
import TableComponent from './Components/TableComponent';
import InfoTableComponent from './Components/InfoTebleComponent';
import SearchComponent from './Components/SearchComponent';
import Pagination from './Components/Pagination';
function App() {
  const [data, setData] = useState([]);
  const [row, setRow] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPage] = useState(20)

 
useEffect(() => {
  const URL = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
  // Function fetch data from API
  const fetchData = async() => {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);

  };

  fetchData();
  
},[]);


  const selectRow = rowId => {
    setRow(data.find(({id}) => id === rowId));   
  }

  return (
    <div className="container">
      <SearchComponent 
        searchValue = {searchValue }
        setSearchValue = {setSearchValue}> 
      </SearchComponent>

      <TableComponent
        searchValue = {searchValue}
        data = {data}
        selectRow = {selectRow}
        setData = {setData}
        currentPage = {currentPage}
        rowPage = {rowPage}
        > 
      </TableComponent>

      <Pagination
        paginate = {setCurrentPage}
        rowPage = {rowPage}
        totalRows = {data.length}
      />

      {row ? <InfoTableComponent 
      row = {row}
       >  
       </InfoTableComponent> : null}  
    </div>
  );
}


export default App;
