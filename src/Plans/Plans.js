import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo.JPG";
import multipleusers from "../images/multipleusers.JPG";
import usericon from "../images/usericon.JPG";

function Plans() {
  const [myself, setMyself] = useState();
  const [team, setTeam] = useState();

  const chooseMyself = () => {
    setMyself("myself");
  };

  const chooseTeam = () => {
    setTeam("team");
  };

  return (
    <div className="home">
      <div className="welcome workspace">
        <div className="logo">
          <img src={logo} />
          <p>Eden</p>
        </div>

        <div className="pages">
          <div className="page1">
            <p>1</p>
          </div>
          <div className="divider_page1"></div>
          <div className="divider_page_full"></div>
          <div className="page2 page2_active">
            <p>2</p>
          </div>
          <div className="divider_page2 divider_page2_active"></div>
          <div className="divider_page_full"></div>
          <div className="page3 page3_active">
            <p>3</p>
          </div>
          <div className="divider_page3 divider_page3_active"></div>
          <div className="divider_page_half"></div>
          <div className="page4">
            <p>4</p>
          </div>
        </div>

        <div className="heading">
          <h2>How are you planning to use Eden?</h2>
          <h4>We'll streamline your setup experience accordingly.</h4>
        </div>

        <div className="userform workspace_form">
          <div className="planning_options">
            <div className="for_myself" onClick={chooseMyself}>
              <img src={usericon} />
              <p id="for_myself_heading">For myself</p>
              <p id="for_myself_desc">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>

            <div className="with_team" onClick={chooseTeam}>
              <img src={multipleusers} />
              <p id="with_team_heading">With my team</p>
              <p id="with_team_desc">
                Wikis,docs,tasks & projects, all in one place.
              </p>
            </div>
          </div>
          <Link to="/Onboardingcomplete">
            <button className="create_workspace">Create Workspace</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Plans;
