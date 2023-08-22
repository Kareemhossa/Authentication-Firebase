import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Componant/Signin";
import Signup from "./Componant/Signup";
import Account from "./Componant/Account";
import PageOne from "./Welcome/PageOne";
import { AuthContextProvider } from "./Contextapi/AuthContext";
import PageNotFound from "./Welcome/PageNotFound";
import ProtectRoute from "./Contextapi/ProtectRoute";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/welcome" element={<PageOne />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* Use correct casing for ProtectRoute */}
        <Route
          path="/account"
          element={
            <ProtectRoute>
              <Account />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
