// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Receipt({  receipt }) {

  const [name1, setname1] = useState([]);   
  const [topic1, settopic1] = useState([]);   
  const [identification, setidentification] = useState([]);   

useEffect(()=>{

  window.localStorage.getItem("dataJSON");
  setname1(receipt.id)
  settopic1(receipt.date)
  setidentification(receipt.total)
},[,receipt.id,receipt.date,receipt.total])


  return (
    <>
<tbody>
    <tr>
        <td>{topic1}</td>
    <td><Link to={`/receipts/${name1}`}>{name1}</Link>
</td>
    <td>{identification}</td>
    </tr>
    </tbody>


</>


  );
}

export default Receipt;