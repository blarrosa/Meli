import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Layout from "../Layout/layout";
import Home from "../../pages/Home";
import PLP from "../../pages/PLP";
import PDP from "../../pages/PDP";
import PLPContextProvider from "../Context/PLPContext";
import PDPContextProvider from "../Context/PDPContext";

function App() {
  return (
    <Router>
      <PLPContextProvider>
        <PDPContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<PLP />} />
              <Route path="/items/:id" element={<PDP />} />
            </Route>
          </Routes>
        </PDPContextProvider>
      </PLPContextProvider>
    </Router>
  );
}

export default App;
