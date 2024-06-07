import { useEffect, useState } from "react";
import DownloadJSON from "./DownloadJSON";
import DownloadPDFButton from "./DownloadPDFButton";
import Receipt from "./Receipt";
import { Link } from "react-router-dom";
function Receipts({ fileData }) {
  const [dreams7, setdreams7] = useState([]);



  useEffect(() => {
    const newObj = JSON.parse(window.localStorage.getItem('dataJSON'))
    setdreams7(newObj)

  }, [])


const [query, setQuery]= useState("")
  function handletextChangeSearch(e){
setQuery(e.target.value)
  }
  const filterById = dreams7.filter((product)=>{
   return product.id.includes(query)
  })
  return (

    <div className="cardContact">
      <h1>All Receipts</h1>
      <div>Your Receipts are stored locally. You can choose to download your data as a PDF (for your records) or JSON File (for reupload). This app utilizes local storage instead of an external database to protect your privacy. </div>
<input type="text" onChange={handletextChangeSearch} value ={query}></input>
      <div className="cardContact">

        <table className="thedreamtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Total Cost</th>
            </tr></thead>
          {!!query ? <>{filterById.map((receipt) => {

            return (

              <tbody>
              <tr>
                  <td>{receipt.date}</td>
              <td><Link to={`/receipts/${receipt.id}`}>{receipt.id}</Link>
          </td>
              <td>{receipt.total}</td>
              </tr>
              </tbody>
            );
          })}</>
:
dreams7.map((receipt) => {

  return (

    <Receipt
      key={receipt.id} receipt={receipt}
    />
  );
})}
        

        </table>
        <DownloadPDFButton />
        <DownloadJSON fileData={fileData} />

      </div></div>
  );
}


export default Receipts;