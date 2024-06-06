import { useEffect, useState } from "react";
import DownloadJSON from "./DownloadJSON";
import DownloadPDFButton from "./DownloadPDFButton";
import Receipt from "./Receipt";
function Receipts({ fileData }) {
  const [dreams7, setdreams7] = useState([]);



  useEffect(() => {
    const newObj = JSON.parse(window.localStorage.getItem('dataJSON'))
    setdreams7(newObj)

  }, [])




  return (

    <div className="cardContact">
      <h1>All Receipts</h1>
      <div>Your Receipts are stored locally. You can choose to download your data as a PDF (for your records) or JSON File (for reupload). This app utilizes local storage instead of an external database to protect your privacy. </div>

      <div className="cardContact">
        <div class="background-container">
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div></div>
        <table className="thedreamtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Total Cost</th>
            </tr></thead>
          {dreams7.map((receipt) => {

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