import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Nav from "./Components/Nav";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";

import "./App.css";
import { useEffect } from "react";
import Receipts from "./Components/Receipts";
import ReceiptDetails from "./Components/ReceiptDetails";
import EditForm from "./Components/EditForm";
import NewForm from "./Components/NewForm";


function App() {
  const [fileData, setFileData] = useState(null);


useEffect(()=>{

  if(window.localStorage.getItem("dataJSON")){

      window.localStorage.getItem("dataJSON");

  }else{
  window.localStorage.setItem("dataJSON", JSON.stringify([]));
  }
},[])

  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home fileData={fileData} setFileData={setFileData} />} />
      <Route path="/receipts" element={<Receipts fileData={fileData} />} />
      <Route path="/receipts/:id" element={<ReceiptDetails />} />
      <Route path="/receipts/:id/edit" element={<EditForm />} />
      <Route path="/receipts/new" element={<NewForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
