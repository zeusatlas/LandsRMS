
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


const shared = () => {
  return (
    <Route path="/glc">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    
  )
}

export default shared