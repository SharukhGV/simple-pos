import { useNavigate, Link } from "react-router-dom";//
import { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

function NewForm() {
  const date7 = new Date();
  const [products, setProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0)

  const [taxable, settaxable] = useState(0)
  const [nonTaxable, setnontaxable] = useState(0)
  
  const [receipt, setreceipt] = useState({
    id: uuidv4(),
    product_list: [products],
    total: grandTotal,
    date: date7,
    tax_Amount: 0,
    receipt_description: ""
  });

  useEffect(() => {

    window.localStorage.getItem("dataJSON");
  }, [])


  const navigate = useNavigate();

  const handleTextChange = (e, fieldName, index) => {
    const value = e.target.value;

    if (fieldName === 'name') {
      setreceipt({ ...receipt, [fieldName]: value });
    } else if (fieldName === 'date') {
      setreceipt({ ...receipt, [fieldName]: new Date(value) });
    } else if (fieldName === 'tax_Amount') {
      setreceipt({ ...receipt, [fieldName]:value });
    } else if (fieldName === 'receipt_description') {
      setreceipt({ ...receipt, [fieldName]: value });
    } 
    else if (fieldName === 'productName') {
      const updatedProducts = [...products];
      updatedProducts[index].name = value;
      setProducts(updatedProducts);      
      setreceipt({...receipt, 'product_list':[...products]})

    } else if (fieldName === 'productCost') {
      const updatedProducts = [...products];
      updatedProducts[index].cost = parseFloat(value);
      setProducts(updatedProducts);
      setreceipt({...receipt, 'product_list':[...products]})

    } else if (fieldName === 'taxable') {
      const updatedProducts = [...products];
      updatedProducts[index].taxable = value === 'true';
      setProducts(updatedProducts);
      setreceipt({...receipt, 'product_list':[...products]})

    }
  };



  const addProduct = () => {
    // When the button is clicked, add a new product to the state
    setProducts([...products, { name: '', cost: 0, taxable: true }]);
  };


  useEffect(() => {
    function totalCostProducts() {
      let cost = 0
      setGrandTotal(0)
      let totalArray = products
        .filter((x) => x.taxable === true)
        .map((x) => {cost+=(x.cost+(x.cost*(receipt.tax_Amount*.01)))});

      let noTaxArray = products
        .filter((x) => x.taxable === false)
        .map((x) => cost+=x.cost);


      setGrandTotal(cost.toFixed(2))
setreceipt({...receipt,"total":grandTotal})
      // Grand Total with Taxes
    }
    totalCostProducts();
  }, [products, receipt.tax_Amount]);


  function handleSubmit(event) {
    event.preventDefault();


    let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
    newObj.push(receipt);
    const updatedArray = JSON.stringify(newObj);
    window.localStorage.setItem("dataJSON", updatedArray);

    navigate("/receipts")

  }
  console.log(receipt)

  console.log(products)

  return (

    <div className="cardContact">
      
      <h1 className="spacerDIV"><strong>New Receipt</strong></h1>
      <div className="edit">
        <form onSubmit={handleSubmit}>
        

          <input
            id="name"
            value={receipt.name}
            type="text"
            onChange={(e) => handleTextChange(e, 'name')}
            placeholder="Name of Receipt or Customer..."
            required
          />

          <input
            id="date"
            type="date"
            value={moment(receipt.date).format("YYYY-MM-DD")}
            onChange={(e) => handleTextChange(e, 'date')}
          />


          <textarea
            id="receipt_description"
            name="receipt_description"
            value={receipt.receipt_description}
            placeholder="Write Any Notes Here to Appear on Receipt..."
            onChange={(e) => handleTextChange(e, 'receipt_description')}
            rows="5"
            cols="50"
            required
          />
  <label>Add Tax Amount as Percent</label>
          <br></br>
          <input style={{width:"150px", height:"25px", borderRadius:"10px",paddingLeft:"50px"}}
            id="tax_Amount"
            type="number"
            name="tax_Amount"
            value={receipt.tax_Amount}
            onChange={(e) => handleTextChange(e, 'tax_Amount')}
            required
          />%

          <div style={{ color: "yellow", backgroundColor: "purple",width:"150px",height:"25px" }} onClick={addProduct}>Add Product</div>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={(e) => handleTextChange(e, 'productName', index)}
                />
                <label >
                  Product Price
                  <input
                    type="number"
                    placeholder="Product Cost"
                    value={product.cost}
                    onChange={(e) => handleTextChange(e, 'productCost', index)}
                  /></label>
                <br></br>
                <label>
                  Taxable?:
                  <select
                    value={product.taxable}
                    onChange={(e) => handleTextChange(e, 'taxable', index)}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </label>
              </li>
            ))}
          </ul>




          <p>GRAND TOTAL: <strong>${grandTotal}</strong></p>



          <input type="submit" />
        </form>

        <Link to={`/receipts `}>
          <button className="backButton">Go Back to All Receipts!</button>
        </Link>

      </div></div>
  );
}

export default NewForm;
