import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <BrowserRouter>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </BrowserRouter>
  );
};

export default App;