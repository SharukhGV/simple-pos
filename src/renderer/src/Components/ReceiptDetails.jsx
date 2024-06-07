import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import DownloadReceipt from "./DownloadReceipt";
function ReceiptDetails({ individualreceipts, index }) {
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






  console.log(receipt.product_list)



  return (
    <div>


      <div className="spacerDIV"></div>

      <article className="cardContact" key={receipt9.id}>

        <legend>
          <strong style={textcoloring} className="everyoneHASreceipts">Your Specific Receipt...</strong>
        </legend>
{/*   id: uuidv4(),
    totaltotal: products,
    total: grandTotal,
    date: date7,
    tax_Amount: 0,
    receipt_description: "" */}


<table  className="thedreamtable">
  <tr>
    <th>Category</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>ID</td>
    <td>{receipt.id}</td>
  </tr>
  <tr>
    <td>Headline</td>
    <td>{receipt.name}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{receipt.receipt_description}</td>
  </tr>
  <tr>
    <td>Grand Total</td>
    <td>{receipt.total}</td>
  </tr>
  <tr>
    <td>Tax Amount</td>
    <td>{receipt.tax_Amount}</td>
  </tr>
  <tr>
    <td>Product List</td>
    <td>{receipt.product_list.map(product=>{
  return(
<div>{product.name} ---------- ${product.cost} USD</div>
  )
}
)}</td>
  </tr>
</table>


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
<DownloadReceipt receipt9={receipt9}/>

      </article>

    </div>
  );

}

export default ReceiptDetails;
