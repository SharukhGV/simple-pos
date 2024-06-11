import { useState } from "react"


function StoreInfo() {

    const [storeName, setStoreName] = useState()

    function handletextchange(event) {
        setStoreName(event.target.value)
    }

    const [licenseName, setLicenseName] = useState()

    function handletextchangeLicense(event) {
        setLicenseName(event.target.value)
    }


    function onsubmitBusinessEntity() {
        if (!!localStorage.getItem("businessName") || !!localStorage.getItem("licenseNumbers")) {

            localStorage.removeItem("businessName")
            localStorage.removeItem("licenseNumbers")


        }
        localStorage.setItem("businessName", `${storeName}`)
        localStorage.setItem("licenseNumbers", `${licenseName}`)


    }

    return (
        <>
            <form onSubmit={onsubmitBusinessEntity}>
                <h3>Information Submitted Will appear on Receipt. To Overwrite, just resubmit</h3>
                <input type="text" onChange={handletextchange} value={storeName} placeholder="Enter Business Name"></input>
                <h3>If more than one License #, separate with commas ","</h3>

                <input type="text" onChange={handletextchangeLicense} value={licenseName} placeholder="Enter License Number(s)"></input>
                <input type="submit"></input>

            </form>
        </>
    )

}

export default StoreInfo