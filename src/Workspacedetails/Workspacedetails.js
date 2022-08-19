import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo.JPG";

function Workspacedetails() {
  const [WorkspaceName, setWorkspaceName] = useState();
  const [WorkspaceURL, setWorkspaceURL] = useState();

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
          <div className="divider_page_half"></div>
          <div className="page3">
            <p>3</p>
          </div>
          <div className="divider_page3"></div>
          <div className="page4">
            <p>4</p>
          </div>
        </div>

        <div className="heading">
          <h2>Let's set up a home for all your work</h2>
          <h4>You can always create another workspace later.</h4>
        </div>

        <div className="userform workspace_form">
          <p>Workspace Name</p>
          <input
            type="text"
            placeholder="Eden"
            onChange={(e) => setWorkspaceName(e.target.value)}
          ></input>
          <p className="display_name">
            Workspace URL<span>(optional)</span>
          </p>
          <div className="workspace_url">
            <p>www.eden.com/</p>
            <input
              type="url"
              placeholder="Example"
              onChange={(e) => setWorkspaceURL(e.target.value)}
            ></input>
          </div>
          <Link to="/Plans">
            <button className="create_workspace">Create Workspace</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workspacedetails;
