import React from "react";
import logo from "../images/logo.JPG";

function Onboardingcomplete() {
  const name = localStorage.getItem("Fullname"); //retrieving username from localstorage and displaying it on this page
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
          <div className="divider_page_full"></div>
          <div className="page4 page4_active">
            <p>4</p>
          </div>
        </div>

        <div className="heading">
          <div className="completed_box">
            <p>✔</p>
          </div>
          <h2>Congratulations,{name}!</h2>
          <h4>You have completed onboarding, you can start using the Eden!</h4>
        </div>

        <div className="userform workspace_form">
          <button className="create_workspace">Launch Eden</button>
        </div>
      </div>
    </div>
  );
}

export default Onboardingcomplete;
