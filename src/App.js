import { Route, Routes } from "react-router-dom";
import Form from "./components/pages/Form/From";
import Home from "./components/pages/Home/Home";
import Result from "./components/pages/Result/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
