
import dreamLogo2 from "./dreamLogo2.png"
import UploadJSON from "../Components/UploadJSON";
// import DownloadJSON from "../Components/DownloadJSON";
function Home({ fileData, setFileData }) {

  const repopulateComponent = () => {

    if (!!fileData) {
      window.localStorage.setItem("dataJSON", JSON.stringify(fileData));
      window.alert("You Have successfully Repopulated Your Receipts. Please Restart App.")

    }
    else {
      window.alert("Please Upload data.json File First...")
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
        <p>A Receipt and Sales Tracker for Small Businesses</p>
        <p style={pixstyle2}>
          An estimated 6000 entries containing about 500 characters each can be stored locally on this application. However, anticipate the scenario where this amount is much less. Remember to download a backup of your data every so often. This appliction is still in development, however, it has been tested to work, just not with lots of data. You can always repopulate your data whenever you feel the need to by downloading the JSON file of your data. When uploading data to the app, do not alter the data and do not submit any other JSON data besides the one from the app and it must have atleast one entry in it.

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
