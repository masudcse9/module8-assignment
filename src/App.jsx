import {BrowserRouter, Route, Routes} from "react-router-dom";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Income/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;