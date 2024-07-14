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

    const [currency, setCurrency] = useState()

    function handleCurrencyChange(event) {
        setCurrency(event.target.value)
    }


    function onsubmitBusinessEntity() {
        if (!!localStorage.getItem("businessName") || !!localStorage.getItem("licenseNumbers") || !!localStorage.getItem("currency")) {

            localStorage.removeItem("businessName")
            localStorage.removeItem("licenseNumbers")
            localStorage.removeItem("currency")


        }
        localStorage.setItem("businessName", `${storeName}`)
        localStorage.setItem("licenseNumbers", `${licenseName}`)
        localStorage.setItem("currency", `${currency}`)


    }

    return (
        <div style={{maxWidth:"500px", margin:"auto"}}>
            <form onSubmit={onsubmitBusinessEntity}>
                <h3>Information Submitted Will appear on Receipt. To Overwrite, just resubmit</h3>
                <input type="text" onChange={handletextchange} value={storeName} placeholder="Enter Business Name"></input>
                <h3>If more than one License #, separate with commas ","</h3>

                <input type="text" onChange={handletextchangeLicense} value={licenseName} placeholder="Enter License Number(s)"></input>
                <input type="submit"></input>
                <select onChange={handleCurrencyChange} value={currency} name="currency">
  <option value="AED">United Arab Emirates Dirham (AED)</option>
  <option value="AFN">Afghan Afghani (AFN)</option>
  <option value="ALL">Albanian Lek (ALL)</option>
  <option value="AMD">Armenian Dram (AMD)</option>
  <option value="ANG">Netherlands Antillean Guilder (ANG)</option>
  <option value="AOA">Angolan Kwanza (AOA)</option>
  <option value="ARS">Argentine Peso (ARS)</option>
  <option value="AUD">Australian Dollar (AUD)</option>
  <option value="AWG">Aruban Florin (AWG)</option>
  <option value="AZN">Azerbaijani Manat (AZN)</option>
  <option value="BAM">Bosnia-Herzegovina Convertible Mark (BAM)</option>
  <option value="BBD">Barbadian Dollar (BBD)</option>
  <option value="BDT">Bangladeshi Taka (BDT)</option>
  <option value="BGN">Bulgarian Lev (BGN)</option>
  <option value="BHD">Bahraini Dinar (BHD)</option>
  <option value="BIF">Burundian Franc (BIF)</option>
  <option value="BMD">Bermudian Dollar (BMD)</option>
  <option value="BND">Brunei Dollar (BND)</option>
  <option value="BOB">Bolivian Boliviano (BOB)</option>
  <option value="BRL">Brazilian Real (BRL)</option>
  <option value="BSD">Bahamian Dollar (BSD)</option>
  <option value="BTN">Bhutanese Ngultrum (BTN)</option>
  <option value="BWP">Botswana Pula (BWP)</option>
  <option value="BYN">Belarusian Ruble (BYN)</option>
  <option value="BZD">Belize Dollar (BZD)</option>
  <option value="CAD">Canadian Dollar (CAD)</option>
  <option value="CDF">Congolese Franc (CDF)</option>
  <option value="CHF">Swiss Franc (CHF)</option>
  <option value="CLP">Chilean Peso (CLP)</option>
  <option value="CNY">Chinese Yuan (CNY)</option>
  <option value="COP">Colombian Peso (COP)</option>
  <option value="CRC">Costa Rican Colón (CRC)</option>
  <option value="CUP">Cuban Peso (CUP)</option>
  <option value="CVE">Cape Verdean Escudo (CVE)</option>
  <option value="CZK">Czech Koruna (CZK)</option>
  <option value="DJF">Djiboutian Franc (DJF)</option>
  <option value="DKK">Danish Krone (DKK)</option>
  <option value="DOP">Dominican Peso (DOP)</option>
  <option value="DZD">Algerian Dinar (DZD)</option>
  <option value="EGP">Egyptian Pound (EGP)</option>
  <option value="ERN">Eritrean Nakfa (ERN)</option>
  <option value="ETB">Ethiopian Birr (ETB)</option>
  <option value="EUR">Euro (EUR)</option>
  <option value="FJD">Fijian Dollar (FJD)</option>
  <option value="FKP">Falkland Islands Pound (FKP)</option>
  <option value="FOK">Faroese Króna (FOK)</option>
  <option value="GBP">British Pound Sterling (GBP)</option>
  <option value="GEL">Georgian Lari (GEL)</option>
  <option value="GGP">Guernsey Pound (GGP)</option>
  <option value="GHS">Ghanaian Cedi (GHS)</option>
  <option value="GIP">Gibraltar Pound (GIP)</option>
  <option value="GMD">Gambian Dalasi (GMD)</option>
  <option value="GNF">Guinean Franc (GNF)</option>
  <option value="GTQ">Guatemalan Quetzal (GTQ)</option>
  <option value="GYD">Guyanese Dollar (GYD)</option>
  <option value="HKD">Hong Kong Dollar (HKD)</option>
  <option value="HNL">Honduran Lempira (HNL)</option>
  <option value="HRK">Croatian Kuna (HRK)</option>
  <option value="HTG">Haitian Gourde (HTG)</option>
  <option value="HUF">Hungarian Forint (HUF)</option>
  <option value="IDR">Indonesian Rupiah (IDR)</option>
  <option value="ILS">Israeli New Shekel (ILS)</option>
  <option value="IMP">Isle of Man Pound (IMP)</option>
  <option value="INR">Indian Rupee (INR)</option>
  <option value="IQD">Iraqi Dinar (IQD)</option>
  <option value="IRR">Iranian Rial (IRR)</option>
  <option value="ISK">Icelandic Króna (ISK)</option>
  <option value="JEP">Jersey Pound (JEP)</option>
  <option value="JMD">Jamaican Dollar (JMD)</option>
  <option value="JOD">Jordanian Dinar (JOD)</option>
  <option value="JPY">Japanese Yen (JPY)</option>
  <option value="KES">Kenyan Shilling (KES)</option>
  <option value="KGS">Kyrgyzstani Som (KGS)</option>
  <option value="KHR">Cambodian Riel (KHR)</option>
  <option value="KID">Kiribati Dollar (KID)</option>
  <option value="KMF">Comorian Franc (KMF)</option>
  <option value="KRW">South Korean Won (KRW)</option>
  <option value="KWD">Kuwaiti Dinar (KWD)</option>
  <option value="KYD">Cayman Islands Dollar (KYD)</option>
  <option value="KZT">Kazakhstani Tenge (KZT)</option>
  <option value="LAK">Lao Kip (LAK)</option>
  <option value="LBP">Lebanese Pound (LBP)</option>
  <option value="LKR">Sri Lankan Rupee (LKR)</option>
  <option value="LRD">Liberian Dollar (LRD)</option>
  <option value="LSL">Lesotho Loti (LSL)</option>
  <option value="LYD">Libyan Dinar (LYD)</option>
  <option value="MAD">Moroccan Dirham (MAD)</option>
  <option value="MDL">Moldovan Leu (MDL)</option>
  <option value="MGA">Malagasy Ariary (MGA)</option>
  <option value="MKD">Macedonian Denar (MKD)</option>
  <option value="MMK">Burmese Kyat (MMK)</option>
  <option value="MNT">Mongolian Tögrög (MNT)</option>
  <option value="MOP">Macanese Pataca (MOP)</option>
  <option value="MRU">Mauritanian Ouguiya (MRU)</option>
  <option value="MUR">Mauritian Rupee (MUR)</option>
  <option value="MVR">Maldivian Rufiyaa (MVR)</option>
  <option value="MWK">Malawian Kwacha (MWK)</option>
  <option value="MXN">Mexican Peso (MXN)</option>
  <option value="MYR">Malaysian Ringgit (MYR)</option>
  <option value="MZN">Mozambican Metical (MZN)</option>
  <option value="NAD">Namibian Dollar (NAD)</option>
  <option value="NGN">Nigerian Naira (NGN)</option>
  <option value="NIO">Nicaraguan Córdoba (NIO)</option>
  <option value="NOK">Norwegian Krone (NOK)</option>
  <option value="NPR">Nepalese Rupee (NPR)</option>
  <option value="NZD">New Zealand Dollar (NZD)</option>
  <option value="OMR">Omani Rial (OMR)</option>
  <option value="PAB">Panamanian Balboa (PAB)</option>
  <option value="PEN">Peruvian Sol (PEN)</option>
  <option value="PGK">Papua New Guinean Kina (PGK)</option>
  <option value="PHP">Philippine Peso (PHP)</option>
  <option value="PKR">Pakistani Rupee (PKR)</option>
  <option value="PLN">Polish Złoty (PLN)</option>
  <option value="PYG">Paraguayan Guaraní (PYG)</option>
  <option value="QAR">Qatari Riyal (QAR)</option>
  <option value="RON">Romanian Leu (RON)</option>
  <option value="RSD">Serbian Dinar (RSD)</option>
  <option value="RUB">Russian Ruble (RUB)</option>
  <option value="RWF">Rwandan Franc (RWF)</option>
  <option value="SAR">Saudi Riyal (SAR)</option>
  <option value="SBD">Solomon Islands Dollar (SBD)</option>
  <option value="SCR">Seychellois Rupee (SCR)</option>
  <option value="SDG">Sudanese Pound (SDG)</option>
  <option value="SEK">Swedish Krona (SEK)</option>
  <option value="SGD">Singapore Dollar (SGD)</option>
  <option value="SHP">Saint Helena Pound (SHP)</option>
  <option value="SLL">Sierra Leonean Leone (SLL)</option>
  <option value="SOS">Somali Shilling (SOS)</option>
  <option value="SRD">Surinamese Dollar (SRD)</option>
  <option value="SSP">South Sudanese Pound (SSP)</option>
  <option value="STN">São Tomé and Príncipe Dobra (STN)</option>
  <option value="SYP">Syrian Pound (SYP)</option>
  <option value="SZL">Eswatini Lilangeni (SZL)</option>
  <option value="THB">Thai Baht (THB)</option>
  <option value="TJS">Tajikistani Somoni (TJS)</option>
  <option value="TMT">Turkmenistani Manat (TMT)</option>
  <option value="TND">Tunisian Dinar (TND)</option>
  <option value="TOP">Tongan Paʻanga (TOP)</option>
  <option value="TRY">Turkish Lira (TRY)</option>
  <option value="TTD">Trinidad and Tobago Dollar (TTD)</option>
  <option value="TVD">Tuvaluan Dollar (TVD)</option>
  <option value="TWD">New Taiwan Dollar (TWD)</option>
  <option value="TZS">Tanzanian Shilling (TZS)</option>
  <option value="UAH">Ukrainian Hryvnia (UAH)</option>
  <option value="UGX">Ugandan Shilling (UGX)</option>
  <option value="USD">United States Dollar (USD)</option>
  <option value="UYU">Uruguayan Peso (UYU)</option>
  <option value="UZS">Uzbekistani Soʻm (UZS)</option>
  <option value="VES">Venezuelan Bolívar (VES)</option>
  <option value="VND">Vietnamese Đồng (VND)</option>
  <option value="VUV">Vanuatu Vatu (VUV)</option>
  <option value="WST">Samoan Tālā (WST)</option>
  <option value="XAF">Central African CFA Franc (XAF)</option>
  <option value="XCD">East Caribbean Dollar (XCD)</option>
  <option value="XDR">Special Drawing Rights (XDR)</option>
  <option value="XOF">West African CFA Franc (XOF)</option>
  <option value="XPF">CFP Franc (XPF)</option>
  <option value="YER">Yemeni Rial (YER)</option>
  <option value="ZAR">South African Rand (ZAR)</option>
  <option value="ZMW">Zambian Kwacha (ZMW)</option>
  <option value="ZWL">Zimbabwean Dollar (ZWL)</option>
</select>
            </form>
        </div>
    )

}

export default StoreInfo