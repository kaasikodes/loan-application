import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import { APP_ROUTES } from "appConstants";
import RepaymentSchedule from "pages/RepaymentSchedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />

        <Route
          path={APP_ROUTES.repaymentSchedule().format}
          element={<RepaymentSchedule />}
        />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
