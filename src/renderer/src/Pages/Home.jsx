
import dreamLogo2 from "./dreamLogo2.png"
import UploadJSON from "../Components/UploadJSON";
// import DownloadJSON from "../Components/DownloadJSON";
function Home({ fileData, setFileData }) {

  const repopulateComponent = () => {
  
if(!!fileData){
    window.localStorage.setItem("dataJSON", JSON.stringify(fileData));
    window.alert("You Have successfully Repopulated Your Dreams")

}
    else{ window.alert("Please Upload data.json File First...")
}
  };

  const pixstyle = {
    fontSize: "15px",
  };
  const pixstyle2 = {
    fontSize: "15px",
  };


  return (
    <div className="cardContact">
   
      <div className="homePAge">
      
        <h1>Simple POS</h1>
        <p>Simplicity. Privacy. Truth</p>
    
        <p style={pixstyle2}>    


  </p>
      </div>
     
     
        <UploadJSON setFileData={setFileData} />
   

      <button className='buttonPDF'
        style={{ backgroundColor: "#ccffff", color: "black" }}
        onClick={repopulateComponent}
      >
       ⬇💥 Erase and Repopulate Data 📂
      </button>
    </div>
  );
}

export default Home;
