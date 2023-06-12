import React from "react";
import "./Home.css";

const Home = ({ userData }) => {
  return (
    <>
      <div className="main-home">
        {userData?.map((data, index) => {
          const { avatar, email, first_name, last_name } = data;

          return (
            <div className="box" key={index}>
              <div className="details">
                <img src={avatar} alt="avtar" />
                <p className="name">
                  <span>{first_name} </span>
                  <span>{last_name}</span>
                </p>
                <p className="email">{email}</p>
                <button className="msg">Message</button> &nbsp;
                <button className="msg">Follow</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
