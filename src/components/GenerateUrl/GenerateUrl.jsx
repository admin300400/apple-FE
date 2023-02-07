import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import CryptoJS from "crypto-js";

const GenerateUrl = () => {
  const navigate = useNavigate();
  const data1 = randomString(10);
  const key = "s";
  const encrypt = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString();
  };
  const encryptedData = encrypt(data1, key);

  function randomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  useEffect(() => {
    navigate(`/signin/?applIdKey?=${encryptedData}`);

    return () => {
      <>loading</>;
    };
  }, []);
};

export default GenerateUrl;
