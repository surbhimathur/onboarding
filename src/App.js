import "./App.css";

import { Route, Routes } from "react-router-dom";

import Onboardingcomplete from "./Onboardingcomplete/Onboardingcomplete";
import Plans from "./Plans/Plans";
import Userdetails from "./Userdetails/Userdetails";
import Workspacedetails from "./Workspacedetails/Workspacedetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Userdetails />} />
        <Route path="/Workspacedetails" element={<Workspacedetails />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Onboardingcomplete" element={<Onboardingcomplete />} />
      </Routes>
    </div>
  );
}

export default App;
