import React from "react";
import "./build/css/index.css";
import { StyledEngineProvider } from "@mui/material";
import MedicalArchive from "./pages/UserCabinet/sideNavMenuItems/MedicalArchive/MedicalArchive";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="main-container">
        <MedicalArchive />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
