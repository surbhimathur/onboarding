import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo.JPG";

function Userdetails() {
  const [fullname, setFullName] = useState();
  const [displayname, setDisplayName] = useState();

  const handleStorage = () => {
    localStorage.setItem("Fullname", fullname); //storing username in localstorage
  };

  return (
    <div className="home">
      <div className="welcome">
        <div className="logo">
          <img src={logo} />
          <p>Eden</p>
        </div>

        <div className="pages">
          <div className="page1">
            <p>1</p>
          </div>
          <div className="divider_page1"></div>
          <div className="divider_page_half"></div>
          <div className="page2">
            <p>2</p>
          </div>
          <div className="divider_page2"></div>
          <div className="page3">
            <p>3</p>
          </div>
          <div className="divider_page3"></div>
          <div className="page4">
            <p>4</p>
          </div>
        </div>

        <div className="heading">
          <h2>Welcome! First things first...</h2>
          <h4>You can always change them later.</h4>
        </div>

        <div className="userform">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Steve Jobs"
            onChange={(e) => setFullName(e.target.value)}
          ></input>
          <p className="display_name">Display Name</p>
          <input
            type="text"
            placeholder="Steve"
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          <Link to="/Workspacedetails">
            <button className="create_workspace" onClick={handleStorage}>
              Create Workspace
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
