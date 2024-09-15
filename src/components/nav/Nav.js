import React, { useEffect, useState } from "react";
import "./Nav.css";
import brangLogo from "../../assets/brand.png";
import Home from "../home/Home";
import Loader from "../loading/Loader";
import axios from "axios";

const Nav = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getUserData = async () => {
  //   try {
  //     setLoading(true);
  //     let API = "https://reqres.in/api/users?page=1";
  //     const response = await fetch(API);
  //     let data = await response.json();
  //     setUser(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //  }
  // };

  // const getUserData = async () => {
  //   const response = await fetch("https://reqres.in/api/users?page=1");
  //   const data = await response.json();
  //   setUser(data.data);
  // };

  const getUserData = async () => {
    setLoading(true);
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUser(response.data.data);
    setLoading(false);
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={brangLogo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="getUser">
          <button onClick={() => getUserData()}>Get Users</button>
        </div>
      </nav>

      {loading ? <Loader /> : <Home userData={user} />}
    </>
  );
};

export default Nav;
