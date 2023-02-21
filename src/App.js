import Homepage from "./Components/Homepages/Homepage.jsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;
