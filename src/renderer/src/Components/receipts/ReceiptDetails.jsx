import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { forwardRef } from "react";
import DownloadReceipt from "../downloadUploadFiles/DownloadReceipt";

function ReceiptDetails({ individualreceipts, index, toggleTheme, theme, setTheme }) {
  const { id } = useParams();

  const [receipt9, setreceipt9] = useState([])

  function getObjectSpecific(objects, id) {
    let targetObject = null;

    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        targetObject = objects[i];
        break;
      }
    }

    if (targetObject !== null) {
      return targetObject;
    } else {
      return null;
    }
  }

  const navigate = useNavigate();
  const [thecolor, setthecolor] = useState("white");



  let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));

  let receipt = getObjectSpecific(newObj, id)
  console.log(receipt)


  useEffect(() => {

    window.localStorage.getItem("dataJSON");

    let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
    let receipt = getObjectSpecific(newObj, id)
    setreceipt9(receipt)

  }, [id])


  const deletereceipt = () => {

    const existingArray = JSON.parse(window.localStorage.getItem('dataJSON')) || [];

    const indexToRemove = existingArray.findIndex(obj => obj.id === id);

    if (indexToRemove !== -1) {
      existingArray.splice(indexToRemove, 1);
    }

    const updatedArray = JSON.stringify(existingArray);

    window.localStorage.setItem('dataJSON', updatedArray);

    navigate(`/receipts`);

  };

  const handleDelete = () => {
    deletereceipt();
  };



  const textcoloring = {
    color: thecolor,
  };

  function printPage() {
    window.print()
  }


  function renderBusinessEntitInfo() {
    let businessNAME = localStorage.getItem("businessName") || null
    let businessLicense = localStorage.getItem("licenseNumbers") || null
    return (
      <>
        <p>{businessNAME}</p>
        <p>{businessLicense}</p>

      </>
    )
  }
  console.log(receipt.product_list)

  let currencycurrent = localStorage.getItem("currency")



  const ComponentToPrint = forwardRef((props, ref) => (
    <div ref={ref}>
      <table className="tableReceipt">
        <tr>
          <th>Category</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>ID</td>
          <td>{receipt.id}</td>
        </tr>
        <tr>
          <td>Store Info</td>
          <td>{renderBusinessEntitInfo()}</td>
        </tr>

        <tr>
          <td>Date</td>
          <td>{receipt.date}</td>
        </tr>

        <tr>
          <td>Name</td>
          <td>{receipt.name}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{receipt.receipt_description}</td>
        </tr>
        <tr>
          <td>Product List</td>
          <td>{receipt.product_list.map(product => {
            return (
              <p>{product.name} ... {product.cost} {currencycurrent}</p>
            )
          }
          )}</td>
        </tr>
        <tr>
          <td>Tax Amount</td>
          <td>{receipt.tax_Amount}%</td>
        </tr>
        <tr>
          <td>Total Tax Collected</td>
          <td>{receipt.total_tax}</td>
        </tr>  <tr>
          <td>Grand Total</td>
          <td>{receipt.total}</td>
        </tr>

      </table>
    </div>
  ));

  function PrintComponent() {
    const componentRef = useRef();

    return (
      <div>
        <ComponentToPrint ref={componentRef} />
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => componentRef.current}
        />
      </div>
    );
  }



  return (
    <div className="printFriendly">


      <div className="spacerDIV"></div>

      <article key={receipt9.id}>
        {PrintComponent()}

        <div className="showNavigation">
          <span>
            <Link to={`/receipts`}>
              <button className="backButton">Back</button>
            </Link>
          </span>
          <span>
            <Link to={`/receipts/${receipt9.id}/edit`}>
              <button className="editbutton">Edit</button>
            </Link>
          </span>
          <span>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </span>
        </div>
        <DownloadReceipt receipt9={receipt9} />
        {/* <button onClick={()=>{window.print()}}>Print Page</button> */}
      </article>

    </div>
  );

}

export default ReceiptDetails;
