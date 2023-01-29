import './App.css';
import fakeData from "./MOCK_DATA.json"
import {useMemo} from 'react'
import {useTable} from 'react-table' 

function App() {
  const data = useMemo(() => fakeData, [])
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "University",
      accessor: "university",
    },
  ])



  return (
    <div className="App">
    </div>
  );
}

export default App;
